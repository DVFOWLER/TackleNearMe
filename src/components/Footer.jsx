import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section main">
          <h3>🎣 TackleNearMe</h3>
          <p>Fishing accessories for every angler</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul><li>Home</li><li>Shop</li><li>Locations</li><li>History</li></ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul><li>About</li><li>Privacy Policy</li><li>Terms</li></ul>
        </div>
        <div className="footer-section">
          <h4>Online Order</h4>
          <ul><li>Order Now</li><li>Track Order</li></ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul><li>Facebook</li><li>Instagram</li><li>Twitter</li></ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 TackleNearMe</p>
      </div>
    </footer>
  );
};

export default Footer;