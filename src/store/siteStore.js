import { create } from "zustand";

const initialState = {
    isSidebar:false
}

const siteStore = create((set) => ({
    ...initialState,
    toggleNav: () => {
      set((state) => ({ isSidebar: !state.isSidebar }));
    }
  }));

export default siteStore