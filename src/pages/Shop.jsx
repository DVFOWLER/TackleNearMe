import React from 'react';
import "../styles/Global.css";

const Shop = () => {
  const products = [
    { id: 1, name: "Carbon Fiber Rod", price: "₱2,500", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Spinning Reel", price: "₱1,800", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Braided Line 300m", price: "₱850", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Lure Set (6pcs)", price: "₱450", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="shop-container">
      <h2 className="section-title">All Fishing Gear</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;