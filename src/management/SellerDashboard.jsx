import React, { useState } from 'react';
import '../styles/Dashboard.css'; // Shared management styles
import '../styles/Global.css';

const SellerDashboard = () => {
  return (
    <div className="container">
      <h2 className="dashboard-title">Seller Dashboard: Shop Manager</h2>
      
      <div className="stat-grid">
        <div className="stat blue">
          <h3>My Products</h3>
          <p>24</p>
        </div>
        <div className="stat green">
          <h3>Pending Shipments</h3>
          <p>7</p>
        </div>
      </div>

      {/* Add Product Form */}
      <div className="dashboard-card">
        <h3>Add New Fishing Gear</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <input type="text" placeholder="Product Name" style={{padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}} />
          <input type="number" placeholder="Price (PHP)" style={{padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}} />
          <input type="number" placeholder="Stock" style={{padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}} />
          <select style={{padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}}>
            <option>Select Category</option>
            <option>Rods</option>
            <option>Reels</option>
            <option>Lures</option>
          </select>
          <input type="text" placeholder="Image URL" style={{gridColumn: 'span 2', padding: '10px', borderRadius: '8px', border: '1px solid #ddd'}} />
          <button className="btn-ship" style={{gridColumn: 'span 2', padding: '12px', fontSize: '16px'}}>Add Product to Shop</button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="dashboard-card">
        <h3>Orders to Process</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#TRN-9921</td>
              <td>Shimano Stradic Reel</td>
              <td>Juan Dela Cruz</td>
              <td><button className="btn-ship">Mark as Shipped</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerDashboard;