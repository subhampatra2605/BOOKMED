import React from 'react';
import './about.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <section id="highlights" className="section highlights-section">
        <h2>Highlights</h2>
        <p>Highlight some key features or achievements of your medical appointment service.</p>
        {/* Add more content as needed */}
      </section>

      <section id="what-we-offer" className="section what-we-offer-section">
        <h2>What We Offer</h2>
        <p>Describe the services and benefits you offer to users.</p>
        {/* Add more content as needed */}
      </section>

      <section id="additional-info" className="section additional-info-section">
        <h2>Additional Information</h2>
        <p>Include any other relevant information, such as FAQs, testimonials, or company background.</p>
        {/* Add more content as needed */}
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or assistance.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 BookMed. All rights reserved.</p>
      </footer>

    </div>
  );
};


export default About;
