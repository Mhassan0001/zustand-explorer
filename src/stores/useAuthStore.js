import axiosInstance from "../services/axiosInstance";
import { create } from "zustand";
import { toast } from "sonner";

//?======================================================

const useAuthStore = create((set) => ({
  user: null,
  error: null,
  isLoading: true,

  //?======================================================

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      set({ user: response.data.data, isLoading: false });
      toast.success(response.data.msg);
      return true;
    } catch (error) {
      const msg = error.response?.data?.msg || error.message;
      set({ error: msg, isLoading: false, user: null });
      toast.error(msg);
      return false;
    }
  },

  //?======================================================

  checkAuth: async () => {
    set({
      isLoading: true,
      error: null,
    });
    try {
      console.log("CHECK AUTH CALLED");
      const response = await axiosInstance.get("/auth/me");
      console.log("GET ME RESPONSE:", response.data);
      set({
        user: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      if (error.response?.status === 401) {
        set({
          user: null,
          isLoading: false,
          error: null,
        });
        return;
      }
      const msg = error.response?.data?.msg || error.message;
      set({
        error: msg,
        isLoading: false,
        user: null,
      });
      toast.error(msg);
    }
  },

  //?======================================================

  logout: async () => {
    set({ isLoading: true, error: null });

    try {
      await axiosInstance.post("/auth/logout");

      set({
        user: null,
        error: null,
        isLoading: false,
      });

      toast.success("Logout Successfully...");
    } catch (error) {
      const msg = error.response?.data?.msg || error.message;

      set({
        isLoading: false,
        error: msg,
      });
      toast.error(msg);
      return false;
    }
  },
}));

export default useAuthStore;
