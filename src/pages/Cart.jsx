import React, { useState } from 'react';

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    name: '',
    phone: '',
    address: '',
    description: '' // Optional (color of house, etc.)
  });

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Order placed for ${addressInfo.name}! We will deliver to ${addressInfo.address}.`);
    // Here you would normally clear the cart
  };

  return (
    <div className="shop-container">
      <h2>Your Cart</h2>
      
      {!showCheckout ? (
        <div className="cart-summary">
          <p>Your items go here...</p>
          <button className="auth-btn" onClick={() => setShowCheckout(true)}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="checkout-form auth-card" style={{margin: '0 auto'}}>
          <h3>Delivery Details</h3>
          <form onSubmit={handleCheckout}>
            <input 
              type="text" placeholder="Full Name" required 
              onChange={(e) => setAddressInfo({...addressInfo, name: e.target.value})} 
            />
            <input 
              type="text" placeholder="Phone Number" required 
              onChange={(e) => setAddressInfo({...addressInfo, phone: e.target.value})} 
            />
            <input 
              type="text" placeholder="Complete Delivery Address" required 
              onChange={(e) => setAddressInfo({...addressInfo, address: e.target.value})} 
            />
            <textarea 
              placeholder="House description (Color of house, landmarks, etc.) - Optional" 
              onChange={(e) => setAddressInfo({...addressInfo, description: e.target.value})}
              style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '10px'}}
            />
            <button type="submit" className="auth-btn" style={{marginTop: '20px'}}>
              Place Order Now
            </button>
            <button type="button" onClick={() => setShowCheckout(false)} style={{background: 'none', color: 'gray', border: 'none', marginTop: '10px', cursor: 'pointer'}}>
              Go Back
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;