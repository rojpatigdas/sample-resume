import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleProjects = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="container">
      <div className="section-header">
        <h2>Notable Projects</h2>
        <button 
          className={`toggle-btn ${isCollapsed ? 'collapsed' : ''}`}
          onClick={toggleProjects}
          aria-label="Toggle projects visibility"
        >
          <span className="toggle-icon">▼</span>
          <span className="toggle-text">
            {isCollapsed ? 'Show Projects' : 'Hide Projects'}
          </span>
        </button>
      </div>
      
      <div className={`projects-container ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="projects">
          <div className="project">
            <div className="project-header">
              <h3>🔹 QR Code Generator</h3>
              <div className="project-tech">HTML, CSS, JavaScript, QR Code API</div>
            </div>
            <div className="project-content">
              <p>Free online tool to convert text and links into downloadable QR codes. Features a clean, user-friendly interface with instant QR code generation and download capabilities.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">Web Application</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">Instant generation, download capabilities, clean UI</span>
                </div>
              </div>
              <a href="https://rojpatigdas.github.io/qr-generator-page/" target="_blank" rel="noopener noreferrer" className="project-link">View Live Demo →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 Email Summarizer Project</h3>
              <div className="project-tech">Google Apps Script, OpenAI API, Email Processing</div>
            </div>
            <div className="project-content">
              <p>This project parses and summarizes emails using Google Apps Script and the OpenAI API. Features include fetching and processing recent email threads, extracting and summarizing email content using OpenAI, and logging or storing summaries as needed.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Integration:</span>
                  <span className="detail-value">Google Apps Script + OpenAI API</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">Email parsing, AI summarization, automated logging</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/email-summarizer-project" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 Daily Reminder Message</h3>
              <div className="project-tech">Google Apps Script, Slack API, Automation</div>
            </div>
            <div className="project-content">
              <p>Sends automated daily Slack reminders using Apps Script, ensuring consistent team communication and task follow-ups without manual intervention.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Automation:</span>
                  <span className="detail-value">Daily scheduled reminders</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Benefit:</span>
                  <span className="detail-value">Consistent team communication, zero manual work</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/daily-reminder-message" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 KPI Automation</h3>
              <div className="project-tech">Google Apps Script, Google Sheets, Data Integration</div>
            </div>
            <div className="project-content">
              <p>Gathers and reports KPIs from multiple sources via scripts, eliminating 80%-90% of manual tracking and enabling accurate, centralized performance dashboards.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Impact:</span>
                  <span className="detail-value">80-90% reduction in manual tracking</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">Multi-source data integration, centralized dashboards</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/kpi-automation" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 Team Request Project</h3>
              <div className="project-tech">Google Workspace, Google Apps Script, Workflow Automation</div>
            </div>
            <div className="project-content">
              <p>Handles and routes team task requests via Google Workspace, streamlining request management and ensuring proper task distribution across teams.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Workflow:</span>
                  <span className="detail-value">Request capture, routing, and tracking</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Benefit:</span>
                  <span className="detail-value">Streamlined task distribution, proper routing</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/team-request-project" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 WHMCS Down Notification</h3>
              <div className="project-tech">Google Apps Script, WHMCS, Monitoring, Alerting</div>
            </div>
            <div className="project-content">
              <p>Alerts when WHMCS goes down or becomes unresponsive, ensuring fast resolution and minimal disruption to business operations.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Response Time:</span>
                  <span className="detail-value">Immediate detection and notification</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Benefit:</span>
                  <span className="detail-value">Minimized service disruption, faster resolution</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/whmcs-down-notification" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 Copper Data to Asana</h3>
              <div className="project-tech">API Integration, Copper CRM, Asana, Automation</div>
            </div>
            <div className="project-content">
              <p>Pushes Copper CRM opportunity data into Asana tasks automatically, creating seamless workflow integration between sales and project management.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Integration:</span>
                  <span className="detail-value">Copper CRM → Asana workflow</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Benefit:</span>
                  <span className="detail-value">Seamless sales-to-project workflow</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/copper-data-to-asana" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
          
          <div className="project">
            <div className="project-header">
              <h3>🔹 Discord Scheduler Bot</h3>
              <div className="project-tech">Discord API, Google Calendar, n8n, Bot Development</div>
            </div>
            <div className="project-content">
              <p>A custom slash-command bot that schedules Google Calendar events via n8n and posts details back to Discord, streamlining team scheduling and communication.</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">Discord Bot with Calendar Integration</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">Slash commands, calendar sync, team scheduling</span>
                </div>
              </div>
              <a href="https://github.com/rojpatigdas/discord-scheduler-bot" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 