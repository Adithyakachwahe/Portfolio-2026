// src/components/ContactForm.jsx
import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:adithya2kachwane@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${encodeURIComponent(
        formData.message
      )}%0A%0AFrom: ${formData.email}`
    );
    setStatus('Message sent! Redirecting to email...');
    setTimeout(() => setFormData({ name: '', email: '', message: '' }), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
      />
      <button type="submit">Send Message</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;