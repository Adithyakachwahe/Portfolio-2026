// src/pages/Education.jsx
import React, { useState, useEffect } from 'react';

const Education = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);

  console.log('eduction')
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'JSS Academy of Technical Education (VTU), Bangalore',
      duration: '2018 – 2022',
      grade: 'CGPA: 8.62',
      courses:
        'Python, AI & ML, OOP (Python/Java), DBMS, Data Structures & Algorithms, C, C++, Java',
    },
    {
      degree: 'Pre-University (PCMC)',
      institution: 'Narayana Pre University College, Bangalore',
      duration: '2016 – 2018',
      grade: 'Aggregate: 90%',
      courses: 'Computer Science Specialization',
    },
    {
      degree: 'SSLC',
      institution: 'Bees School, Bangalore',
      duration: '2016',
      grade: 'Aggregate: 76.48%',
      courses: '',
    },
  ];

  const certifications = [
    'How to Build LLM from Scratch',
    'Python Programming',
    'Java',
    'C Programming',
    'Python Flask Framework',
  ];

  const styles = {
    container: {
      padding: isMobile ? '1.5rem 1rem' : isTablet ? '1.75rem 1.5rem' : '2rem 2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: '#4B5563',
      lineHeight: 1.7,
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '2.5rem' : '3.5rem',
    },
    title: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : 'clamp(2rem, 6vw, 2.75rem)',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.15rem',
      color: '#4B5563',
      maxWidth: '800px',
      margin: '0 auto',
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1.5rem' : '2rem',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      border: '1px solid #E5E7EB',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    cardTop: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-start',
      marginBottom: '0.75rem',
      gap: isMobile ? '0.75rem' : '1rem',
    },
    degreeSection: {
      flex: 1,
    },
    degree: {
      margin: '0',
      fontSize: isMobile ? '1.2rem' : '1.35rem',
      fontWeight: '600',
      color: '#111827',
      lineHeight: 1.3,
    },
    institution: {
      margin: '0.25rem 0 0 0',
      color: '#4F46E5',
      fontWeight: '500',
      fontSize: isMobile ? '0.95rem' : '1rem',
    },
    gradeSection: {
      textAlign: isMobile ? 'left' : 'right',
    },
    duration: {
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#6B7280',
      marginBottom: '0.25rem',
    },
    grade: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '600',
      color: '#111827',
    },
    courses: {
      margin: '1rem 0 0 0',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#4B5563',
      fontStyle: 'italic',
      borderTop: '1px dashed #E5E7EB',
      paddingTop: '1rem',
      lineHeight: 1.6,
    },
    certificationsSection: {
      marginTop: isMobile ? '3rem' : '4rem',
    },
    certificationsTitle: {
      fontSize: isMobile ? '1.35rem' : '1.5rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    certificationsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '0.6rem' : '0.75rem',
    },
    certBadge: {
      backgroundColor: '#EEF2FF',
      color: '#4F46E5',
      padding: isMobile ? '0.5rem 0.85rem' : '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      fontWeight: '500',
      border: '1px solid #C4B5FD',
      transition: 'all 0.2s ease',
      cursor: 'default',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Education</h2>
        <p style={styles.subtitle}>
          Academic background and key coursework in computer science and software development.
        </p>
      </div>

      {/* Education Cards */}
      <div style={styles.cardsContainer}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(79, 70, 229, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (!isMobile) {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <div style={styles.cardTop}>
              <div style={styles.degreeSection}>
                <h3 style={styles.degree}>{edu.degree}</h3>
                <p style={styles.institution}>{edu.institution}</p>
              </div>
              <div style={styles.gradeSection}>
                <div style={styles.duration}>
                  <strong>Period:</strong> {edu.duration}
                </div>
                <div style={styles.grade}>{edu.grade}</div>
              </div>
            </div>

            {edu.courses && (
              <p style={styles.courses}>
                <strong style={{ color: '#111827' }}>Relevant Coursework:</strong> {edu.courses}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={styles.certificationsSection}>
        <h3 style={styles.certificationsTitle}>Certifications</h3>
        <div style={styles.certificationsGrid}>
          {certifications.map((cert, i) => (
            <span
              key={i}
              style={styles.certBadge}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = '#4F46E5';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = '#EEF2FF';
                  e.currentTarget.style.color = '#4F46E5';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;