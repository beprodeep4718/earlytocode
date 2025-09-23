// store/otp-store.ts
import { create } from 'zustand';
import { account, databases } from '@/models/client/config';
import { ID, Permission, Role, Query } from 'appwrite';
import { db, registrationsTable } from '@/models/name';

type OtpState = {
  phoneNumber: string;
  userId: string | null;
  verificationStep: 'enter-phone' | 'enter-otp' | 'success';
  isLoading: boolean;
  error: string | null;
  discountCode: string | null;

  setPhoneNumber: (number: string) => void;
  sendOtp: () => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  reset: () => void;
};

export const useOtpStore = create<OtpState>((set, get) => ({
  phoneNumber: '',
  userId: null,
  verificationStep: 'enter-phone',
  isLoading: false,
  error: null,
  discountCode: null,

  setPhoneNumber: (number) => set({ phoneNumber: number }),

  sendOtp: async () => {
    const { phoneNumber } = get();
    if (!phoneNumber || phoneNumber.length < 10) {
      set({ error: 'Please enter a valid phone number.' });
      return;
    }
    set({ isLoading: true, error: null });
    try {
      const session = await account.createPhoneToken(ID.unique(), phoneNumber);
      set({ userId: session.userId, verificationStep: 'enter-otp' });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ isLoading: false });
    }
  },

  verifyOtp: async (otp) => {
    const { userId, phoneNumber } = get();
    if (!userId) {
      set({ error: 'User session not found. Please try again.' });
      return;
    }
    set({ isLoading: true, error: null });
    try {
      await account.updatePhoneSession(userId, otp);
      
      // Check if they are an early bird
      const registrations = await databases.listDocuments(
        db,
        registrationsTable,
        [Query.limit(100)] // We only care if the count is < 100
      );
      
      const isEarlyBird = registrations.total < 100;
      
      // Store the number in our database
      await databases.createDocument(
        db,
        registrationsTable,
        ID.unique(),
        {
          phoneNumber,
          userId,
          isEarlyBird,
        },
        [
          Permission.read(Role.user(userId)), // Only the user can read their own entry
          Permission.update(Role.user(userId)), // Only the user can update it
        ]
      );

      set({
        verificationStep: 'success',
        discountCode: isEarlyBird ? 'EARLYBIRD25' : null,
      });

    } catch (e: any) {
      set({ error: 'Invalid OTP. Please try again.' });
    } finally {
      set({ isLoading: false });
    }
  },

  reset: () => set({
    phoneNumber: '',
    userId: null,
    verificationStep: 'enter-phone',
    isLoading: false,
    error: null,
    discountCode: null,
  }),
}));