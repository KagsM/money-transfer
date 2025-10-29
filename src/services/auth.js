import api from ../lib/api;

export async function register({ phone_number, email_address, password }) {
  const res = await api.post(/user/register, { phone_number, email_address, password });
  const token = res.data?.data?.access_token;
  if (token) localStorage.setItem(access_token, token);
  return res.data;
}

export async function login({ email_address, password }) {
  const res = await api.post(/user/login, { email_address, password });
  const token = res.data?.data?.access_token;
  if (token) localStorage.setItem(access_token, token);
  return res.data;
}

export function logout() {
  localStorage.removeItem(access_token);
}
