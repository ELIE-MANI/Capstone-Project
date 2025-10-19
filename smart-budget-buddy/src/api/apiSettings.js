  import { useUser } from "@clerk/clerk-react";
const SETTINGS_API_URL = "/api/settings";

export async function getSettings(userId) {
  const url = userId ? `${SETTINGS_API_URL}?userId=${userId}` : SETTINGS_API_URL;
  const response = await fetch(url, {
    headers: {
      "authorization": `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch settings');
  }
const data = await response.json();

  return data;

};

export async function createSettings(settings) {
  const response = await fetch(SETTINGS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "authorization": `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
    body: JSON.stringify(settings),
  });
  if (!response.ok) {
    throw new Error('Failed to create settings');
  }
return await response.json();
};

export async function updateSettings(id,settings) {
  const response = await fetch(`${SETTINGS_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "authorization": `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
    body: JSON.stringify({ id, ...settings }),
  });
  if (!response.ok) {
    throw new Error('Failed to update settings');
  }
  const data = await response.json();
  return data;
}

export async function deleteSettings(id) {
  const response = await fetch(`${SETTINGS_API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      
      authorization: `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to delete settings');
  }
  return true;
}
