// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Contact Me: mohsen.salman099@gmail.com</p>
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
      </div>
    </footer>
  );
}

export default Footer;
