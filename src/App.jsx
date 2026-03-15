import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Locations from './pages/Locations';
import History from './pages/History';
import Updates from './pages/Updates';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Management Pages
import AdminDashboard from './management/AdminDashboard';
import SellerDashboard from './management/SellerDashboard';

// Styles - Import the new Global style here
import './styles/Global.css'; 

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user_session');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem('user_session', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    localStorage.removeItem('cart');
    setUser(null);
  };

  // Auth Guard Component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user) return <Navigate to="/login" replace />;
    
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      alert("Access Denied: Restricted Section.");
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      {/* We use "app-background" from Global.css to ensure the 
          fishing background image covers the whole screen properly.
      */}
      <div className="app-background">
        
        {user && <Navbar user={user} onLogout={handleLogout} />}
        
        <main>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            
            {/* Standard User Routes */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
            <Route path="/locations" element={<ProtectedRoute><Locations /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
            <Route path="/updates" element={<ProtectedRoute><Updates /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

            {/* Management Routes - Only for Admin/Seller */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/seller" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerDashboard />
              </ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {user && <Footer />}
      </div>
    </Router>
  );
}

export default App;