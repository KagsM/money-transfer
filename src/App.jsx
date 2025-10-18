import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import './App.css'
import AdminDashboard from './components/AdminDashboard';
import Logout from './pages/Logout';
import AdminOverview from './components/AdminOverview';
import AdminTransactions from './components/AdminTransactions';
import AdminUsers from './components/AdminUsers';
import AdminWallets from './components/AdminWallets';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loggedout" element={<Logout />} />
          <Route path="/admin/dashboard" element={<AdminOverview />} />
          <Route path="/admin/dashboard/transactions" element={<AdminTransactions />} />
          <Route path="/admin/dashboard/users" element={<AdminUsers />} />
          <Route path="/admin/dashboard/wallets" element={<AdminWallets />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;