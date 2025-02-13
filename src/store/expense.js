import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useExpenseStore = create(
  persist(
    (set, get) => ({
      expenses: [],
      addExpense: (expense) => set({ expenses: [...get().expenses, expense] }),
      deleteExpense: (id) =>
        set({
          expenses: [...get().expenses].filter((expense) => expense.id !== id),
        }),
    }),
    {
      name: "expense-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useExpenseStore;
