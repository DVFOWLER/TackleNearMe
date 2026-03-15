import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css'; 

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">🎣 TackleNearMe</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/updates">Updates</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      <div className="nav-auth">
        <span className="user-role-badge">{user?.role} Portal</span>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;