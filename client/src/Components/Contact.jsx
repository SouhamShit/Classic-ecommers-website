import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-container">
      <button className="contact-home-button" onClick={handleNavigateHome}>
        <FaHome /> Home
      </button>

      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd Love to Hear From You</p>
      </header>

      <div className="contact-content">
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Our Contact Information</h2>
          <div className="info-item">
            <FaPhone />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <p>info@classicsclothing.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <p>123 Fashion Avenue, Style City, ST 12345</p>
          </div>
          <div className="store-hours">
            <h3>Store Hours</h3>
            <p>Monday - Friday: 10am - 8pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: 12pm - 5pm</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;