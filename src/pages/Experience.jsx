// src/pages/Experience.jsx
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);
  console.log('exp')
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      company: 'Bosch',
      location: 'Bangalore',
      roles: [
        {
          title: 'Full Stack Developer',
          duration: 'Aug 2022 – Present',
          tech: 'ReactJS, Python Flask, HTML/CSS, JavaScript, SQLite, MongoDB, LLMs, Docker, AWS',
          achievements: [
            'Developed and deployed 4 AI-powered tools — SolFast 2.0, Document Assistant, Error & Monitoring Corrections Assistant, Maintenance Recommendation Engine — using ReactJS, Flask, PyTorch, and LLMs, reducing manual effort by 40%.',
            'Containerized AI/ML applications using Docker; built optimized images and managed multi-service environments with Docker Compose for consistent dev-to-production deployments.',
            'Deployed containerized workloads to AWS using ECR for Docker image storage and ECS for container orchestration; leveraged EC2, S3, and IAM for scalable production infrastructure.',
            'Built 100+ RESTful Flask APIs enabling real-time ML inference for chat assistants and recommendation engines with <200ms response time.',
            'Developed responsive frontend for 200+ users using React Hook Form, Zod, React-Router, Context API, and React Toastify — improving UX and reducing user-reported issues by 30%.',
            'Designed intelligent chat-like interfaces and knowledge engines, reducing average error resolution time by 35%.',
            'Implemented JWT authentication and OAuth protocols, achieving 100% compliance with enterprise security requirements.',
            'Contributed to 50+ code reviews and CI/CD pipelines across agile sprints, maintaining 95%+ code quality standards.',
          ],
          npm: 'React Hooks, Zod, React Router, JWT, React Toastify, React-Loading-Skeleton',
          security: 'JWT, REST API Security, OAuth',
          cloud: 'Docker, Docker Compose, AWS EC2, AWS S3, AWS ECR, AWS ECS, CI/CD',
        },
      ],
    },
    {
      company: 'TechnoServe C2TC',
      location: 'Bangalore',
      roles: [
        {
          title: 'Software Engineer Intern',
          duration: 'Apr 2021 – Aug 2021',
          tech: 'Java, Spring Boot',
          achievements: [
            'Developed a full-stack Airline Reservation System using Java Servlets and Spring Boot.',
            'Collaborated on an HR Automation (Employee Management) System using Spring Boot.',
          ],
          github: [
            {
              label: 'Airline Reservation System',
              url: 'https://github.com/Adithyakachwahe/Airline',
            },
            {
              label: 'HR Automation',
              url: 'https://github.com/Adithyakachwahe/Employee-Management-Syatem',
            },
          ],
        },
      ],
    },
  ];

  const styles = {
    container: {
      padding: isMobile ? '1.5rem 1rem' : isTablet ? '1.75rem 1.5rem' : '2rem 2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: '#374151',
      lineHeight: 1.7,
      backgroundColor: '#FFFFFF',
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
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '2rem' : '2.5rem',
    },
    experienceCard: {
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : undefined,
      gridTemplateColumns: isMobile ? undefined : isTablet ? '180px 1fr' : '200px 1fr',
      gap: isMobile ? '1rem' : '2rem',
      backgroundColor: '#FFFFFF',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    companySidebar: {
      background: 'linear-gradient(180deg, #4F46E5, #6366F1)',
      color: 'white',
      padding: isMobile ? '1.5rem' : '2rem 1.5rem',
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      justifyContent: isMobile ? 'space-between' : 'center',
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'left' : 'left',
    },
    companyName: {
      margin: '0 0 0.5rem 0',
      fontSize: isMobile ? '1.2rem' : '1.3rem',
      fontWeight: '700',
      lineHeight: 1.3,
    },
    companyLocation: {
      margin: '0',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      opacity: 0.9,
    },
    rolesContent: {
      padding: isMobile ? '1.5rem' : '2rem',
      backgroundColor: '#FFFFFF',
    },
    roleHeader: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-start',
      marginBottom: '0.75rem',
      gap: '0.5rem',
    },
    roleTitle: {
      margin: '0',
      fontSize: isMobile ? '1.15rem' : '1.25rem',
      fontWeight: '600',
      color: '#111827',
    },
    duration: {
      fontSize: isMobile ? '0.8rem' : '0.875rem',
      color: '#6B7280',
      fontWeight: '500',
      backgroundColor: '#F3F4F6',
      padding: '0.35rem 0.65rem',
      borderRadius: '0.5rem',
      whiteSpace: 'nowrap',
    },
    tech: {
      margin: '0 0 0.75rem 0',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#4B5563',
    },
    achievementsList: {
      margin: '0 0 0.75rem 0',
      paddingLeft: isMobile ? '1rem' : '1.25rem',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      color: '#4B5563',
      lineHeight: 1.6,
    },
    achievement: {
      marginBottom: '0.5rem',
    },
    metaBox: {
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem',
      padding: isMobile ? '0.65rem 0.85rem' : '0.75rem 1rem',
      fontSize: isMobile ? '0.8rem' : '0.875rem',
      color: '#4B5563',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      marginTop: '0.5rem',
    },
    metaItem: {
      margin: 0,
    },
    githubLinks: {
      marginTop: '0.75rem',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
    },
    githubLink: {
      color: '#4F46E5',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Work Experience</h2>
        <p style={styles.subtitle}>
          Professional roles focused on full-stack development, containerization, cloud
          deployments, and enterprise applications.
        </p>
      </div>

      {/* Experience List */}
      <div style={styles.experienceList}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={styles.experienceCard}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(79, 70, 229, 0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.08)';
              }
            }}
          >
            {/* Company Sidebar */}
            <div style={styles.companySidebar}>
              <h3 style={styles.companyName}>{exp.company}</h3>
              <p style={styles.companyLocation}>{exp.location}</p>
            </div>

            {/* Roles Content */}
            <div style={styles.rolesContent}>
              {exp.roles.map((role, rIdx) => (
                <div key={rIdx}>
                  {/* Role Header */}
                  <div style={styles.roleHeader}>
                    <h4 style={styles.roleTitle}>{role.title}</h4>
                    <span style={styles.duration}>{role.duration}</span>
                  </div>

                  {/* Tech */}
                  <p style={styles.tech}>
                    <strong style={{ color: '#111827' }}>Tech:</strong> {role.tech}
                  </p>

                  {/* Achievements */}
                  <ul style={styles.achievementsList}>
                    {role.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={styles.achievement}>
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Meta (NPM/Security/Cloud) */}
                  {(role.npm || role.security || role.cloud) && (
                    <div style={styles.metaBox}>
                      {role.cloud && (
                        <p style={styles.metaItem}>
                          <strong style={{ color: '#4F46E5' }}>Cloud & DevOps:</strong>{' '}
                          {role.cloud}
                        </p>
                      )}
                      {role.npm && (
                        <p style={styles.metaItem}>
                          <strong style={{ color: '#4F46E5' }}>NPM:</strong> {role.npm}
                        </p>
                      )}
                      {role.security && (
                        <p style={styles.metaItem}>
                          <strong style={{ color: '#4F46E5' }}>Security:</strong> {role.security}
                        </p>
                      )}
                    </div>
                  )}

                  {/* GitHub Links */}
                  {role.github && (
                    <div style={styles.githubLinks}>
                      <strong style={{ color: '#111827' }}>GitHub: </strong>
                      {role.github.map((g, gIdx) => (
                        <span key={gIdx}>
                          <a
                            href={g.url}
                            target="_blank"
                            rel="noreferrer"
                            style={styles.githubLink}
                            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                          >
                            {g.label}
                          </a>
                          {gIdx < role.github.length - 1 && (
                            <span style={{ color: '#9CA3AF', margin: '0 0.4rem' }}>·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;