import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Bosch',
      location: 'Bangalore',
      roles: [
        {
          title: 'AI Full Stack Engineer',
          duration: 'Aug 2023 – Present',
          tech: 'ReactJS, Flask, Python, PyTorch (NLP)',
          achievements: [
            'Developed LLM Error Assistant: Chat interface using NLP to resolve errors from Docupedia with PyTorch model.',
            'Built SolFast 2.0: AI recommendation tool with SSO, voice, and multi-file support, reducing manual effort by 90%.',
            'Created Docupedia Hub: NLP-powered knowledge engine improving accuracy by 40% through user queries and support integration.',
          ],
        },
        {
          title: 'ABAP Developer',
          duration: 'Jan 2023 – Present',
          tech: 'SAP ABAP',
          achievements: [
            'Automated 7 critical SAP processes deployed across all global business units.',
            'Led automation projects: ST22 Dump Resolution, DTP Optimization, Change Log Automation, Cutover Automation, SLT Dashboard, SLT Regeneration, Attribute Change Run.',
          ],
        },
        {
          title: 'SAP BW Support Engineer at BI@PT',
          duration: 'Apr 2022 – Nov 2024',
          tech: 'SAP Business Warehouse',
          achievements: [
            'Provided end-to-end support for data models, transformations, and process chains.',
            'Resolved 200+ tickets (requests/restorations) within SLA timelines.',
            'Maintained 99.5% system uptime through proactive monitoring and performance tuning.',
            'Automated manual team efforts to improve efficiency and reduce errors.',
          ],
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
          tech: 'Java, Spring Boot, MySQL',
          achievements: [
            'Developed a full-stack Airline Reservation System with flight search and pricing comparison (Java Servlets, JSP, MySQL).',
            'Collaborated on an Employee Management System using Spring Boot and Bootstrap for HR automation.',
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
      <div
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
        }}
      >
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
          Professional roles focused on AI, full-stack development, SAP automation, and enterprise systems.
        </p>
      </div>

      {/* Experience List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
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
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 20px 30px -10px rgba(79, 70, 229, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.08)';
            }}
          >
            {/* Company Sidebar */}
            <div
              style={{
                backgroundColor: 'linear-gradient(180deg, #4F46E5, #7C3AED)',
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
              <p
                style={{
                  margin: '0',
                  fontSize: '0.95rem',
                  opacity: 0.9,
                }}
              >
                {exp.location}
              </p>
            </div>

            {/* Roles Content */}
            <div
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
              }}
            >
              {exp.roles.map((role, rIdx) => (
                <div
                  key={rIdx}
                  style={{
                    marginBottom: exp.roles.length > 1 && rIdx !== exp.roles.length - 1 ? '2rem' : '0',
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
                  <p
                    style={{
                      margin: '0 0 0.75rem 0',
                      fontSize: '0.95rem',
                      color: '#4B5563',
                    }}
                  >
                    <strong style={{ color: '#111827' }}>Tech:</strong> {role.tech}
                  </p>

                  {/* Achievements */}
                  <ul
                    style={{
                      margin: '0',
                      paddingLeft: '1.25rem',
                      fontSize: '0.95rem',
                      color: '#4B5563',
                      lineHeight: 1.6,
                    }}
                  >
                    {role.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        style={{
                          marginBottom: '0.5rem',
                        }}
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
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