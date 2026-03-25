import React from 'react';
import '../styles/Global.css';

const Home = () => {
  return (
    <div className="glass-panel">
      <section style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <div>
          <h1>Reliable Fishing Gear — Delivered</h1>
          <p>Rods, reels, lures, and more. Curated by anglers, for anglers.</p>
          <button className="logout-btn" style={{ background: '#4f46e5' }}>Shop Now</button>
        </div>
        <img 
          src="https://scontent.fcgy3-2.fna.fbcdn.net/v/t39.30808-6/615359343_1183922140537932_3099401591448812127_n.jpg" 
          alt="Hero" 
          style={{ width: '400px', borderRadius: '15px' }}
        />
      </section>
    </div>
  );
};

export default Home;