import React from 'react';

const About = () => {
  const UPDATE_INTERVAL_DAYS = 21;

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
  const formattedDate = lastUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      style={{
        padding: '2rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#4B5563',
        lineHeight: 1.7,
        minHeight: 'auto',
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontSize: 'clamp(2rem, 6vw, 2.75rem)',
          fontWeight: '700',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        About Me
      </h2>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#374151',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.8,
        }}
      >
        I'm a Computer Science Engineer passionate about <strong style={{ color: '#4F46E5' }}>AI</strong>,{' '}
        <strong style={{ color: '#4F46E5' }}>full-stack development</strong>, and{' '}
        <strong style={{ color: '#4F46E5' }}>enterprise automation</strong>. 
        I build intelligent systems that solve real-world problems from AI-powered tools.
      </p>

      {/* Journey Section */}
      <div
        style={{
          marginTop: '2.5rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.6rem',
            fontWeight: '600',
            color: '#111827',
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          My journey so far
        </h3>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {[
            {
              emoji: '🚀',
              title: 'AI & Full-Stack Development',
              description:
                'Built intelligent tools like the LLM Error Assistant and SolFast 2.0 using React, Flask, and PyTorch NLP. Leveraging Generative AI to deliver real-time, enterprise-ready solutions.',
            },
            {
              emoji: '⚙️',
              title: 'SAP ABAP Automation',
              description:
                'Automated 7+ critical SAP processes including ST22 Dump Resolution, DTP Optimization, and SLT Dashboard — improving efficiency and reducing manual workload across global teams.',
            },
            {
              emoji: '📊',
              title: 'SAP BW System Support',
              description:
                'Provided end-to-end support for data models and process chains, resolved 200+ tickets within SLA, and maintained 99.5% system uptime for mission-critical operations.',
            },
            {
              emoji: '💡',
              title: 'Personal Projects & Innovation',
              description:
                'Created a voice-controlled Jarvis AI Assistant, a full-stack Airline Reservation System, and responsive clones like YouTube UI and BestOnlineMeal.com.',
            },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                backgroundColor: '#FFFFFF',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#4F46E5';
                e.target.style.boxShadow = '0 10px 15px -3px rgba(79, 70, 229, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = '#E5E7EB';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {/* Emoji */}
              <span
                style={{
                  fontSize: '2rem',
                  flexShrink: 0,
                  marginTop: '0.25rem',
                }}
              >
                {item.emoji}
              </span>

              {/* Content */}
              <div>
                <h4
                  style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    margin: '0',
                    fontSize: '1rem',
                    color: '#4B5563',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Statement */}
      <div
        style={{
          marginTop: '3.5rem',
          padding: '2rem',
          backgroundColor: 'linear-gradient(to right, #EEF2FF, #F3F4F6)',
          background: 'linear-gradient(to right, #EEF2FF, #F9FAFB)',
          borderRadius: '1rem',
          textAlign: 'center',
          border: '1px solid #C4B5FD',
        }}
      >
        <p
          style={{
            fontSize: '1.2rem',
            color: '#374151',
            margin: '0',
            lineHeight: 1.7,
          }}
        >
          I believe in continuous learning. Right now, I'm diving deep into{' '}
          <strong style={{ color: '#4F46E5', fontWeight: '600' }}>Generative AI</strong>,{' '}
          <strong style={{ color: '#4F46E5', fontWeight: '600' }}>LLMs</strong>, and building scalable full-stack applications that push the boundaries of what’s possible.
        </p>
      </div>

      
    </div>
  );
};

export default About;