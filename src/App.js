import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';

// Pages
import Dashboard from './pages/Dashboard';
import LogActivity from './pages/LogActivity';
import Profile from './pages/Profile';
import EcoTips from './pages/EcoTips';
import Overview from './pages/Overview';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuth = localStorage.getItem('token');

  // Check if current route is login/signup
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="app-container">
      {!isAuthPage && isAuth && <Navbar />}
      <div style={{ padding: '20px' }}>{children}</div>
      {!isAuthPage && isAuth && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected routes */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/log" element={<ProtectedRoute><LogActivity /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/tips" element={<ProtectedRoute><EcoTips /></ProtectedRoute>} />
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
