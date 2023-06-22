import { create } from "zustand";

const initialState = {
    success:false
}

const contactStore = create((set) => ({
    ...initialState,
    toggleSuccess: () => {
      set((state) => ({ success: !state.success }));
    }
  }));

export default contactStore