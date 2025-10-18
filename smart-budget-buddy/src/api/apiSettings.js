const SETTINGS_API_URL = 'https://stub.muindetuva.com/api/settings';

export async function getSettings() {
  const response = await fetch(SETTINGS_API_URL);
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
      authorization: `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
    body: JSON.stringify(settings),
  });
  if (!response.ok) {
    throw new Error('Failed to create settings');
  }
  const data = await response.json();
  return data;
};

export async function updateSettings(settings, id) {
  const response = await fetch(`${SETTINGS_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer 18|Z1srREflaNDzrbEGwkBvV8ZLuDWH0MksuFX0gUFo10786671`,
    },
    body: JSON.stringify(settings),
  });
  if (!response.ok) {
    throw new Error('Failed to update settings');
  }
  const data = await response.json();
  return data;
}
