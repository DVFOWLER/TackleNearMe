import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems] = useState([]); // Empty array for testing

  if (cartItems.length === 0) {
    return (
      <div className="shop-container" style={{ textAlign: 'center', padding: '100px 5%' }}>
        <div style={{ backgroundColor: '#4dd0e1', color: 'white', padding: '20px', borderRadius: '4px', marginBottom: '20px' }}>
          Your cart is currently empty.
        </div>
        <button 
          className="auth-btn" 
          style={{ backgroundColor: '#ffb300', width: 'auto', padding: '10px 40px', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          RETURN TO SHOP
        </button>
      </div>
    );
  }

  return <div className="shop-container"><h1>Your Items</h1></div>;
};

export default Cart;