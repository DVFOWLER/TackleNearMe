import React from 'react';

const OrderManagement = () => (
  <div className="dashboard-card">
    <h3>Customer Orders</h3>
    <table>
      <thead>
        <tr><th>Order ID</th><th>Customer</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr><td>#TRN-99</td><td>Juan Dela Cruz</td><td>Pending</td><td><button className="btn-ship">Ship Now</button></td></tr>
      </tbody>
    </table>
  </div>
);

export default OrderManagement;