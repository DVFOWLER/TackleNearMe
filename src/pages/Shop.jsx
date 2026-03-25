import React from 'react';
import '../styles/Global.css';

const Shop = () => {
  return (
    <div className="glass-panel">
      <h2 style={{ marginBottom: '20px' }}>Shop</h2>
      
      {/* Category Tabs */}
      <div className="category-tabs">
        <button className="active">All</button>
        <button>Rods</button>
        <button>Reels</button>
        <button>Lines</button>
      </div>

      <div className="product-grid">
        {/* Repeating Product Cards */}
        <div className="product-card">
          <div className="stock-badge">Out of Stock</div>
          <img src="path-to-rod.jpg" alt="Spinning Rod" />
          <div className="card-info">
            <h4>Spinning Rod</h4>
            <p>₱1,200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;