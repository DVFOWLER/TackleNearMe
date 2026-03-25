import React, { useState } from 'react'; // Added useState
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import "../styles/Global.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem('all_users') || '[]');
    
    // 2. Check for Admin (Hardcoded)
    if (email === "admin@tackle.com" && password === "admin123") {
      const adminUser = { email, role: 'admin', name: 'System Admin' };
      localStorage.setItem('user', JSON.stringify(adminUser));
      navigate('/admin');
      return;
    }

    // 3. Check for Registered Users (Sellers or Customers)
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      // Redirect based on role
      if (foundUser.role === 'seller') {
        navigate('/management/admin/SellerDashboard'); // Path to your seller view
      } else {
        navigate('/'); // Customers go Home
      }
    } else {
      alert("Invalid email or password. Please try again or Register.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to TackleNearMe</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;