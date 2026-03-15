import React from 'react';

const Updates = () => {
  const updates = [
    { id: 1, title: "Typhoon 4000 — New!", price: "2,450", img: "engine.jpg" },
    { id: 2, title: "Graphite Pro Rod — Promo", price: "1,690", img: "rod.jpg" }
  ];

  return (
    <div className="updates-page">
      <h2 className="section-title">Updates & News</h2>
      <div className="updates-container">
        <h3>Latest Gear</h3>
        <div className="updates-grid">
          {updates.map(item => (
            <div key={item.id} className="update-card">
              <div className="update-img-placeholder"></div>
              <div className="update-info">
                <h4>{item.title}</h4>
                <p>₱{item.price}</p>
                <button className="order-btn">Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;