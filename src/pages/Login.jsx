import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('all_users') || '[]');
    
    // --- ADMIN LOGIN ---
    if (email === "admin@tackle.com" && password === "admin123") {
      const adminUser = { email, role: 'admin', name: 'System Admin' };
      localStorage.setItem('user', JSON.stringify(adminUser));
      navigate('/admin-dashboard'); // Ensure this route exists in App.jsx
      return;
    }

    // --- SELLER & CUSTOMER LOGIN ---
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      
      if (foundUser.role === 'seller') {
        navigate('/seller-dashboard'); // Automatically goes to Seller Dashboard
      } else {
        navigate('/'); // Customers go to Home
      }
      window.location.reload(); // Refreshes navbar to show logout button
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p style={{marginTop: '15px'}}>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;