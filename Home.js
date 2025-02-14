import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './home.css'; // Import the CSS file for the Home page

export default function Home() {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Here you can perform the search based on the dateTime and location values
    // For demonstration, let's just log the values
    console.log('Searching for Date/Time:', dateTime);
    console.log('Searching for Location:', location);
  };

  return (
    <div className="container">
      <section className="image-section">
        <div className="image-section-overlay"></div>
        <div className="image-section-content">
          <h1>Welcome to BookMed</h1>
          <p>Your one-stop destination for booking medical appointments online.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book Now</Link>
          <div className="search-bar">
            <input type="text" placeholder="Enter Date/Time" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            <input type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section">
        <h2>Customer Reviews</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="customer-reviews-isolated-on-special-blue-round-button-abstract-illustration-2BF0KY4.jpg" alt="Review 1" className="review-image" />
          </div>
          <div className="col-md-4">
            <img src="customer-reviews-rating-user-feedback-concept-vector-icon-flat-illustration-M2AMRY.jpg" alt="Review 2" className="review-image" />
          </div>
          <div className="col-md-4">
            <img src="customer-reviews-icon-flat-design-GN1F9M.jpg" alt="Review 3" className="review-image" />
          </div>
        </div>
        <Link to="/about#highlights" className="btn btn-primary">View Highlights</Link>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="360_F_396598277_fmx8Ykhw4woErijL1CCug9563VwLOKxt.jpg" alt="Service 1" className="service-image" />
          </div>
          <div className="col-md-4">
            <img src="hand-writing-our-services-with-blue-marker-on-transparent-wipe-board-isolated-on-white-RBEA5W.jpg" alt="Service 2" className="service-image" />
          </div>
          <div className="col-md-4">
            <img src="360_F_514084307_nYoaEI3cDszRddkKCOYa3SKrid7DfDF2.jpg" alt="Service 3" className="service-image" />
          </div>
        </div>
        <Link to="/about#what-we-offer" className="btn btn-primary">What We Offer</Link>
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
}
