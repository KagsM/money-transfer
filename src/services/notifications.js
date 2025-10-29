import api from ../lib/api;

export async function listNotifications({ type, unread_only, page = 1, per_page = 10 } = {}) {
  const res = await api.get(/notifications, { params: { type, unread_only, page, per_page } });
  return res.data; // { success, data, pagination }
}

export async function unreadCount() {
  const res = await api.get(/notifications/unread-count);
  return res.data.unread_count;
}

export async function markRead(notificationId) {
  const res = await api.put(`/notifications/${notificationId}/read`);
  return res.data;
}

export async function markAllRead() {
  const res = await api.put(/notifications/read-all);
  return res.data;
}

export async function deleteNotification(notificationId) {
  const res = await api.delete(`/notifications/${notificationId}`);
  return res.data;
}
