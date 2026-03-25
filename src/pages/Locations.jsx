import React from 'react';

const Locations = () => {
  const branches = [
    { name: "Cagayan de Oro", area: "Main Branch", img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=400" },
    { name: "Davao City", area: "Lanang Branch", img: "https://images.unsplash.com/photo-1542362567-b05500281774?w=400" },
    { name: "Manila", area: "Ermita Branch", img: "https://images.unsplash.com/photo-1555620920-54041da5679e?w=400" },
  ];

  return (
    <main>
      <div className="content-section">
        <h2 style={{borderBottom: '2px solid #00d4ff', display: 'inline-block'}}>Find Our Branches</h2>
        <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
          <select style={{padding: '10px', borderRadius: '5px', flex: '1'}}><option>Select a city</option></select>
          <input type="text" placeholder="Search..." style={{padding: '10px', borderRadius: '5px', flex: '2'}} />
          <button style={{padding: '10px 30px', background: '#0b1a2a', color: 'white', border: 'none', borderRadius: '5px'}}>Search</button>
        </div>
      </div>

      <div className="content-section">
        <h3>All Branches</h3>
        <div className="image-grid">
          {branches.map((b, i) => (
            <div key={i} className="image-card">
              <img src={b.img} alt={b.name} />
              <div style={{padding: '15px'}}>
                <h4>{b.name}</h4>
                <p style={{color: '#666'}}>{b.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Locations;