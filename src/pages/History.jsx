import React from 'react';
import "../styles/Global.css";

const History = () => {
  const orders = [
    { id: "ORD-101", date: "2026-03-20", total: "₱3,350", status: "Delivered" },
    { id: "ORD-105", date: "2026-03-24", total: "₱850", status: "Processing" },
  ];

  return (
    <div className="history-container">
      <h2>Order History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;