import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
    isLogin: boolean,
    setUserNull: () => void,
    setUser: (payload: string) => void,
}
export const useAuthStore = create<AuthState>()(persist((set) => ({
    isLogin: false,
    setUserNull: () => set({ isLogin: false }),
    setUser: (payload) => {
        const hasData = payload;
        if (hasData) {
            set({ isLogin: true });
        }
    }
}), { name: "auth" }))