import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import useProfileStore from "../store/Profile";

function ExpensesPage() {
const[expenses,setExpenses] = useState([]);
const {profile} = useProfileStore();

const handleAddExpense = (newExpense) => {
  setExpenses((prev) => [...prev, newExpense])
};
const handleDelete = (id) => {
  if (confirm("Are you sure you want to delete this expense?")){
    setExpenses((prev) => prev.filter((expense) => expense.id !== id ))
  }
};
const handleEdit = (expense) => {
  console.log("Edit clicked for:", expense);
};

const totalSpent = expenses.reduce((sum,expense) => sum + Number(expense.amount), 0);
const  remaining = profile?.monthlyBudget
? profile.monthlyBudget - totalSpent : 0;


  return ( 
    <>
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
     <ExpenseForm onAdd={handleAddExpense} />
     <ExpenseList
     expenses= {expenses}
     onDelete={handleDelete}
     onEdit={handleEdit}
     
     />
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