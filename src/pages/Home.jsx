// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '1rem' : '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#1f2937',
        minHeight: 0, /* Important for flex child */
      }}
    >
      {/* Greeting */}
      <h1
        style={{
          fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 6vw, 2.75rem)',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '0.75rem',
          lineHeight: '1.2',
        }}
      >
        Hi, I'm{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
          }}
        >
          Adithya Kachwahe P
        </span>
      </h1>

      {/* Role */}
      <p
        style={{
          fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 3vw, 1.25rem)',
          color: '#4B5563',
          marginBottom: '1.25rem',
          fontWeight: '500',
        }}
      >
        Full Stack Developer | React · Python · Flask · Docker · AWS
      </p>

      {/* Description */}
      <div 
        style={{ 
          maxWidth: '650px', 
          margin: '0 auto',
          padding: isMobile ? '0' : '0 1rem',
        }}
      >
        <p
          style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#4B5563',
            lineHeight: '1.6',
            marginBottom: '0.75rem',
            textAlign: 'center',
          }}
        >
          Passionate about building scalable web applications using{' '}
          <strong style={{ color: '#4F46E5' }}>React</strong>,{' '}
          <strong style={{ color: '#4F46E5' }}>Python</strong>, and cloud
          technologies like <strong style={{ color: '#4F46E5' }}>Docker</strong> &{' '}
          <strong style={{ color: '#4F46E5' }}>AWS</strong>.
        </p>
        <p
          style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#4B5563',
            lineHeight: '1.6',
            textAlign: 'center',
          }}
        >
          Currently at <strong>Bosch, Bangalore</strong>, building full-stack solutions
          that bridge engineering with real-world impact.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        style={{
          marginTop: isMobile ? '1.5rem' : '2rem',
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#4F46E5',
              color: 'white',
              padding: isMobile ? '0.7rem 1.25rem' : '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
            }}
          >
            View My Work
          </button>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#4F46E5',
              padding: isMobile ? '0.7rem 1.25rem' : '0.75rem 1.5rem',
              border: '2px solid #4F46E5',
              borderRadius: '0.5rem',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Get In Touch
          </button>
        </Link>
      </div>

      {/* Status Badge */}
      <div
        style={{
          marginTop: isMobile ? '1.5rem' : '2rem',
          fontSize: isMobile ? '0.75rem' : '0.8rem',
          color: '#6B7280',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
            display: 'inline-block',
          }}
        />
        Available for opportunities
      </div>
    </div>
  );
};

export default Home;