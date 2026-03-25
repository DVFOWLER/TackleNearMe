import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  // Change this to your actual cart state logic later
  const [cartItems, setCartItems] = useState([]); 
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({ name: '', phone: '', address: '', note: '' });

  if (cartItems.length === 0) {
    return (
      <div className="shop-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ backgroundColor: '#4dd0e1', color: 'white', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
          Your cart is currently empty.
        </div>
        <button 
          onClick={() => navigate('/shop')} 
          style={{ backgroundColor: '#ffb300', color: 'white', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          RETURN TO SHOP
        </button>
      </div>
    );
  }

  return (
    <div className="shop-container">
      {/* Checkout logic from previous step goes here if cart is NOT empty */}
    </div>
  );
};

export default Cart;