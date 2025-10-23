import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Logout from './pages/Logout';
import AdminOverview from './components/AdminOverview';
import AdminTransactions from './components/AdminTransactions';
import AdminUsers from './components/AdminUsers';
import AdminWallets from './components/AdminWallets';
import Profile from './pages/Profile';

import UserHomePage from './pages/UserHomePage';
import UserAddFunds from './pages/UserAddFunds';
import UserSendMoney from './pages/UserSendMoney';
import UserHistory from './pages/UserHistory';// 👈 ADD THIS TOO
import UserWallet from './pages/UserWallet'; // 👈 ADD THIS LINE
import UserContacts from './pages/UserContacts';
import AddBeneficiary from './pages/AddBeneficiary';
import UserProfile from './pages/UserProfile';


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
          <Route path="/admin/profile" element={<Profile />} />

          <Route path="/user/dashboard" element={<UserHomePage />} />
          <Route path="/user/add-funds" element={<UserAddFunds />} />
          <Route path="/user/send-money" element={<UserSendMoney />} />
          <Route path="/user/transactions" element={<UserHistory />} />
          <Route path="/user/wallet" element={<UserWallet />} />
          <Route path="/user/contacts" element={<UserContacts />} />
          <Route path="/user/add-beneficiary" element={<AddBeneficiary />} />
          <Route path="/user/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;