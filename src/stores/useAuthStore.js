import axiosInstance from "../services/axiosInstance";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  error: null,
  isLoading: true,

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    if (!email || !password) {
      const errorMessage = "Email & password are Required";
      set({
        error: errorMessage,
        isLoading: false
      });
      return false;
    }

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      set({ user: response.data.data, isLoading: false });
      return true;
    } catch (error) {
      const msg = error.response?.data?.msg || error.message;
      set({ error: msg, isLoading: false, user:null });
      return false;
    }
  },

  checkAuth: async () => {
    set({
      isLoading: true,
      error: null,
    });
    try {
      const response = await axiosInstance.get("/auth/me");
      console.log("GET ME RESPONSE:", response.data);
      set({
        user: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      const msg = error.response?.data?.msg || error.message;
      set({
        error: msg,
        isLoading: false,
        user:null 
      });
      return false;
    }
  },
}));

export default useAuthStore;
