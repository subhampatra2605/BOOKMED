import React, { useState } from 'react';
import './Contact.css';
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your contact form submission logic
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setSubmitted(true);
    // You can also reset the form fields after submission
    // setName('');
    // setEmail('');
    // setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries or assistance.</p>
      {submitted ? (
        <div className="success-message">Your message has been submitted successfully. We'll get back to you soon!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        {/* <p>Feel free to reach out to us for any inquiries or assistance.</p> */}
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 BookMed. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Contact;
