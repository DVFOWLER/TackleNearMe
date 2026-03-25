import React from 'react';

const Locations = () => {
  const branches = [
    { city: "Cagayan de Oro", area: "Main Branch", img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=400" },
    { city: "Davao City", area: "Lanang Branch", img: "https://images.unsplash.com/photo-1542362567-b05500281774?q=80&w=400" },
    { city: "Manila", area: "Ermita Branch", img: "https://images.unsplash.com/photo-1555620920-54041da5679e?q=80&w=400" },
    { city: "Iloilo", area: "City Proper Branch", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" },
    { city: "Cebu", area: "IT Park Branch", img: "https://images.unsplash.com/photo-1533000932822-671e20428670?q=80&w=400" }
  ];

  return (
    <div className="locations-page">
      <div className="dark-container search-section">
        <h2>Find Our Branches</h2>
        <div className="search-bar-row">
          <select><option>(Select a city)</option></select>
          <input type="text" placeholder="Search..." />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="dark-container branches-section">
        <h3>All Branches</h3>
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card">
              <img src={branch.img} alt={branch.city} />
              <div className="branch-info">
                <h4>{branch.city}</h4>
                <p>{branch.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;