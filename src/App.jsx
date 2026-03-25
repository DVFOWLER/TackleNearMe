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
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner'; 
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Admin Management Pages
import AdminDashboard from './management/admin/AdminDashboard';
import UserManagement from './management/admin/UserManagement';
import AdminSellerView from './management/admin/SellerDashboard';
import ProductOverview from './management/admin/ProductOverview';
import Reports from './management/admin/Report';

// Seller Management Pages
import SellerMainDashboard from './management/seller/SellerDashboard'; 
import ProductManagement from './management/seller/ProductManagement';
import OrderManagement from './management/seller/OrderManagement';

// Styles
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
      <div className="app-background">
        
        {/* Navbar only shows for regular users */}
        {user && !['admin', 'seller'].includes(user.role) && (
          <Navbar user={user} onLogout={handleLogout} />
        )}
        
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

            {/* --- ADMIN NESTED ROUTES --- */}
            <Route path="/admin/*" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <div className="dashboard-layout">
                  <Sidebar user={user} onLogout={handleLogout} />
                  <div className="main-view">
                    <Routes>
                      <Route index element={<AdminDashboard />} />
                      <Route path="users" element={<UserManagement />} />
                      <Route path="products" element={<ProductOverview />} />
                      <Route path="reports" element={<Reports />} />
                      <Route path="sellers-list" element={<AdminSellerView />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            } />

            {/* --- SELLER NESTED ROUTES --- */}
            <Route path="/seller/*" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <div className="dashboard-layout">
                  <Sidebar user={user} onLogout={handleLogout} />
                  <div className="main-view">
                    <Routes>
                      <Route index element={<SellerMainDashboard />} />
                      <Route path="products" element={<ProductManagement />} />
                      <Route path="orders" element={<OrderManagement />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            } />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Hide footer on management pages */}
        {user && !['admin', 'seller'].includes(user.role) && <Footer />}
      </div>
    </Router>
  );
}

export default App;