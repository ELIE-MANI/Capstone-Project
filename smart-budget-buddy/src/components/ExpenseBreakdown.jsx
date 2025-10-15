function ExpenseBreakdown({expenses}) {
 const categoryTotals = expenses.reduce((accumulator,exp) => {
  const cat = exp.category || "Uncategorized";
  accumulator[cat] =(accumulator[cat] || 0) + Number(exp.amount || 0)
  return accumulator
 }, {})
  return (
    <>
 <div className="bg-secondary p-6 rounded-2xl shadow-md">
  <h2 className="text-lg font-semibold mb-3">Expenses Breakdown</h2> 
   {Object.keys(categoryTotals).length === 0 ? (
    <p className="text-gray-500">No expense available</p>
   ) : (
    <ul className="space-y-2">
      {Object.entries(categoryTotals).map(([cat,amt]) => (
      <li key={cat} className="flex justify-between">
        <span className="font-medium text-gray-700">{cat}</span>
        <span className="text-red-600">-{amt.toLocaleString()}RWF</span>
      

      </li>
      ))}

    </ul>
   )}
  </div>   
    
    </>
    );
}

export default ExpenseBreakdown;