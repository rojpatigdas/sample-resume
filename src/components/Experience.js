import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="container">
      <h2>Professional Experience</h2>
      <div className="experience">
        <div className="job">
          <h3>Workflow Engineer</h3>
          <p><em>itGenius – Google Workspace Experts | Remote | January 2020 – July 2025</em></p>
          <ul>
            <li>Designed and implemented automation solutions to streamline internal operations across engineering, billing, and support teams.</li>
            <li>Built custom workflows and tools using Google Apps Script.</li>
            <li>Integrated third-party APIs and optimized Google Workspace environments.</li>
            <li>Supported WHMCS automation and customization to enhance operational efficiency and reduce manual work.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 