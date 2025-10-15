import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteExpenses, getExpenses } from "../api/apiExpenses";


function ExpenseList({onEdit}) {
  const {data, isLoading, isError} = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
    refetchOnWindowFocus: false,
  });
  const queryClient = useQueryClient();
  const deleteMutation =useMutation({
    mutationFn:deleteExpenses,
    onSuccess:() => {
      queryClient.invalidateQueries(['expenses'])
    }
  });

  if (isLoading) return <div>Loading Expenses...</div>;
  if (isError) return <div>Error loading expenses.</div>;

  const expenses = data || [];

  return (
    <>
      <div className="max-w-md mx-auto mt-6 bg-white rounded-xl shadow-md p-4 ">
        <h2 className="text-lg font-bold mb-3">My Expenses</h2>
        {expenses.length === 0 ? 
       (<p>No expense yet.</p>) :
       ( <ul className="space-y-2">
          {expenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center border-b py-2">
             <div>
              <p className="font-semibold">{expense.title}</p>
              <p className="font-bold text-sm text-gray-600">
                {expense.category} .{expense.amount} .{expense.date}</p>
             </div>
             <div className="space-x-0.5">
             <button className="bg-yellow-500 text-white px-3 py-1 rounded"
               onClick={() => onEdit(expense.id)}
             >Edit</button>
             <button className="bg-red-500 text-white px-3 py-1 rounded"
             onClick={() => {
              if(confirm("Are you sure you want to delete this expense?")){
                deleteMutation.mutate(expense.id)
              }
             }}
             >
              Delete
             </button>
             </div>
            </li>
          ))}

       </ul>
       )}
        
      </div>
    </>
  );
}

export default ExpenseList;


