import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleRoleLogin = (role, name) => {
    const userData = {
      username: name,
      role: role, // 'admin', 'seller', or 'user'
      loginTime: new Date().toLocaleString()
    };
    
    onLogin(userData);
    navigate('/'); // Redirect to home, App.jsx handles the rest
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <h1>TackleNearMe</h1>
        <p>Select your portal to continue</p>
      </div>

      <div className="login-form">
        {/* Admin Section */}
        <button 
          className="btn-admin" 
          onClick={() => handleRoleLogin('admin', 'Head Admin')}
        >
          Login as Administrator
        </button>

        {/* Seller Section */}
        <button 
          className="btn-user" 
          style={{ backgroundColor: '#0ea5e9' }}
          onClick={() => handleRoleLogin('seller', 'Master Angler Shop')}
        >
          Login as Seller
        </button>

        {/* Standard User Section */}
        <button 
          className="btn-user" 
          onClick={() => handleRoleLogin('user', 'Valued Customer')}
        >
          Customer Storefront
        </button>
      </div>

      <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', opacity: 0.7 }}>
        Managed by Jin Mori Systems
      </p>
    </div>
  );
};

export default Login;