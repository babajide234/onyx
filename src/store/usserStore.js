import { create } from "zustand";
import { instance } from "../utils/service";
import loaderStore from "./loaderStore";
import useAlertStore from "./useAlertStore";
import { persist } from "zustand/middleware";

const initialState = {
  token: null,
  details: null,
  isLoggedIn: false,
  loading: false,
  resetStep: 0,
  ccde: null,
};

const userStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      login: async (email, password) => {
        try {
          loaderStore.getState().setLoader(true);

          const response = await instance.post("auth/login", {
            email,
            password,
          });
          const { token } = response.data;

          set((state) => ({ ...state, token: token }));
          set((state) => ({ ...state, isLoggedIn: true }));
          set((state) => ({ ...state, details: response.data }));

          useAlertStore.getState().setAlert({
            message: "Login successful ",
            type: "success",
          });
        } catch (error) {
          loaderStore.getState().setLoader(false);

          if (error.response && error.response.data) {
            loaderStore.getState().setLoader(false);
            const { data } = error.response;
            console.log(data);
            if (Array.isArray(data)) {
              // Handle an array of error messages
              data.forEach((message) => {
                useAlertStore.getState().setAlert({
                  message,
                  type: "error",
                });
              });
            } else if (typeof data === "object" && data.message) {
              // Handle a single error message object
              useAlertStore.getState().setAlert({
                message: data.message,
                type: "error",
              });
            } else {
              // Handle other cases where the error response format is unexpected
              useAlertStore.getState().setAlert({
                message: "An error occurred during login.",
                type: "error",
              });
            }
          } else {
            useAlertStore.getState().setAlert({
              message: "An error occurred during login.",
              type: "error",
            });
          }
        } finally {
          loaderStore.getState().setLoader(false);
          console.log("finalizing state after login");
        }
      },
      getProfile: async () => {
        try {
          loaderStore.getState().setLoader(true);

          const response = await instance.get("app/profile");
          return response.data;
        } catch (error) {
          loaderStore.getState().setLoader(false);

          if (error.response && error.response.data) {
            loaderStore.getState().setLoader(false);
            const { data } = error.response;
            console.log(data);
            if (Array.isArray(data)) {
              // Handle an array of error messages
              data.forEach((message) => {
                useAlertStore.getState().setAlert({
                  message,
                  type: "error",
                });
              });
            } else if (typeof data === "object" && data.message) {
              // Handle a single error message object
              useAlertStore.getState().setAlert({
                message: data.message,
                type: "error",
              });
            } else {
              // Handle other cases where the error response format is unexpected
              useAlertStore.getState().setAlert({
                message: "An error occurred Request.",
                type: "error",
              });
            }
          } else {
            useAlertStore.getState().setAlert({
              message: "An error occurred during login.",
              type: "error",
            });
          }
        } finally {
          loaderStore.getState().setLoader(false);
        }
      },
      editProfile: async (data) => {
        try {
          loaderStore.getState().setLoader(true);

          const response = await instance.post("app/edit-profile", data);
          if (response.status === 200) {
            useAlertStore.getState().setAlert({
              message: "Profile Update successful ",
              type: "success",
            });
          }
          return response.data;
        } catch (error) {
          loaderStore.getState().setLoader(false);

          if (error.response && error.response.data) {
            loaderStore.getState().setLoader(false);
            const { data } = error.response;
            console.log(data);
            if (Array.isArray(data)) {
              // Handle an array of error messages
              data.forEach((message) => {
                useAlertStore.getState().setAlert({
                  message,
                  type: "error",
                });
              });
            } else if (typeof data === "object" && data.message) {
              // Handle a single error message object
              useAlertStore.getState().setAlert({
                message: data.message,
                type: "error",
              });
            } else {
              // Handle other cases where the error response format is unexpected
              useAlertStore.getState().setAlert({
                message: "An error occurred Request.",
                type: "error",
              });
            }
          } else {
            useAlertStore.getState().setAlert({
              message: "An error occurred during login.",
              type: "error",
            });
          }
        } finally {
          loaderStore.getState().setLoader(false);
        }
      },
      register: async (data) => {
        try {
          loaderStore.getState().setLoader(true);

          console.log("Loading status: ", loaderStore.getState().loader);
          const response = await instance.post("auth/register", data);

          if (response.status === 200) {
            set((state) => ({
              ...state,
              resetStep: get().resetStep + 1,
            }));

            useAlertStore.getState().setAlert({
              message: "Registration successful ",
              type: "success",
            });
          }
        } catch (error) {
          if (error.response && error.response.data) {
            loaderStore.getState().setLoader(false);
            const { data } = error.response;
            console.log(data);
            if (Array.isArray(data)) {
              // Handle an array of error messages
              data.forEach((message) => {
                useAlertStore.getState().setAlert({
                  message,
                  type: "error",
                });
              });
            } else if (typeof data === "object" && data.message) {
              // Handle a single error message object
              useAlertStore.getState().setAlert({
                message: data.message,
                type: "error",
              });
            } else {
              // Handle other cases where the error response format is unexpected
              useAlertStore.getState().setAlert({
                message: "An error occurred during login.",
                type: "error",
              });
            }
          } else {
            useAlertStore.getState().setAlert({
              message: "An error occurred during login.",
              type: "error",
            });
          }
        } finally {
          loaderStore.getState().setLoader(false);
          console.log("Loading status: ", loaderStore.getState().loader);
        }
      },
      logout: () => {
        set((state) => ({ ...state, token: null }));
        set((state) => ({ ...state, details: null }));
        set((state) => ({ ...state, isLoggedIn: false }));
      },
      resetPassword: async (email) => {
        try {
          /* empty */
          loaderStore.getState().setLoader(true);

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
          loaderStore.getState().setLoader(false);

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
          loaderStore.getState().setLoader(false);

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
          loaderStore.getState().setLoader(false);
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
          loaderStore.getState().setLoader(false);
        }
      },
      verifyToken: async (code) => {
        try {
          loaderStore.setState({ loading: true });
          // eslint-disable-next-line no-unused-vars
          const response = await instance.post("auth/ConfirmEmailByLink", {
            code,
          });

          useAlertStore.getState().setAlert({
            message: "Email Verified Successfully",
            type: "success",
          });

          return true;
        } catch (error) {
          loaderStore.getState().setLoader(false);
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
          loaderStore.getState().setLoader(false);
        }
      },
      setStep: () => {
        set((state) => ({ ...state, resetStep: get().resetStep + 1 }));
      },
      backStep: () => {
        set((state) => ({ ...state, resetStep: get().resetStep - 1 }));
      },
      resStep: () => {
        set((state) => ({ ...state, resetStep: 0 }));
      },
      setCode: (value) => {
        set((state) => ({ ...state, code: value }));
      },
    }),
    {
      name: "onyxStore",
    }
  )
);

export default userStore;
