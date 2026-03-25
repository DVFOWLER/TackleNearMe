import React from 'react';
import "../styles/Global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1: Brand */}
        <div className="footer-section">
          <h3 className="footer-logo">🎣 TackleNearMe</h3>
          <p>Reliable fishing gear for every Filipino angler.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Locations</li>
            <li>History</li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="footer-section">
          <h4>Online Order</h4>
          <ul>
            <li>Order Now</li>
            <li>Track Order</li>
            <li>Shipping Info</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 TackleNearMe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;