import { account, ID, databases } from "@/models/client/config";
import { db, usersTable } from "@/models/name";
import { Models, OAuthProvider, Query } from "appwrite"; 
import { create } from "zustand";

export interface UserProfile {
  $id: string;
  userId: string;
  name?: string;
  email: string;
  role?: string;
}

interface AuthState {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  error: unknown;
  userProfile: UserProfile | null;

  register: (email: string, password: string, name: string) => Promise<Models.User<Models.Preferences> | void>;
  login: (email: string, password: string) => Promise<Models.User<Models.Preferences> | void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  loginWithOAuth: (provider: OAuthProvider) => void;
}

async function addUserToTable(user: Models.User<Models.Preferences>) {
  // Add user to your "users" table in Appwrite
  await databases.createDocument(
    db,
    usersTable,
    ID.unique(),
    {
      userId: user.$id,
      name: user.name || "",
      email: user.email,
    }
  );
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  userProfile: null,
  // ✅ Register with email + password
  register: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      await account.create(ID.unique(), email, password, name);

      // Auto login after signup
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();

      // Ensure user is in users table
      await addUserToTable(user);

      set({ user, isLoading: false });
      return user;
    } catch (error) {
      console.error("Register failed:", error);
      set({ error, isLoading: false });
    }
  },
  
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();

      set({ user, isLoading: false });
      return user;
    } catch (error) {
      console.error("Login failed:", error);
      set({ error, isLoading: false });
    }
  },

  // ✅ Logout
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await account.deleteSession("current");
      set({ user: null, isLoading: false });
    } catch (error) {
      console.error("Logout failed:", error);
      set({ error, isLoading: false });
    }
  },

  // ✅ Fetch current user (on app load)
  fetchUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const user = await account.get();
      // Check if user exists in table
      const result = await databases.listDocuments(db, usersTable, [
        Query.equal("userId", user.$id),
      ]);
      if (result.total === 0) addUserToTable(user);
      if (result.total > 0) {
        // Map result to UserProfile interface
        const doc = result.documents[0];
        const userProfile: UserProfile = {
          $id: doc.$id,
          userId: doc.userId,
          name: doc.name,
          email: doc.email,
          role: doc.role || "student",
        };
        set({ userProfile });
      }
      set({ user, isLoading: false });
    } catch (error) {
      console.warn("Fetch user failed (probably not logged in):", error);
      set({ user: null, isLoading: false });
    }
  },

  // ✅ OAuth login (Google, GitHub, etc.)
  loginWithOAuth: (provider) => {
    try {
      account.createOAuth2Session(
        provider,
        `${window.location.origin}/`, // redirect on success
        `${window.location.origin}/login` // redirect on failure
      );
    } catch (error) {
      console.error("OAuth login failed:", error);
      set({ error });
    }
  },
}));
