import axios from "axios";

export const http = axios.create({
  baseURL: typeof window === "undefined" ? process.env.NEXT_PUBLIC_BASE_URL || "" : "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
  withCredentials: false,
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    // Normalize error shape
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Unexpected error, please try again.";
    return Promise.reject(
      Object.assign(new Error(message), {
        status: error?.response?.status,
        data: error?.response?.data,
      }),
    );
  },
);

export default http;

