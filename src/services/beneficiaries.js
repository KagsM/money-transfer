import api from ../lib/api;

export async function listBeneficiaries() {
  const res = await api.get(/user/beneficiaries);
  return res.data.data;
}

export async function createBeneficiary(payload) {
  const res = await api.post(/user/beneficiaries, payload);
  return res.data.data;
}

export async function updateBeneficiary(id, payload) {
  const res = await api.put(`/user/beneficiaries/${id}`, payload);
  return res.data.data;
}

export async function deleteBeneficiary(id) {
  const res = await api.delete(`/user/beneficiaries/${id}`);
  return res.data;
}
