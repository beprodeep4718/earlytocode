import { account } from "@/lib/appwrite";
import { Models, OAuthProvider } from "appwrite";
import { create } from "zustand";

interface AuthState {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  error: unknown;

  register: (email: string, password: string, name: string) => Promise<Models.User<Models.Preferences> | void>;
  login: (email: string, password: string) => Promise<Models.User<Models.Preferences> | void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  loginWithOAuth: (provider: OAuthProvider) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  // ✅ Register with email + password
  register: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      await account.create("unique()", email, password, name);

      // Auto login after signup
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();

      set({ user, isLoading: false });
      return user;
    } catch (error) {
      console.error("Register failed:", error);
      set({ error, isLoading: false });
    }
  },

  // ✅ Login with email + password
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
      set({ user, isLoading: false });
    } catch {
      // not logged in
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
