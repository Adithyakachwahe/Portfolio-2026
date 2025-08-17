import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const UPDATE_INTERVAL_DAYS = 10;

  // Function to get the last updated date
  const getLastUpdatedDate = () => {
    const savedDate = localStorage.getItem('lastUpdated');
    const now = new Date();

    if (!savedDate) {
      localStorage.setItem('lastUpdated', now.toISOString());
      return now;
    }

    const lastUpdated = new Date(savedDate);
    const timeDiff = now - lastUpdated;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    if (daysDiff >= UPDATE_INTERVAL_DAYS) {
      localStorage.setItem('lastUpdated', now.toISOString());
      return now;
    }

    return lastUpdated;
  };

  const lastUpdated = getLastUpdatedDate();

  // Format date as "Month Day, Year"
  const formattedDate = lastUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log('Home rendered - Last updated:', formattedDate);

  return (
    <div
      style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#1f2937',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Greeting */}
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 3rem)',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '1rem',
          lineHeight: '1.1',
        }}
      >
        Hi, I'm{' '}
        <span
          style={{
            color: '#4F46E5',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #4F46E5, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Adithya Kachwahe P
        </span>
      </h1>

      {/* Role */}
      <p
        style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
          color: '#4B5563',
          marginBottom: '1.5rem',
          fontWeight: '500',
        }}
      >
        AI Full Stack Developer | ABAP Specialist | React & Python Developer
      </p>

      {/* Description */}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            lineHeight: '1.7',
            marginBottom: '1rem',
            textAlign: 'left',
          }}
        >
          Passionate about building end-to-end web applications and exploring the limitless possibilities of{' '}
          <strong style={{ color: '#4F46E5' }}>Generative AI</strong> &{' '}
          <strong style={{ color: '#4F46E5' }}>Large Language Models (LLMs)</strong>.
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            lineHeight: '1.7',
            textAlign: 'left',
          }}
        >
          Currently working at <strong>Bosch, Bangalore</strong>, where I design intelligent solutions that bridge the gap between software engineering and AI innovation.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/projects">
          <button
            style={{
              backgroundColor: '#4F46E5',
              color: 'white',
              padding: '0.875rem 1.75rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.05rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            View My Work
          </button>
        </Link>
        <Link to="/contact">
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#4F46E5',
              padding: '0.875rem 1.75rem',
              border: '2px solid #4F46E5',
              borderRadius: '0.5rem',
              fontSize: '1.05rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#4F46E5';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#4F46E5';
            }}
          >
            Get In Touch
          </button>
        </Link>
      </div>

      {/* Last Updated Badge */}
      <div
        style={{
          marginTop: '3rem',
          fontSize: '0.875rem',
          color: '#6B7280',
          fontStyle: 'italic',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
          }}
        ></span>
        Last updated on {formattedDate}
      </div>
    </div>
  );
};

export default Home;