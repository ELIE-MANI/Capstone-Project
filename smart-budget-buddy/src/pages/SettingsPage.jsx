import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { use, useEffect, useState } from "react";
import { createSettings, getSettings } from "../api/apiSettings";
function SettingsPage() {
const queryClient = useQueryClient();

const {data:settings,isLoading,isError} = useQuery({
  queryKey: ['settings'],
  queryFn: getSettings,
  //refetchOnWindowFocus: false,
});
const createMutation = useMutation({
  mutationFn: createSettings,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['settings'] });
  },
});

const updateMutation = useMutation({
  mutationFn: ({id,data}) => updateSettings(id,data),

  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['settings'] });
  },
});

const [form, setForm] = useState({
  monthlyBudget: 0,
  savingGoal: 0,
  currency: 'USD',
  budgetAlert: false,
  expenseReminder: false,
  language: 'English',
});

useEffect(() => {
  if (settings) {
    setForm({
      monthlyBudget: settings.monthlyBudget || 0,
      savingGoal: settings.savingGoal || 0,
      currency: settings.currency || 'USD',
      budgetAlert: settings.budgetAlert || false,
      expenseReminder: settings.expenseReminder || false,
      language: settings.language || 'English',
    });
  }
}, [settings]);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,  
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (settings && settings.id) {
    updateMutation.mutate({ id: settings.id, data: form });
  } else {
    createMutation.mutate(form);
  }
};

const handleSave = () => {
  // Logic to save settings
  alert('Settings have been saved!');
  console.log('Settings saved:', form);
};
const handleDelete = () => {
  if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
    alert('Account deleted.');
    console.log('Account deletion confirmed.');
  }
};

if (isLoading) {
  return <div>Loading settings...</div>;
}
if (isError) {
  return <div>Error loading settings.</div>;
}

  return (
    <>
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-primary text-black text-center py-6 rounded-t-2xl">
        <h1 className="text-2xl font-bold">Settings</h1>
         <p>Adjust Your Financial Preferences And App Settings</p>
      </div>
     <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-b-2xl shadow-md mt-4 space-y-5">
      <h2 className="text-xl font-semibold mb-4">Budget & Goals</h2>

      <label htmlFor="monthlyBudget" className="block font-semibold">Monthly Budget</label>
       <input 
       type="number"
        name="monthlyBudget"
       value={form.monthlyBudget}
        onChange={handleChange}
        className="border p-2 rounded w-full"
       />

        <label htmlFor="savingGoal" className="block font-semibold">Saving Goal</label>
       <input 
       type="number"
       name="savingGoal"
       value={form.savingGoal}
        onChange={handleChange}
        className="border p-2 rounded w-full"
       />

        <h2 className="text-xl font-semibold mb-4">Preferences</h2> 
        <label htmlFor="currency" className="block font-semibold">Currency</label>
       <select 
       name="currency"
       value={form.currency}
       onChange={handleChange}
       className="border p-2 rounded w-32 "
       >
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
         <option value="RWF">RWF</option>
       </select>

        <label htmlFor="budgetAlert" className="block font-semibold">Budget Alert</label>
       <input 
       type="checkbox"
        name="budgetAlert"
        checked={form.budgetAlert}
        onChange={handleChange}
        />

        <label htmlFor="expenseReminder" className="block font-semibold">Expense Reminder</label>
        <input
          type="checkbox"
          name="expenseReminder"
          checked={form.expenseReminder}
          onChange={handleChange}
        />
        <label htmlFor="language" className="block font-semibold">Language</label>
        <select
        name="language"
        value={form.language}
        onChange={handleChange}
        className="border p-2 rounded w-32 "
        >
          <option value="English">English</option>
          <option value="Kinyarwanda">Kinyarwanda</option>
          <option value="French">French</option>
        </select>

          <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
          >
            Save Changes
          </button>
          <button
          type="button"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Delete Account
          </button> 
        </form>
      </div>
    </>
    );
}

export default SettingsPage;