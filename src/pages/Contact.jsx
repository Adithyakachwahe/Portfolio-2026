// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';

init("jLpiKT71z2Vxx4Wad");

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const serviceID = 'service_j8ehes2';
    const templateID = 'template_72wlyp9';

    send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
      .then((response) => {
        setStatus("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('❌ Failed to send message. Please try again or email me directly.');
        setLoading(false);
      });
  };

  const styles = {
    container: {
      padding: isMobile ? '1.5rem 1rem' : '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      fontSize: isMobile ? '1.75rem' : '2.25rem',
      color: '#111827',
      marginBottom: '1rem',
      fontWeight: '700',
      textAlign: 'center',
    },
    description: {
      fontSize: isMobile ? '0.95rem' : '1.05rem',
      color: '#4B5563',
      marginBottom: '2rem',
      lineHeight: 1.6,
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1rem' : '1.25rem',
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      border: '1px solid #E5E7EB',
    },
    input: {
      padding: isMobile ? '0.85rem' : '0.95rem',
      border: '2px solid #E5E7EB',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontFamily: "'Inter', sans-serif",
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    textarea: {
      padding: isMobile ? '0.85rem' : '0.95rem',
      border: '2px solid #E5E7EB',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontFamily: "'Inter', sans-serif",
      minHeight: isMobile ? '120px' : '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    button: {
      backgroundColor: loading ? '#93C5FD' : '#4F46E5',
      color: 'white',
      padding: isMobile ? '0.9rem' : '1rem',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: loading ? 'not-allowed' : 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '0.95rem' : '1rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    status: {
      marginTop: '1rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      textAlign: 'center',
      fontWeight: '500',
    },
    linksContainer: {
      marginTop: isMobile ? '2.5rem' : '3rem',
      padding: isMobile ? '1.25rem' : '1.5rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.75rem',
      border: '1px solid #E5E7EB',
    },
    linkText: {
      color: '#4B5563',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      marginBottom: '0.75rem',
      lineHeight: 1.6,
    },
    link: {
      color: '#4F46E5',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.2s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Get In Touch</h2>
      <p style={styles.description}>
        I'm always open to discussing new opportunities, collaborations, or interesting projects.
        Feel free to reach out!
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = '#4F46E5')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = '#4F46E5')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
          onFocus={(e) => (e.target.style.borderColor = '#4F46E5')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? (
            <>
              <span
                style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid #ffffff40',
                  borderTopColor: '#ffffff',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              Sending...
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Send Message
            </>
          )}
        </button>
      </form>

      {status && (
        <div
          style={{
            ...styles.status,
            backgroundColor: status.includes('❌') ? '#FEE2E2' : '#D1FAE5',
            color: status.includes('❌') ? '#991B1B' : '#065F46',
            border: `1px solid ${status.includes('❌') ? '#FCA5A5' : '#6EE7B7'}`,
          }}
        >
          {status}
        </div>
      )}

      {/* Direct Links */}
      <div style={styles.linksContainer}>
        <p style={styles.linkText}>
          <strong>Email:</strong>{' '}
          <a href="mailto:adithya2kachwane@gmail.com" style={styles.link}>
            adithya2kachwane@gmail.com
          </a>
        </p>
        <p style={styles.linkText}>
          <strong>Connect:</strong>{' '}
          <a
            href="https://github.com/Adithyakachwahe"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
          {' · '}
          <a
            href="https://aboutadithyak.web.app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Live Portfolio
          </a>
        </p>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;