// src/components/SkillBadge.jsx
import React from 'react';
import styles from '../styles/SkillBadge.module.css';

const SkillBadge = ({ name, category }) => {
  const categoryClass = styles[category] || styles.tools;

  return (
    <span className={`${styles.badge} ${categoryClass}`}>
      {name}
    </span>
  );
};

export default SkillBadge;