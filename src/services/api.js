const API_BASE_URL = 'http://localhost:5000/api';

// Wallet API calls
export const walletAPI = {
  // Get wallet by user ID
  getWallet: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/wallets/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch wallet');
    return response.json();
  },

  // Get wallet balance
  getBalance: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/wallets/${userId}/balance`);
    if (!response.ok) throw new Error('Failed to fetch balance');
    return response.json();
  },

  // Get wallet transactions
  getTransactions: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/wallets/${userId}/transactions`);
    if (!response.ok) throw new Error('Failed to fetch transactions');
    return response.json();
  },

  // Create wallet
  createWallet: async (userId, initialBalance = 0, currency = 'KES') => {
    const response = await fetch(`${API_BASE_URL}/wallets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, initial_balance: initialBalance, currency })
    });
    if (!response.ok) throw new Error('Failed to create wallet');
    return response.json();
  }
};

// Transaction API calls
export const transactionAPI = {
  // Transfer money
  transfer: async (senderUserId, receiverUserId, amount, description = '') => {
    const response = await fetch(`${API_BASE_URL}/transactions/transfer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender_user_id: senderUserId,
        receiver_user_id: receiverUserId,
        amount,
        description
      })
    });
    if (!response.ok) throw new Error('Failed to transfer money');
    return response.json();
  },

  // Get transaction by ID
  getTransaction: async (transactionId) => {
    const response = await fetch(`${API_BASE_URL}/transactions/${transactionId}`);
    if (!response.ok) throw new Error('Failed to fetch transaction');
    return response.json();
  },

  // Get user transactions
  getUserTransactions: async (userId, status = null) => {
    let url = `${API_BASE_URL}/transactions/user/${userId}`;
    if (status) url += `?status=${status}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch user transactions');
    return response.json();
  },

  // Get all transactions (admin)
  getAllTransactions: async (status = null, page = 1) => {
    let url = `${API_BASE_URL}/transactions?page=${page}&per_page=20`;
    if (status) url += `&status=${status}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch all transactions');
    return response.json();
  }
};
