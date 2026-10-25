import { create } from "zustand";

type HighlightProps = {
    enabled:boolean,
    setEnabled: (status:boolean) => void,
}

export const useHightLight = create<HighlightProps>()((set) => ({
    enabled: false,
    setEnabled: (status:boolean) => set({enabled: status})
}))