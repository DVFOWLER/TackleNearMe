import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const menuItems = {
    admin: [
      { name: 'Dashboard', path: '/admin' },
      { name: 'User Management', path: '/admin/users' },
      { name: 'Product Overview', path: '/admin/products' },
      { name: 'Reports', path: '/admin/reports' },
    ],
    seller: [
      { name: 'Dashboard', path: '/seller' },
      { name: 'My Products', path: '/seller/products' },
      { name: 'Order Management', path: '/seller/orders' },
    ]
  };

  const links = menuItems[user?.role] || [];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>🎣 TackleNearMe</h3>
        <p>{user?.role?.toUpperCase()} PANEL</p>
      </div>
      <nav className="sidebar-nav">
        {links.map((item, i) => (
          <Link key={i} to={item.path} className="sidebar-link">{item.name}</Link>
        ))}
      </nav>
      <button onClick={onLogout} className="sidebar-logout">Logout</button>
    </div>
  );
};

export default Sidebar;