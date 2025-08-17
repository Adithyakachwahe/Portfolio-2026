// src/components/ProjectCard.jsx
import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, github }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.techStack}>
        {tech.map((t) => (
          <span key={t} className={styles.techBadge}>
            {t}
          </span>
        ))}
      </div>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;