import { create } from "zustand";
import { toast } from "sonner";

const useCounterStore = create((set, get) => ({
  // ? State
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),

  //? ============================================================
  decrement: () => {
   
    
    set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 }));
  },

  //? ============================================================

  reset: () => {
    const current = get().count;
    if (current === 0) {
      toast.error("toast already zero");
      return;
    }

    set({ count: 0 });
    toast.success("Counter reset to zero");
  },

  //? ============================================================
}));

export default useCounterStore;
