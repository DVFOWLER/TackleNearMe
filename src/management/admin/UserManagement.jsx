import React from 'react';

const UserManagement = () => (
  <div className="dashboard-card">
    <h3>User Management</h3>
    <table>
      <thead>
        <tr><th>Username</th><th>Role</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>JinMori_Dev</td>
          <td>Admin</td>
          <td><span className="badge ok">Active</span></td>
          <td><button className="btn-ship" style={{backgroundColor: '#6b7280'}}>Manage</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default UserManagement;