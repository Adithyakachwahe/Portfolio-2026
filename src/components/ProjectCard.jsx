// src/components/ProjectCard.jsx
import React, { useState, useEffect } from 'react';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    card: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '16px',
      padding: isMobile ? '1.25rem' : '1.5rem',
      boxShadow: isHovered
        ? '0 20px 40px rgba(79, 70, 229, 0.15)'
        : '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #E2E8F0',
      transition: 'all 0.3s ease',
      transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    imageContainer: {
      width: '100%',
      height: isMobile ? '150px' : '180px',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
    placeholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: isMobile ? '2rem' : '2.5rem',
    },
    title: {
      fontSize: isMobile ? '1.2rem' : '1.35rem',
      fontWeight: '700',
      color: '#1E293B',
      marginBottom: '0.75rem',
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.3,
    },
    description: {
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      color: '#64748B',
      lineHeight: 1.6,
      marginBottom: '1rem',
      flex: 1,
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.25rem',
    },
    techBadge: {
      background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      color: '#4F46E5',
      padding: isMobile ? '0.3rem 0.6rem' : '0.35rem 0.75rem',
      borderRadius: '20px',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      fontWeight: '600',
      border: '1px solid #C7D2FE',
    },
    buttonContainer: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      marginTop: 'auto',
    },
    button: {
      flex: isMobile ? '1 1 100%' : '1',
      padding: isMobile ? '0.7rem 1rem' : '0.65rem 1rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      fontWeight: '600',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      color: 'white',
      border: 'none',
    },
    secondaryButton: {
      background: 'transparent',
      color: '#4F46E5',
      border: '2px solid #4F46E5',
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image or Placeholder */}
      <div style={styles.imageContainer}>
        {image ? (
          <img src={image} alt={title} style={styles.image} />
        ) : (
          <div style={styles.placeholder}>
            <span role="img" aria-label="project">💻</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 style={styles.title}>{title}</h3>

      {/* Description */}
      <p style={styles.description}>{description}</p>

      {/* Tech Stack */}
      <div style={styles.techStack}>
        {tech.map((t) => (
          <span key={t} style={styles.techBadge}>
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;