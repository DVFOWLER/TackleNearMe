import React from 'react';

const AdminDashboard = () => (
  <div className="dashboard-content">
    <h2>System Administrator Portal</h2>
    <div className="stat-grid">
      <div className="stat blue"><h3>Total Users</h3><p>1,240</p></div>
      <div className="stat green"><h3>Global Revenue</h3><p>₱45,200</p></div>
      <div className="stat pink"><h3>Active Sellers</h3><p>48</p></div>
    </div>
  </div>
);

export default AdminDashboard;