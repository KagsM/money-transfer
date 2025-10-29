import { useEffect, useState } from react;
import { listNotifications, unreadCount, markAllRead } from ../services/notifications;

export default function NotificationsPanel() {
  const [notifs, setNotifs] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState();

  async function load() {
    try {
      const c = await unreadCount();
      setCount(c);
      const res = await listNotifications({ unread_only: false, page: 1, per_page: 10 });
      setNotifs(res.data || []);
      setError();
    } catch (e) {
      setError(e?.response?.data?.message || Failed
