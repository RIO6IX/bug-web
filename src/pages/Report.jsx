import React, { useState } from "react";
import "./Report.css"; // Link to your CSS file

function Report() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bugProgram, setBugProgram] = useState("");
  const [vulnerability, setVulnerability] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [files, setFiles] = useState([]);
  const [fee, setFee] = useState("");

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like calling an API or service.
    console.log("Form submitted with data:", { title, description, bugProgram, vulnerability, severity, fee, files });
  };

  return (
    <div className="report-container">
      <h2>Report a Vulnerability</h2>
      <p>Submit a new security report and upload any relevant files.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a brief title for the report"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe the vulnerability in detail"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="bugProgram">Bug Bounty Program</label>
          <select
            id="bugProgram"
            className="form-control"
            value={bugProgram}
            onChange={(e) => setBugProgram(e.target.value)}
            required
          >
            <option value="">Select Program</option>
            <option value="ProgramA">Program A</option>
            <option value="ProgramB">Program B</option>
            <option value="ProgramC">Program C</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vulnerability">Vulnerability Type</label>
          <select
            id="vulnerability"
            className="form-control"
            value={vulnerability}
            onChange={(e) => setVulnerability(e.target.value)}
            required
          >
            <option value="">Select Vulnerability Type</option>
            <option value="XSS">Cross-Site Scripting (XSS)</option>
            <option value="SQLInjection">SQL Injection</option>
            <option value="RCE">Remote Code Execution (RCE)</option>
            <option value="CSRF">Cross-Site Request Forgery (CSRF)</option>
            <option value="PrivilegeEscalation">Privilege Escalation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="severity">Severity</label>
          <select
            id="severity"
            className="form-control"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fee">Fee Expected (if applicable)</label>
          <input
            type="number"
            id="fee"
            placeholder="Enter expected bounty fee"
            className="form-control"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>

        <div className="form-group file-upload">
          <label htmlFor="files">Upload Files (Image, PDF, Docs)</label>
          <input
            type="file"
            id="files"
            className="file-input"
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <small className="file-info">You can upload images, PDFs, or Word documents.</small>
        </div>

        <button type="submit" className="btn-submit">
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Report;
