// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      window.open(
        `mailto:adithya2kachwane@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Portfolio Contact: ${formData.name}`
        )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`
      );
      
      setStatus('success');
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('');
      }, 3000);
    }, 1000);
  };

  const styles = {
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: isMobile ? '1.5rem' : '2.5rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E2E8F0',
    },
    formTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '700',
      color: '#1E293B',
      marginBottom: '0.5rem',
      textAlign: 'center',
      fontFamily: "'Inter', sans-serif",
    },
    formSubtitle: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#64748B',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    row: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#374151',
      fontFamily: "'Inter', sans-serif",
    },
    input: {
      width: '100%',
      padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem',
      fontSize: isMobile ? '0.95rem' : '1rem',
      borderRadius: '12px',
      border: '2px solid #E2E8F0',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#FAFAFA',
      boxSizing: 'border-box',
    },
    inputFocused: {
      borderColor: '#4F46E5',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 0 0 4px rgba(79, 70, 229, 0.1)',
    },
    inputError: {
      borderColor: '#EF4444',
      backgroundColor: '#FEF2F2',
    },
    textarea: {
      minHeight: isMobile ? '120px' : '150px',
      resize: 'vertical',
    },
    errorText: {
      color: '#EF4444',
      fontSize: '0.8rem',
      marginTop: '0.25rem',
    },
    button: {
      padding: isMobile ? '1rem' : '1.15rem',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      color: 'white',
      background: isSubmitting
        ? '#9CA3AF'
        : 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      border: 'none',
      borderRadius: '12px',
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem',
    },
    statusMessage: {
      padding: '1rem',
      borderRadius: '12px',
      textAlign: 'center',
      fontSize: '0.95rem',
      fontWeight: '500',
      background: status === 'success' 
        ? 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)' 
        : 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)',
      color: status === 'success' ? '#065F46' : '#991B1B',
      border: `1px solid ${status === 'success' ? '#34D399' : '#F87171'}`,
    },
    contactInfo: {
      marginTop: '2rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid #E2E8F0',
      textAlign: 'center',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      color: '#64748B',
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Get In Touch</h2>
      <p style={styles.formSubtitle}>
        Have a question or want to work together? Drop me a message!
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name & Email Row */}
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Your Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...styles.input,
                ...(focusedField === 'name' && styles.inputFocused),
                ...(errors.name && styles.inputError),
              }}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Your Email *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...styles.input,
                ...(focusedField === 'email' && styles.inputFocused),
                ...(errors.email && styles.inputError),
              }}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>
        </div>

        {/* Subject */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Subject (Optional)</label>
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField(null)}
            style={{
              ...styles.input,
              ...(focusedField === 'subject' && styles.inputFocused),
            }}
          />
        </div>

        {/* Message */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Your Message *</label>
          <textarea
            name="message"
            placeholder="Tell me about your project or just say hi..."
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            style={{
              ...styles.input,
              ...styles.textarea,
              ...(focusedField === 'message' && styles.inputFocused),
              ...(errors.message && styles.inputError),
            }}
          />
          {errors.message && <span style={styles.errorText}>{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="spinner" style={{
                width: '20px',
                height: '20px',
                border: '2px solid #ffffff40',
                borderTopColor: '#ffffff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }} />
              Sending...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Send Message
            </>
          )}
        </button>

        {/* Status Message */}
        {status && (
          <div style={styles.statusMessage}>
            {status === 'success' 
              ? '✅ Message sent successfully! Redirecting to email...' 
              : '❌ Something went wrong. Please try again.'}
          </div>
        )}
      </form>

      {/* Contact Info */}
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          adithya2kachwane@gmail.com
        </div>
        <div style={styles.contactItem}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Bangalore, India
        </div>
      </div>
    </div>
  );
};

export default ContactForm;