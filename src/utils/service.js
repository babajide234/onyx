import axios from "axios";
import userStore from "../store/usserStore";
const BASE_URL = "http://api.theonyxtruth.com/api/v1/";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const instance = axios.create(axiosConfig);

export const uploadinstance = axios.create({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    "Content-Type": "multipart/form-data",
  },
});
const attachAuthToken = (config) => {
  const token = userStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const redirectToLogin = () => {
  userStore.getState().logout();
};

const handleUnauthorizedError = (error) => {
  if (error.response.status === 401) {
    redirectToLogin();
    // console.log("checking error", error.response);
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(attachAuthToken, handleUnauthorizedError);
instance.interceptors.response.use(
  (response) => response,
  handleUnauthorizedError
);

uploadinstance.interceptors.request.use(
  attachAuthToken,
  handleUnauthorizedError
);
