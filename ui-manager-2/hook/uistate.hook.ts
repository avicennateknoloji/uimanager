import { create } from "zustand";
import { UIState } from "../type/ui.state";
import { UIElementType } from "../type/ui.element.type";
export const useUIState = create<{
   open: boolean;
   state: UIState | null;
   openUI: (state: UIState) => void;
   closeUI: () => void;
}>((set) => ({
   open: false,
   state: null,
   openUI: (state) => set({ state, open: true }),
   closeUI: () => set({ open: false, state: null }),
}));