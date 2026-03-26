import React from 'react';

const Experience = () => {
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
            { label: 'Airline Reservation System', url: 'https://github.com/Adithyakachwahe/Airline' },
            { label: 'HR Automation', url: 'https://github.com/Adithyakachwahe/Employee-Management-Syatem' },
          ],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        padding: '2rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#374151',
        lineHeight: 1.7,
        minHeight: '80vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 6vw, 2.75rem)',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem',
          }}
        >
          Work Experience
        </h2>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#4B5563',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Professional roles focused on full-stack development, containerization, cloud deployments, and enterprise applications.
        </p>
      </div>

      {/* Experience List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(79, 70, 229, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.08)';
            }}
          >
            {/* Company Sidebar */}
            <div
              style={{
                background: 'linear-gradient(180deg, #4F46E5, #6366F1)',
                color: 'white',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              <h3
                style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  lineHeight: 1.3,
                }}
              >
                {exp.company}
              </h3>
              <p style={{ margin: '0', fontSize: '0.95rem', opacity: 0.9 }}>
                {exp.location}
              </p>
            </div>

            {/* Roles Content */}
            <div style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              {exp.roles.map((role, rIdx) => (
                <div
                  key={rIdx}
                  style={{
                    marginBottom:
                      exp.roles.length > 1 && rIdx !== exp.roles.length - 1 ? '2rem' : '0',
                  }}
                >
                  {/* Role Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <h4
                      style={{
                        margin: '0',
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#111827',
                      }}
                    >
                      {role.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        backgroundColor: '#F3F4F6',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '0.5rem',
                      }}
                    >
                      {role.duration}
                    </span>
                  </div>

                  {/* Tech */}
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', color: '#4B5563' }}>
                    <strong style={{ color: '#111827' }}>Tech:</strong> {role.tech}
                  </p>

                  {/* Achievements */}
                  <ul
                    style={{
                      margin: '0 0 0.75rem 0',
                      paddingLeft: '1.25rem',
                      fontSize: '0.95rem',
                      color: '#4B5563',
                      lineHeight: 1.6,
                    }}
                  >
                    {role.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={{ marginBottom: '0.5rem' }}>
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Extra meta tags — NPM / Security / Cloud (Bosch only) */}
                  {(role.npm || role.security || role.cloud) && (
                    <div
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderRadius: '0.5rem',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: '#4B5563',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      {role.cloud && (
                        <p style={{ margin: 0 }}>
                          <strong style={{ color: '#4F46E5' }}>Cloud & DevOps:</strong> {role.cloud}
                        </p>
                      )}
                      {role.npm && (
                        <p style={{ margin: 0 }}>
                          <strong style={{ color: '#4F46E5' }}>NPM:</strong> {role.npm}
                        </p>
                      )}
                      {role.security && (
                        <p style={{ margin: 0 }}>
                          <strong style={{ color: '#4F46E5' }}>Security:</strong> {role.security}
                        </p>
                      )}
                    </div>
                  )}

                  {/* GitHub links (TechnoServe only) */}
                  {role.github && (
                    <div style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                      <strong style={{ color: '#111827' }}>GitHub: </strong>
                      {role.github.map((g, gIdx) => (
                        <span key={gIdx}>
                          <a
                            href={g.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: '#4F46E5', textDecoration: 'none', fontWeight: '500' }}
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