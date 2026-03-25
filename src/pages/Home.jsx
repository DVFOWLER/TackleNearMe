import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Global.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Reliable Fishing Gear — <br/><span>Delivered</span></h1>
          <p>Rods, reels, lures, and more. Curated by anglers, for anglers.</p>
          <button className="shop-now-btn" onClick={() => navigate('/shop')}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;