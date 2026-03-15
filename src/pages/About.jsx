import React from 'react';

const About = () => {
  const values = [
    { title: "Quality Assured", text: "Every reel, rod, and hook is tested or vetted by experienced anglers." },
    { title: "Expert Curated", text: "We carefully select gear suited for Philippine waters & conditions." },
    { title: "Happy Anglers", text: "Our priority is delivering dependable gear and great experiences on the water." }
  ];

  return (
    <div className="about-page">
      <h2 className="section-title">About TackleNearMe</h2>
      <div className="about-grid">
        {values.map((v, i) => (
          <div key={i} className="about-card">
            <div className={`about-img-placeholder v${i}`}></div>
            <div className="about-text">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;