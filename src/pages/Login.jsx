import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('all_users') || '[]');
    
    // 1. Check Admin
    if (email === "admin@tackle.com" && password === "admin123") {
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      navigate('/admin-dashboard');
      return;
    }

    // 2. Check Registered Users
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      if (foundUser.role === 'seller') {
        navigate('/seller-dashboard');
      } else {
        navigate('/');
      }
    } else {
      alert("Invalid login details!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p>New here? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;