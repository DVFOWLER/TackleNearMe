import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Global.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
    window.location.reload(); // Refreshes to clear state
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎣</span> TackleNearMe
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/about">About</Link></li>
          {user ? (
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          ) : (
            <li><Link to="/login" className="login-link">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;