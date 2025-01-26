// src/components/Experience.js
import React from 'react';
import styles from './Experience.module.css';
import './Experience.css';
function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className={styles['experience-entry']}>
        <h3>Software Engineer - General Assembly, Bahrain</h3>
        <p>09/2024 – 02/2025</p>
        <p>
          Completed 500+ hours of expert-led instruction in JavaScript, HTML,
          CSS, Python, React, Express, and more.
        </p>
      </div>
      <div className={styles['experience-entry']}>
        <h3>IT Certified Tester - Bahrain Institute of Technology</h3>
        <p>12/2023 – Present</p>
        <p>
          Providing IT professional courses to students and enterprises as a
          certified tester.
        </p>
      </div>
    </section>
  );
}

export default Experience;
