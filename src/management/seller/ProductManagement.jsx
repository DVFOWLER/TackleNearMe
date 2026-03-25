import React from 'react';

const ProductManagement = () => (
  <div className="dashboard-card">
    <h3>Manage My Gear</h3>
    <button className="btn-ship" style={{marginBottom: '15px'}}>+ Add New Product</button>
    <table>
      <thead>
        <tr><th>Item</th><th>Price</th><th>Stock</th><th>Actions</th></tr>
      </thead>
      <tbody>
        <tr><td>Graphite Rod</td><td>₱1,500</td><td>12</td><td><button>Edit</button></td></tr>
      </tbody>
    </table>
  </div>
);

export default ProductManagement;