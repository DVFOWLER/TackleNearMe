import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'customer' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Get existing users or start empty array
    const users = JSON.parse(localStorage.getItem('all_users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === formData.email)) {
      return alert("Email already registered!");
    }

    users.push(formData);
    localStorage.setItem('all_users', JSON.stringify(users));
    alert(`Registered successfully as a ${formData.role}!`);
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
          
          <select className="role-select" onChange={(e) => setFormData({...formData, role: e.target.value})}>
            <option value="customer">I want to Buy (Customer)</option>
            <option value="seller">I want to Sell (Seller)</option>
          </select>

          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p>Joined already? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;