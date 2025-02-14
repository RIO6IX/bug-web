import React from "react";
import bugBountyService from "../services/bugBountyService";
import "./Dashboard.css"; // Link to your CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Bug Bounty Dashboard</h2>
      <p className="dashboard-description">Manage your reports, submissions, and bounty programs.</p>
      
      <div className="dashboard-content">
        <div className="cards">
          <div className="card">
            <h3 className="card-title">Active Programs</h3>
            <p className="card-data">3 Programs</p>
            <button className="card-btn">View Programs</button>
          </div>
          <div className="card">
            <h3 className="card-title">Open Reports</h3>
            <p className="card-data">5 Reports</p>
            <button className="card-btn">View Reports</button>
          </div>
          <div className="card">
            <h3 className="card-title">Resolved Issues</h3>
            <p className="card-data">12 Issues</p>
            <button className="card-btn">View Issues</button>
          </div>
          <div className="card">
            <h3 className="card-title">Total Earnings</h3>
            <p className="card-data">$250</p>
            <button className="card-btn">View Earnings</button>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Submitted new report on <strong>Example Program</strong></li>
            <li>Resolved <strong>SQL Injection</strong> vulnerability on <strong>Website XYZ</strong></li>
            <li>Received a bounty of <strong>$50</strong> for resolving <strong>Cross-Site Scripting</strong></li>
            <li>Report status updated for <strong>Example Program</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
