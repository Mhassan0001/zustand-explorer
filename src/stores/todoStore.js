import axiosInstance from "../services/axiosInstance";
import { create } from "zustand";

const useTodoStore = create((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  createTask: async (taskText) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post(
        "http://localhost:9000/todo/create",
        {
          task: taskText,
        },
      );

      const newTask = response.data.data;

      set((state) => ({
        tasks: [newTask, ...state.tasks],
        isLoading: false,
      }));
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, isLoading: false });
    }
  },

  getTask: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosInstance.get("/todo/get");
      const allTask = response.data.data;
      set({ tasks: allTask, isLoading: false });
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, isLoading: false });
    }
  },

  remove: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.delete(`/todo/delete/${id}`);
      set({ isLoading: false, error: null });
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, isLoading: false });
    }
  },
}));

export default useTodoStore;
