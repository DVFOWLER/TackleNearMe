import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>🎣 TackleNearMe</h3>
        <p>Fishing accessories for every angler</p>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        
        <p className="copyright">© 2026 TackleNearMe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;