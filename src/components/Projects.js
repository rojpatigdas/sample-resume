import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="container">
      <h2>Notable Projects</h2>
      <div className="projects">
        <div className="project">
          <strong>Engineering KPI Automation</strong>
          <em>Asana, Google Apps Script, Google Sheets</em>
          Automated data collection and reporting for engineering KPIs, eliminating 80%-90% of manual tracking and enabling accurate, centralized performance dashboards.
        </div>
        <div className="project">
          <strong>Team Request Automation</strong>
          <em>Asana, Google Apps Script, Google Chat, Google Sheets, Zapier</em>
          Developed a tool to capture, route, and track team requests with integrated automations across Google Sheets and external platforms.
        </div>
        <div className="project">
          <strong>Incident Alerting System</strong>
          <em>Google Apps Script, WHMCS, Email Automation</em>
          Developed a system to detect and notify support teams about WHMCS downtime, ensuring fast resolution and minimal disruption.
        </div>
      </div>
    </section>
  );
};

export default Projects; 