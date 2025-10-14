const EXPENSE_API ='https://expenses.free.beeceptor.com/expenses'

export async function getExpenses() {
  const response = await fetch(EXPENSE_API);
  if(!response.ok) 
    throw new Error('Failed to fetch expenses') 
  return response.json();
}

export async function  addExpenses(expense){
  const response = await fetch(EXPENSE_API,{
    method: 'POST',
    headers:
    {
  "Content-Type": "application/json"
},
body: JSON.stringify(expense),
})

if (!response.ok)
  throw new Error("Failed to add expenses");
return response.json();

  
}
