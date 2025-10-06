const API_URL ='https://stub.muindetuva.com/api/profiles';

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