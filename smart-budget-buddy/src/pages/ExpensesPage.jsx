import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import useProfileStore from "../store/Profile";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../api/apiExpenses";

function ExpensesPage() {
  const [editingExpense, setEditingExpense] = useState(null);
const {profile} = useProfileStore();
const {data,isLoading,isError,refetch} = useQuery({
  queryKey:['expenses'],
  queryFn: getExpenses
}); 

const expenses =data || [];
const handleEdit= (expense) => {
  setEditingExpense(expense);
};
const handleFormClose = () => {
  setEditingExpense(null);
};

const totalSpent = expenses.reduce((sum,expense) => sum + Number(expense.amount), 0);
const totalBudget = 400000;
const  remaining = totalBudget - totalSpent;

if(isLoading) return <div>Loading Expenses....</div>
if(isError) return <div>Error loading expenses...</div>
  return ( 
    <>
    <div className="min-h-screen bg-gray-50 p-4 ">
      <h1 className="text-2xl font-bold mb-4 bg-primary h-20 flex justify-center items-center ">Expense Tracker</h1>
     <div className="flex  justify-around">
     <ExpenseForm onSuccess={refetch} expense={editingExpense} onClose={handleFormClose} />
     <ExpenseList expenses={expenses} onSuccess={refetch} onEdit={handleEdit}/>
     </div>
     <div className="mt-6 p-4 bg-blue-50 rounded">
      <p className="text-lg font-semibold"
      >Total Monthly Spending: {totalSpent.toLocaleString()} RWF </p>
      <p className={`font-semibold ${remaining<0 ? "text-red-600" : "text-green-600"}`}
      >Remaining Budget :{remaining.toLocaleString()} RWF</p>
     </div>
     
    </div>
    </>
    );
}

export default ExpensesPage;