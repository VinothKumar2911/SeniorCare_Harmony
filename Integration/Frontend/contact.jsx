import React, { useState } from 'react';
import axios from 'axios';
import '../assets/CSS/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make POST request to send form data to the backend
      await axios.post('http://localhost:8080/api/feedbacks', formData);
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        description: ''
      });
      // Optionally, display a success message or redirect the user
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <>
      <div className="contact-page">
        <main className="contact-main1">
          <div className="contact-info-container">
            <div className="contact-info-left">
              <h2>Don't Hesitate To Contact Us</h2>
              <p>We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
            </div>
            <div className="contact-info-right">
              <div>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <p className="title1">Phone</p>
                <p>+1 123 456 7890</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <p className="title1">Email</p>
                <p>info@example.com</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <p className="title1">Address</p>
                <p>123 Harmony Street, City, Country</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="google-map-container">
        <iframe
          title="Google Map"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.786344944958!2d76.9583!3d10.9379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYour_Marker_Name!2sYour_Marker_Name!5e0!3m2!1sen!2sus!4v1643923772840!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-page">
        <main className="contact-main">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </main>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@seniorcareharmony.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SeniorCare Harmony. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
