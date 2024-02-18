import { create } from "zustand";

export interface ModalState {
	modal: boolean;
	toggleModal: () => void;
}

export const useCounterModal = create<ModalState>((set) => ({
	modal: false,
	toggleModal: () => set((state) => ({ modal: !state.modal }))
}));