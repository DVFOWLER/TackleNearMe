import React, { useState } from 'react';
// We use "../../" to go up two folders to reach the "src" folder
import "../../styles/Dashboard.css";
import "../../styles/Global.css";

const AdminSellerView = () => {
  const [sellers] = useState([
    { id: 1, name: "Manila Fishing Co.", status: "Active", items: 45 },
    { id: 2, name: "Cebu Tackle Shop", status: "Pending", items: 12 },
    { id: 3, name: "Davao Reels", status: "Active", items: 30 },
  ]);

  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <h2>Seller Management (Admin View)</h2>
        <p>Monitor and approve seller accounts across the Philippines.</p>
      </div>

      <div className="stats-mini">
        <div className="stat-item">Total Sellers: {sellers.length}</div>
        <div className="stat-item">Pending Approval: 1</div>
      </div>

      <table className="management-table">
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Items</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>{seller.items}</td>
              <td>
                <span className={`badge ${seller.status.toLowerCase()}`}>
                  {seller.status}
                </span>
              </td>
              <td>
                <button className="btn-edit">View Shop</button>
                <button className="btn-delete">Suspend</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSellerView;