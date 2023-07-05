import { create } from "zustand";
import { instance } from "../utils/service";
import loaderStore from "./loaderStore";
import useAlertStore from "./useAlertStore";

const initialState = {
  token: null,
  details: null,
  isLoggedIn: false,
  loading: false,
  resetStep: 0,
  ccde: null,
};

const userStore = create((set, get) => ({
  ...initialState,
  login: async (email, password) => {
    try {
      loaderStore.setState({ loading: true });

      const response = await instance.post("auth/login", { email, password });
      const { token } = response.data;

      set((state) => ({ ...state, token: token }));
      set((state) => ({ ...state, isLoggedIn: true }));
      set((state) => ({ ...state, details: response.data }));

      useAlertStore.getState().setAlert({
        message: "Login successful ",
        type: "success",
      });
    } catch (error) {
      loaderStore.setState({ loading: false });

      if (error.response && error.response.data) {
        const { data } = error.response;

        Object.keys(data).forEach((key) => {
          const messages = data[key];
          messages.forEach((message) => {
            useAlertStore.getState().setAlert({
              message,
              type: "error",
            });
          });
        });
      } else {
        useAlertStore.getState().setAlert({
          message: "An error occurred during login.",
          type: "error",
        });
      }
    } finally {
      loaderStore.setState({ loading: false });
      console.log("finalizing state after login");
    }
  },
  register: async (data) => {
    try {
      loaderStore.setState({ loading: true });
      const response = await instance.post("auth/register", data);
      if (response.status === 200) {
        useAlertStore.getState().setAlert({
          message: "Registration successful ",
          type: "success",
        });
      }
    } catch (error) {
      loaderStore.setState({ loading: false });

      if (error.response && error.response.data) {
        const { data } = error.response;

        Object.keys(data).forEach((key) => {
          const messages = data[key];
          messages.forEach((message) => {
            useAlertStore.getState().setAlert({
              message,
              type: "error",
            });
          });
        });
      } else {
        useAlertStore.getState().setAlert({
          message: "An error occurred during login.",
          type: "error",
        });
      }
    } finally {
      loaderStore.setState({ loading: false });
    }
  },
  resetPassword: async (email) => {
    try {
      /* empty */
      loaderStore.setState({ loading: true });

      const response = await instance.post("auth/ResetPasswordRequest", {
        email,
      });
      console.log(response);
      if (response.status === 200) {
        set((state) => ({ ...state, resetStep: get().resetStep + 1 }));

        useAlertStore.getState().setAlert({
          message: " Verification Code sent to email address",
          type: "success",
        });
      }

      return response.data;
    } catch (error) {
      loaderStore.setState({ loading: false });

      if (error.response && error.response.data) {
        const { data } = error.response;

        Object.keys(data).forEach((key) => {
          const messages = data[key];
          messages.forEach((message) => {
            useAlertStore.getState().setAlert({
              message,
              type: "error",
            });
          });
        });
      } else {
        useAlertStore.getState().setAlert({
          message: "An error occurred during login.",
          type: "error",
        });
      }
    } finally {
      /* empty */
      loaderStore.setState({ loading: false });

      console.log("Successfully logged");
    }
  },
  verify: async (resetCode, password) => {
    try {
      loaderStore.setState({ loading: true });
      const response = await instance.post("auth/ResetPassword", {
        resetCode,
        password,
      });

      useAlertStore.getState().setAlert({
        message: "Password reset successfully",
        type: "success",
      });

      return response.data;
    } catch (error) {
      loaderStore.setState({ loading: false });
      if (error.response && error.response.data) {
        const { data } = error.response;

        Object.keys(data).forEach((key) => {
          const messages = data[key];
          messages.forEach((message) => {
            useAlertStore.getState().setAlert({
              message,
              type: "error",
            });
          });
        });
      } else {
        useAlertStore.getState().setAlert({
          message: "An error occurred during login.",
          type: "error",
        });
      }
    } finally {
      loaderStore.setState({ loading: false });
    }
  },
  setStep: () => {
    set((state) => ({ ...state, resetStep: get().resetStep + 1 }));
  },
  setCode: (value) => {
    set((state) => ({ ...state, code: value }));
  },
}));

export default userStore;
