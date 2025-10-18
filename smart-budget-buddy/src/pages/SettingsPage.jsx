import { useState } from "react";
function SettingsPage() {
const [settings, setSettings] = useState({
  monthlyBudget: 400000,
  savingGoal: 1000000,
  currency: 'USD',
  budgetAlert: true,
  expenseReminder: false,
  language: 'English',
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setSettings((prev) => ({
    ...prev, 
    [name]:type ==='checkbox' ? checked : value
  }));
};

const handleSave = () => {
  // Logic to save settings
  alert('Settings have been saved!');
  console.log('Settings saved:', settings);
};
const handleDelete=() => {
  if(confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
    alert('Account deleted.');
    console.log('Account deletion confirmed.');
  }
};

  return (
    <>
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-primary text-black text-center py-6 rounded-t-2xl">
        <h1 className="text-2xl font-bold">Settings</h1>
         <p>Adjust Your Financial Preferences And App Settings</p>
      </div>
     <section className="bg-secondary p-6 rounded-b-2xl shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Budget & Goals</h2>

       <input 
       type="number"
       name="montlyBudget"
       value={settings.monthlyBudget}
        onChange={handleChange}
        className="border p-2 rounded w-32 text-right"
       />

       <input 
       type="number"
       name="savingGoal"
       value={settings.savingGoal}
        onChange={handleChange}
        className="border p-2 rounded w-32 text-right "
       />

       <select 
       name="currency"
       value={settings.currency}
       onChange={handleChange}
       className="border p-2 rounded w-32 "
       >
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
         <option value="RWF">RWF</option>
       </select>

       <input 
       type="checkbox"
        name="budgetAlert"
        checked={settings.budgetAlert}
        onChange={handleChange}
        />

        <input
        type="checkbox" 
        name="expenseReminder"
        checked={settings.expenseReminder}
        onChange={handleChange}
        />
        <select
        name="language"
        value={settings.language}
        onChange={handleChange}
        className="border p-2 rounded w-32 "
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <div className="flex gap-4 mt-4">
          <button
          onClick={handleSave}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
          >
            Save Changes
          </button>
          <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Delete Account
          </button> 
        </div>
     </section>
    </div>
   
    </>
    );
}

export default SettingsPage;