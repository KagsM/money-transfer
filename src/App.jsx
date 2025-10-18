import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import './App.css'
import AdminDashboard from './pages/AdminDashboard';
import Logout from './pages/Logout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/loggedout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;