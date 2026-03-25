import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Global.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ ...formData, role: 'user' });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert("Registration Successful! Please Login.");
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;