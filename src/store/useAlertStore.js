import { create } from "zustand";

const useAlertStore = create((set) => ({
  alert: null,
  setAlert: (alert) => set({ alert }),
}));

export default useAlertStore;
