const API_URL ='https://smart-buddy-budget.free.beeceptor.com/profile'; 


export async function getProfiles() {
  const response = await fetch(API_URL,{
    'Content-Type': 'application/json',
    

  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Save profile (create )


export async function saveProfile(profile) {
 console.log(API_URL);
  const response = await fetch(API_URL, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
     //"Authorization": `Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`,
    },
    body: JSON.stringify(profile),
  });

   console.log('Response status:', response.status);
  console.log('Response body:', await response.text());


  if (!response.ok) {
    throw new Error('Failed to save profile');
  }
  return response.json();

}

export async function updateProfile(profile, id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  if(!response.ok) {
    throw new Error('Failed to update profile');
  }
  return response.json();
}

