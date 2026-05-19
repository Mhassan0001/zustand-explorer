import axios from "axios";
import { create } from "zustand";

const useTodoStore = create((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  createTask: async (taskText) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post("http://localhost:9000/todo/create", {
        task: taskText,
      });

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
}));

export default useTodoStore;
