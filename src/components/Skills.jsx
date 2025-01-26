// src/components/Skills.js
import React from 'react';
import './Skills.css';
function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className='skills-list'>
        <div>
          <strong>Languages:</strong>
          <p>
            Python, JavaScript, HTML, CSS, EJS, C++, C#, MATLAB, Assembly,
            Swift, Kotlin
          </p>
        </div>
        <div>
          <strong>Libraries/Frameworks:</strong>
          <p>
            Django, React.js, Node.js, Express.js, Bootstrap, Tailwind, React
            Native
          </p>
        </div>
        <div>
          <strong>Databases:</strong>
          <p>MongoDB, PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
