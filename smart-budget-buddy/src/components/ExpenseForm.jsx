import { useState } from "react";
import useProfileStore from "../store/Profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpenses } from "../api/apiExpenses";


function ExpenseForm() {
const queryClient = useQueryClient();
const {profile}= useProfileStore();
const [user,isLoaded]= useUser();

const [expenses, setExpenses]= useState({
  title: "",
  amount: "",
  category: "",

})

const mutation = useMutation({
  mutationFn: addExpenses,
  onSuccess: () => {
    queryClient.invalidateQueries(['expenses'])
    alert('Expense added Successful')
    setExpenses({title:"",amount:"",category:""});
  },
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setExpenses((prev) => ({...prev, [name]: value}))
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!isLoaded || !user) {
    alert("Clerk user not loaded yet. Try again in a moment.");
    return;
  }
  mutation.mutate({
    ...expenses,
    userId: user.id || '1',
    date: new Date().toISOString(),
  });
};

  return ( <>
  <form onSubmit={handleSubmit}
  className="max-w-md  mx-auto p-6 bg-gray-100 w-300 rounded-xl shadow-md flex flex-col gap-4"
  >
    <h2 className="text-xl font-bold">Add Expenses</h2>
    <input 
    type="text"
    name="title"
    placeholder="Expense Title"
    value={expenses.title}
    onChange={handleChange}
    className="p-2 rounded border  bg-emerald-100"
    required
    />
    <input 
    type="number"
    name="amount"
    placeholder="Enter Amount"
    value={expenses.amount}
    onChange={handleChange}
    className="p-2 rounded border bg-emerald-100"
    required
    />
    <select 
    name="category"
    value={expenses.category}
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
    <button type="submit" className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700" >
     {mutation.isLoading ? "saving..." :"Save Expenses"}
    </button>
</form>
  </> );
}

export default ExpenseForm;