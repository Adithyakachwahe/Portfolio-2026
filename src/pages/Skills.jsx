import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Updated skills list
  const skills = [
    { name: 'ReactJS', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Node.js', category: 'Frontend' },

    { name: 'Flask', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'Python', category: 'Backend' },

    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'NLP', category: 'AI/ML' },
    { name: 'LLMs', category: 'AI/ML' },
    { name: 'NumPy', category: 'AI/ML' },
    { name: 'Pandas', category: 'AI/ML' },

    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'Cloud' },
    { name: 'EC2/S3/ECR/ECS', category: 'Cloud' },

    { name: 'MySQL', category: 'Database' },
    { name: 'SQL Plus', category: 'Database' },

    { name: 'Git', category: 'Tools' },
    { name: 'Linux', category: 'Tools' },
    { name: 'ChatGPT', category: 'Tools' },
    { name: 'Leetcode', category: 'Tools' },
    { name: 'GFG', category: 'Tools' },
  ];

  // Color palette by category
  const colors = {
    Frontend: { bg: 'rgba(236, 201, 79, 0.15)', text: '#92400E', border: '#ECC94B' },
    Backend: { bg: 'rgba(107, 40, 217, 0.1)', text: '#6D28D9', border: '#C4B5FD' },
    'AI/ML': { bg: 'rgba(30, 64, 175, 0.1)', text: '#1E40AF', border: '#9CB3FF' },
    Cloud: { bg: 'rgba(185, 28, 28, 0.1)', text: '#B91C1C', border: '#FECDD3' },
    Database: { bg: 'rgba(5, 150, 105, 0.1)', text: '#059669', border: '#A7F3D0' },
    Tools: { bg: 'rgba(55, 65, 81, 0.08)', text: '#374151', border: '#D1D5DB' },
  };

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        padding: '2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#374151',
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
        Skills
      </h2>
      <p
        style={{
          fontSize: '1.15rem',
          color: '#4B5563',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}
      >
        A snapshot of my technical toolkit from full-stack development to AI, data, and enterprise systems.
      </p>

      {/* Skill Cloud */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          justifyContent: 'center',
          padding: '0.5rem',
          position: 'relative',
        }}
      >
        {skills.map((skill, index) => {
          const color = colors[skill.category] || { bg: '#F3F4F6', text: '#374151', border: '#D1D5DB' };
          const delay = (index % 15) * 0.05; // Stagger animation

          return (
            <span
              key={index}
              style={{
                padding: '0.65rem 1rem',
                backgroundColor: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
                borderRadius: '0.75rem',
                fontSize: '1.02rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? `floatUp 0.6s ease-out ${delay}s forwards`
                  : 'none',
                cursor: 'default',
              }}
            >
              {skill.name}
            </span>
          );
        })}
      </div>

      {/* Inline Animation Style */}
      <style>
        {`
          @keyframes floatUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Optional Legend (unobtrusive) */}
      <div
        style={{
          marginTop: '4rem',
          fontSize: '0.875rem',
          color: '#6B7280',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {Object.entries(colors).map(([category, color]) => (
          <span
            key={category}
            style={{
              display: 'flex',
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
                backgroundColor: color.text,
              }}
            ></span>
            <span>{category}</span>
          </span>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;