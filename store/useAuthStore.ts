import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
    isLogin: boolean,
    isLoginDialog: boolean,
    setUserNull: () => void,
    setUser: (payload: string) => void,
    setDialog: (status: boolean) => void,
}
export const useAuthStore = create<AuthState>()(persist((set) => ({
    isLogin: false,
    isLoginDialog: false,
    setUserNull: () => set({ isLogin: false, isLoginDialog: false }),
    setDialog: (status) => set({ isLoginDialog: status }),
    setUser: (payload) => {
        const hasData = payload;
        if (hasData) {
            set({ isLogin: true });
        }
    }
}), { name: "auth" }))