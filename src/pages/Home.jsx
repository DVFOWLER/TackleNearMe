import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Global.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Reliable Fishing Gear — <br/><span>Delivered</span></h1>
          <p>Rods, reels, lures, and more. Curated by anglers, for anglers.</p>
          <button className="cta-btn" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </section>

      <section className="featured-categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="cat-card">🎣 Rods</div>
          <div className="cat-card">⚙️ Reels</div>
          <div className="cat-card">🪝 Lures</div>
          <div className="cat-card">🎒 Tackle Boxes</div>
        </div>
      </section>
    </div>
  );
};

export default Home;