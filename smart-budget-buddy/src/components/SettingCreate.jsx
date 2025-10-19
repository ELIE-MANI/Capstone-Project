import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createSettings } from "../api/apiSettings";
import { useSettingsStore } from "../store/Profile";
import { useUser } from "@clerk/clerk-react";

function SettingCreate() {
  const queryClient = useQueryClient();
  const { settings } = useSettingsStore();
  const { user } = useUser();

  const [form, setForm] = useState({
    monthlyBudget: "",
    savingsGoal: "",
    currency: "USD",
    budgetAlert: false,
    expenseReminder: false,
    language: "English",
  });

  // React Query v5 useMutation
  const createMutation = useMutation({
    mutationFn: (newSettings) => createSettings(newSettings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      alert("Settings created successfully");
      setForm({
        monthlyBudget: "",
        savingsGoal: "",
        currency: "USD",
        budgetAlert: false,
        expenseReminder: false,
        language: "English",
      });
    },
    onError: (error) => {
      console.error("Error creating settings:", error);
      alert("Failed to create settings. Check console for details.");
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);

    createMutation.mutate({
      ...form,
      userId: user?.id || "1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary p-6 rounded-b-2xl shadow-md mt-4 space-y-5"
      >
        <h2 className="text-xl font-semibold mb-4">Budget & Goals</h2>

        <label htmlFor="monthlyBudget" className="block font-semibold">
          Monthly Budget
        </label>
        <input
          type="number"
          name="monthlyBudget"
          value={form.monthlyBudget || ""}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <label htmlFor="savingsGoal" className="block font-semibold">
          Savings Goal
        </label>
        <input
          type="number"
          name="savingsGoal"
          value={form.savingsGoal || ""}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <h2 className="text-xl font-semibold mb-4">Preferences</h2>

        <label htmlFor="currency" className="block font-semibold">
          Currency
        </label>
        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="border p-2 rounded w-32"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RWF">RWF</option>
        </select>

        <label htmlFor="budgetAlert" className="block font-semibold">
          Budget Alert
        </label>
        <input
          type="checkbox"
          name="budgetAlert"
          checked={form.budgetAlert}
          onChange={handleChange}
        />

        <label htmlFor="expenseReminder" className="block font-semibold">
          Expense Reminder
        </label>
        <input
          type="checkbox"
          name="expenseReminder"
          checked={form.expenseReminder}
          onChange={handleChange}
        />

        <label htmlFor="language" className="block font-semibold">
          Language
        </label>
        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          className="border p-2 rounded w-32"
        >
          <option value="English">English</option>
          <option value="Kinyarwanda">Kinyarwanda</option>
          <option value="French">French</option>
        </select>

        <button
          type="submit"
          className="bg-primary mx-6 text-white py-2 px-4 rounded hover:bg-primary-dark"
          disabled={createMutation.isLoading}
        >
          {createMutation.isLoading ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}

export default SettingCreate;
