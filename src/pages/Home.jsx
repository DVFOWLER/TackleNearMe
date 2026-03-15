import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Reliable Fishing Gear — Delivered</h1>
          <p>Rods, reels, lures, lines, and more. Curated by anglers, for anglers.</p>
          <Link to="/shop" className="shop-now-btn">Shop Now</Link>
        </div>
        <div className="hero-logo-box">
          <div className="hookpoint-logo"></div> {/* CSS will handle the image */}
        </div>
      </section>

      <section className="featured-gear">
        <h2>Featured Gear</h2>
        <div className="gear-carousel">
           {/* Your items 1, ciara, 3 go here */}
        </div>
      </section>
    </div>
  );
};

export default Home;