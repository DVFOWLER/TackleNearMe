import React, { useState, useEffect } from 'react';
import { getCart, setCart, fmtCurrency, generateOrderId } from '../utils';

const Cart = () => {
  const [items, setItems] = useState(getCart());

  const updateQty = (index, newQty) => {
    const newCart = [...items];
    newCart[index].qty = Math.max(0, newQty);
    setItems(newCart);
    setCart(newCart);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (items.length === 0) return alert("Cart is empty");
    
    const order = {
      id: generateOrderId(),
      amount: total,
      items: items,
      date: new Date().toISOString().slice(0, 10),
      status: 'Pending',
      customer: JSON.parse(localStorage.getItem('user_session')).username
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    setCart([]);
    setItems([]);
    alert(`Order Placed! ID: ${order.id}`);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.map((item, i) => (
        <div key={i} className="cart-item-card">
          <h3>{item.name}</h3>
          <p>{fmtCurrency(item.price)}</p>
          <input 
            type="number" 
            value={item.qty} 
            onChange={(e) => updateQty(i, parseInt(e.target.value))} 
          />
          <span>Total: {fmtCurrency(item.price * item.qty)}</span>
        </div>
      ))}
      <div className="cart-footer">
        <h3>Total: {fmtCurrency(total)}</h3>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;