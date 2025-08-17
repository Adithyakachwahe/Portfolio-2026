import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'JSS Academy of Technical Education (VTU), Bangalore',
      duration: '2018 – 2022',
      grade: 'CGPA: 8.62',
      courses: 'Python, AI & ML, OOP (Python/Java), DBMS, Data Structures & Algorithms, C, C++, Java',
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

  return (
    <div
      style={{
        padding: '2rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#4B5563',
        lineHeight: 1.7,
        minHeight: 'auto',
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
          Education
        </h2>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#4B5563',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Academic background and key coursework in computer science and software development.
        </p>
      </div>

      {/* Education Cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {educationData.map((edu, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = '0 10px 15px -3px rgba(79, 70, 229, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {/* Degree & Institution */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.75rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h3
                  style={{
                    margin: '0',
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#111827',
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    margin: '0.25rem 0 0 0',
                    color: '#4F46E5',
                    fontWeight: '500',
                  }}
                >
                  {edu.institution}
                </p>
              </div>
              <div
                style={{
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  style={{
                    fontSize: '0.95rem',
                    color: '#6B7280',
                    marginBottom: '0.25rem',
                  }}
                >
                  <strong>Period:</strong> {edu.duration}
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#111827',
                  }}
                >
                  {edu.grade}
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            {edu.courses && (
              <p
                style={{
                  margin: '1rem 0 0 0',
                  fontSize: '0.95rem',
                  color: '#4B5563',
                  fontStyle: 'italic',
                  borderTop: '1px dashed #E5E7EB',
                  paddingTop: '1rem',
                }}
              >
                <strong style={{ color: '#111827' }}>Relevant Coursework:</strong> {edu.courses}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div
        style={{
          marginTop: '4rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          Certifications
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          {[
            'How to Build LLM from Scratch',
            'Python Programming',
            'Java',
            'C Programming',
            'Python Flask Framework',
          ].map((cert, i) => (
            <span
              key={i}
              style={{
                backgroundColor: '#EEF2FF',
                color: '#4F46E5',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                border: '1px solid #C4B5FD',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#4F46E5';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#EEF2FF';
                e.target.style.color = '#4F46E5';
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