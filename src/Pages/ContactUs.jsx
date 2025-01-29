import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-hero">
        <h1>Let s Start a Conversation</h1>
        <p>We are here to help and answer any question you might have</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <div className="contact-card primary-card">
            <h2>Contact Information</h2>
            <p>Fill up the form and our team will get back to you within 24 hours</p>
            
            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Business Avenue, NY 12345</p>
                </div>
              </div>
            </div>

            
          </div>

          <div className="contact-card map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d YOUR_COORDINATES"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  required
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Your Message</label>
              <textarea
                placeholder="Tell us more about your needs..."
                required
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </button>
            

            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Thank you for your message! We will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
