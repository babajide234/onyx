import { create } from "zustand";

const loaderStore = create((set) => ({
  loader: false,
  setLoader: (value) => set({ loader: value }),
}));

export default loaderStore;
