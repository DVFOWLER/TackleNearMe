import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css'; 

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">🎣 TackleNearMe</Link>
      </div>

      {/* Main Menu - Horizontal */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Auth Section - Buttons stay on the right */}
      <div className="nav-auth">
        {!user ? (
          <>
            <Link to="/login" className="btn-pill user">User Login</Link>
            <Link to="/login" className="btn-pill seller">Seller Login</Link>
            <Link to="/login" className="btn-pill admin">Admin Login</Link>
          </>
        ) : (
          <div className="logged-in-group">
            <span className="user-label">Welcome, {user.role}!</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;