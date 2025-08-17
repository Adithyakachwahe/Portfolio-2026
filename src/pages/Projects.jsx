import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    // Professional Projects
    {
      title: "LLM Error Assistant",
      description: "Chat interface using NLP to resolve errors from Docupedia with PyTorch model trained on Bosch-wide data.",
      tech: ["ReactJS", "Flask", "Python", "PyTorch", "NLP"],
      github: null,
      category: "Professional"
    },
    {
      title: "SolFast 2.0",
      description: "AI recommendation tool with SSO, voice, and multi-file support, reducing manual effort by 90%.",
      tech: ["ReactJS", "Flask", "SSO", "SMT Integration"],
      github: null,
      category: "Professional"
    },
    {
      title: "Docupedia Hub",
      description: "NLP-powered knowledge engine improving accuracy by 40% through user queries and integration with support systems.",
      tech: ["NLP", "Flask", "Python", "AI"],
      github: null,
      category: "Professional"
    },
    {
      title: "Airline Reservation System",
      description: "Full-stack flight booking system with search, pricing comparison, and dynamic availability checks.",
      tech: ["Java", "Servlets", "JSP", "MySQL"],
      github: "https://github.com/Adithyakachwane/Airline.git",
      category: "Professional"
    },
    {
      title: "Employee Management System",
      description: "Team project for HR automation with modules for employee records, leave tracking, and admin dashboard.",
      tech: ["Spring Boot", "Bootstrap", "Java"],
      github: "https://github.com/Adithyakachwahe/Employee-Management-Syatem",
      category: "Professional"
    },

    // Personal Projects
    {
      title: "Personal Portfolio Website",
      description: "Professional showcase with contact functionality and backend logic using Java technologies.",
      tech: ["HTML", "CSS", "JSTL", "JSP", "Servlets", "MySQL"],
      github: "https://github.com/Adithyakachwahe/my_website",
      category: "Personal"
    },
    {
      title: "Jarvis AI Assistant",
      description: "Voice-controlled OS assistant that performs tasks like opening apps, playing music, and searching the web.",
      tech: ["Python", "Speech Recognition", "OS Automation"],
      github: "https://github.com/Adithyakachwahe/Jarvis_AI",
      category: "Personal"
    },
    {
      title: "BestOnlineMeal.com",
      description: "Responsive frontend for a food ordering platform, inspired by real-world meal delivery services.",
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/Adithyakachwahe/BestOnlineMeal.com",
      category: "Personal"
    },
    {
      title: "YouTube UI Clone",
      description: "Responsive replica of YouTube’s homepage UI, focusing on layout, responsiveness, and design accuracy.",
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/Adithyakachwahe/YouTube_UI_Clone",
      category: "Personal"
    },
  ];

  return (
    <div
      style={{
        padding: '2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#4B5563',
        minHeight: '80vh',
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
        My Projects
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
        A collection of professional and personal projects showcasing my full-stack, AI, and frontend development skills.
      </p>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem',
          margin: '0 auto',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = '0 10px 15px -3px rgba(79, 70, 229, 0.12)';
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.borderColor = '#4F46E5';
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderColor = '#E5E7EB';
            }}
          >
            {/* Category Badge (Subtle) */}
            {project.category && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: project.category === 'Professional' ? '#4F46E5' : '#059669',
                  backgroundColor: project.category === 'Professional' ? '#EEF2FF' : '#D1FAE5',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  alignSelf: 'flex-start',
                  marginBottom: '0.75rem',
                }}
              >
                {project.category}
              </span>
            )}

            {/* Title */}
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.75rem',
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: '#4B5563',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                flexGrow: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#F3F4F6',
                    color: '#374151',
                    borderRadius: '9999px',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            {project.github && (
              <a
                href={project.github.trim()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  color: '#4F46E5',
                  fontWeight: '500',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  alignSelf: 'flex-start',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseOver={(e) => (e.target.style.borderColor = '#4F46E5')}
                onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ marginRight: '0.25rem' }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;