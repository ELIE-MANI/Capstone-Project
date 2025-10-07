const API_URL ='https://stub.muindetuva.com/api/Profile';

export async function getProfiles() {
  const response = await fetch(API_URL, {
  headers: {
    authorization: `Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`,
  
  }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Save profile (create )

export async function saveProfile(profile) {
 
  const response = await fetch(API_URL, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`,
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

