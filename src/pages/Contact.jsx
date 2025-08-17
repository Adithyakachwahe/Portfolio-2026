// src/pages/Contact.jsx
import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';

// Initialize EmailJS with your User ID
init("jLpiKT71z2Vxx4Wad"); // ← Replace with your EmailJS Public Key (from dashboard)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const serviceID = 'service_j8ehes2';       // ← Replace with your Email Service ID
    const templateID = 'template_72wlyp9';     // ← Replace with your Template ID

    send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
      .then((response) => {
        setStatus('✅ Message sent successfully! I’ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('❌ Failed to send message. Please try again or email me directly.');
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#111827', marginBottom: '1rem' }}>Get In Touch</h2>
      <p style={{ color: '#4B5563', marginBottom: '2rem' }}>
        I'm always open to discussing new opportunities, collaborations, or interesting projects.
        Feel free to reach out!
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? '#93C5FD' : '#4F46E5',
            color: 'white',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <p
          style={{
            marginTop: '1rem',
            color: status.includes('❌') ? '#EF4444' : '#10B981',
            fontSize: '0.95rem',
          }}
        >
          {status}
        </p>
      )}

      {/* Direct Links */}
      <div style={{ marginTop: '3rem', color: '#4B5563', fontSize: '0.9rem' }}>
        <p>
          Or directly email me at:{' '}
          <a
            href="mailto:adithya2kachwane@gmail.com"
            style={{ color: '#4F46E5', textDecoration: 'none' }}
          >
            adithya2kachwane@gmail.com
          </a>
        </p>
        <p>
          Check out my:{' '}
          <a
            href="https://github.com/Adithyakachwahe"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4F46E5', textDecoration: 'none' }}
          >
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="https://aboutadithyak.web.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4F46E5', textDecoration: 'none' }}
          >
            Live Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;