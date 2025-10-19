import { useState, useEffect } from "react";
import useProfileStore from "../store/Profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpenses, updateExpense } from "../api/apiExpenses";
import { useUser } from "@clerk/clerk-react";

function ExpenseForm({ expense, onClose }) {
  const queryClient = useQueryClient();
  const { profile } = useProfileStore();
  const { user, isLoaded } = useUser();

  // ✅ Initialize form with existing data if editing
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    if (expense) {
      setForm({
        title: expense.title || "",
        amount: expense.amount || "",
        category: expense.category || "",
      });
    }
  }, [expense]);

  
  const addMutation = useMutation({
    mutationFn: addExpenses,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      alert("Expense added successfully!");
      onClose();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      alert("Expense updated successfully!");
      onClose();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoaded || !user) {
      alert("Clerk user not loaded yet. Try again in a moment.");
      return;
    }

    const expenseData = {
      ...form,
      userId: user.id || "1",
      date: expense?.date || new Date().toISOString(),
    };

    if (expense) {
      
   updateMutation.mutate({ id: expense.id, expenseData });
     onClose();

    } else {
      
      addMutation.mutate(expenseData);

    }
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-300 mx-auto p-6 bg-gray-100 rounded-xl shadow-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold">
        {expense ? "Edit Expense" : "Add Expense"}
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Expense Title"
        value={form.title}
        onChange={handleChange}
        className="p-2 rounded border bg-emerald-100"
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Enter Amount"
        value={form.amount}
        onChange={handleChange}
        className="p-2 rounded border bg-emerald-100"
        required
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="p-2 rounded border bg-amber-100"
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Utilities">Utilities</option>
      </select>

      <button
        type="submit"
        className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        {addMutation.isLoading || updateMutation.isLoading
          ? "Saving..."
          : expense
          ? "Update Expense"
          : "Save Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
