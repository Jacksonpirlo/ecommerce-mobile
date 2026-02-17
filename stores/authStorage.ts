import { AuthState } from "@/dto/contextAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,

      login: async (userData) => {
        try {
          const token = userData.token || userData.accessToken;
          set({
            user: userData,
            token: token,
            isAuthenticated: true,
          });
        } catch (error) {
          throw error;
        }
      },

      logout: async () => {
        try {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
          });
        } catch (error) {
          // Handle logout error silently
        }
      },

      setLoading: (loading) => set({ isLoading: loading }),

      checkAuth: async () => {
        try {
          const token = get().token;
          const user = get().user;

          if (token && user) {
            set({ isAuthenticated: true, isLoading: false });
          } else {
            set({ isAuthenticated: false, isLoading: false });
          }
        } catch (error) {
          set({ isAuthenticated: false, isLoading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setLoading(false);
      },
    },
  ),
);
