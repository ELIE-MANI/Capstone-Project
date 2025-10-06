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
  const data = await response.json();
  return data;
}

// Save profile (create or update)

export async function saveProfile(profile, id) {
  const method = id ? 'PUT' : 'POST';
  const url = id ? `${API_URL}/${id}` : API_URL;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`,
    },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    throw new Error('Failed to save profile');
  }
  const data = await response.json();
  return data;
}

