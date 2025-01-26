// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Mohsen Salman Ali</h1>
      <h3>Software Engineer</h3>
      <p>Bahraini | +973 39970100 | mohsen.salman099@gmail.com</p>
      <div>
        <a
          href='https://www.linkedin.com/in/mohsen-shubar/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/MShubar'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        <a
          href='https://budgettracker-ga-mmsl.surge.sh/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Project
        </a>
      </div>
    </header>
  );
}

export default Header;
