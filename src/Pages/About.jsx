import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1>Welcome to Our Story</h1>
          <p className="tagline">Crafting Excellence in Every Detail</p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>To provide exceptional quality products while maintaining sustainable practices and supporting our community.</p>
          <div className="mission-cards">
            <div className="mission-card">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>Eco-friendly practices in every step</p>
            </div>
            <div className="mission-card">
              <i className="fas fa-heart"></i>
              <h3>Quality</h3>
              <p>Premium products, no compromises</p>
            </div>
            <div className="mission-card">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Supporting local growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
            <img src="/src/assets/group.jpg" alt="Team Member" />

              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            
          </div>
          {/* Add more team members similarly */}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023</h3>
              <p>Expanded to international markets</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020</h3>
              <p>Launched online platform</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Started our journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
