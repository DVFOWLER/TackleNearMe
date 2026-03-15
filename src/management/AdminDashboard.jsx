import React from 'react';
import '../styles/Dashboard.css'; // Importing the modular CSS
import '../styles/Global.css';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h2 className="dashboard-title">System Administrator Portal</h2>
      
      {/* Top Stats Section */}
      <div className="stat-grid">
        <div className="stat blue">
          <h3>Total Users</h3>
          <p>1,240</p>
        </div>
        <div className="stat green">
          <h3>Global Revenue</h3>
          <p>₱45,200</p>
        </div>
        <div className="stat pink">
          <h3>Active Sellers</h3>
          <p>48</p>
        </div>
      </div>

      {/* User Management Section */}
      <div className="dashboard-card">
        <h3>User Management</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JinMori_Dev</td>
              <td>Admin</td>
              <td><span className="badge ok">Active</span></td>
              <td><button className="btn-ship" style={{backgroundColor: '#6b7280'}}>Manage</button></td>
            </tr>
            <tr>
              <td>AnglerStore_PH</td>
              <td>Seller</td>
              <td><span className="badge ok">Active</span></td>
              <td><button className="btn-ship" style={{backgroundColor: '#ef4444'}}>Restrict</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;