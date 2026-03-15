import React, { useState } from 'react';

const Locations = () => {
  const [city, setCity] = useState("");

  const branches = [
    { name: "Cagayan de Oro", branch: "Main Branch", img: "cdo.jpg" },
    { name: "Davao City", branch: "Lanang Branch", img: "davao.jpg" },
    { name: "Manila", branch: "Ermita Branch", img: "manila.jpg" },
    { name: "Iloilo", branch: "City Proper Branch", img: "iloilo.jpg" },
    { name: "Cebu", branch: "IT Park Branch", img: "cebu.jpg" },
  ];

  return (
    <div className="locations-page">
      <h2>Find Our Branches</h2>
      <div className="location-search-bar">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">(Select a city)</option>
          <option value="cdo">Cagayan de Oro</option>
          <option value="davao">Davao City</option>
          {/* Add more options */}
        </select>
        <input type="text" placeholder="Search..." />
        <button className="search-btn">Search</button>
      </div>

      <div className="branch-grid">
        {branches.map((b, index) => (
          <div key={index} className="branch-card">
            <div className="branch-img-placeholder"></div>
            <div className="branch-info">
              <h3>{b.name}</h3>
              <p>{b.branch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;