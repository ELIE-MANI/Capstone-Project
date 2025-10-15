const EXPENSE_API ='https://stub.muindetuva.com/api/expenses'

export async function getExpenses() {
  const response = await fetch(EXPENSE_API,
  {
    headers:
    {
     'Authorization': 'Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671'

    }
  }
  
  );
      console.log(response.status, response.headers.get("content-type"));
  if(!response.ok) 
    throw new Error('Failed to fetch expenses') 
  return response.json();
}

export async function  addExpenses(expense){
  const response = await fetch(EXPENSE_API,{
    method: 'POST',
    headers:
    {
  "Content-Type": "application/json",
  'Authorization': 'Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671'
},
body: JSON.stringify(expense),
})

if (!response.ok)
  throw new Error("Failed to add expenses");
return response.json();

  
}

export async function deleteExpenses(id) {
  const response = await fetch(`${EXPENSE_API}/${id}`,{
    method:'DELETE',
    headers:
 {
  
  'Authorization': 'Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671'
},
  });

  if(!response.ok) 
    throw new Error('Failed to delete Expense')
  return response.json();
  
}
