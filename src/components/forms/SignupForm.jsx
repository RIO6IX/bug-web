import React, { useState } from "react";
import "./SignupForm.css";  // Import the CSS file for styling

function SignupForm() {
  const [userType, setUserType] = useState(null);  // To track whether user selected hacker or company

  // Handle card selection
  const handleCardSelect = (type) => {
    setUserType(type);
  };

  // Reset to user type selection
  const handleBackToSelection = () => {
    setUserType(null);
  };

  return (
    <div className="signup-form-container">
      {/* Step 1: Select "Hacker" or "Company" */}
      {!userType && (
        <div className="user-type-selection">
          <div className="card" onClick={() => handleCardSelect("hacker")}>
            <h3>I'm a Hacker</h3>
            <p>Start hacking today! Use your skills to make the internet safer.</p>
          </div>
          <div className="card" onClick={() => handleCardSelect("company")}>
            <h3>I'm a Company</h3>
            <p>Protect your company's security with the help of ethical hackers.</p>
          </div>
        </div>
      )}

      {/* Step 2: Show form based on selection */}
      {userType && (
        <div className="signup-form">
          <button className="btn-back" onClick={handleBackToSelection}>Back to Selection</button>

          <h2>{userType === "hacker" ? "Hacker Sign Up" : "Company Sign Up"}</h2>
          <form>
            {userType === "hacker" ? (
              <>
                <label htmlFor="username">Username*</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Choose a username"
                  className="form-control"
                />
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="form-control"
                />
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  className="form-control"
                />
                <label htmlFor="confirm-password">Confirm Password*</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="form-control"
                />
                <p className="terms">
                  By clicking "Create account", you agree to our{" "}
                  <a href="/terms">Terms and Conditions</a> and acknowledge that you have read our{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </p>
                <button type="submit" className="btn-submit">
                  Create Account
                </button>
              </>
            ) : (
              <>
                <label htmlFor="first-name">First Name*</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Your first name"
                  className="form-control"
                />
                <label htmlFor="last-name">Last Name*</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Your last name"
                  className="form-control"
                />
                <label htmlFor="company-email">Business Email*</label>
                <input
                  type="email"
                  id="company-email"
                  placeholder="Your business email address"
                  className="form-control"
                />
                <label htmlFor="company">Company*</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  className="form-control"
                />
                <label htmlFor="job-title">Job Title*</label>
                <input
                  type="text"
                  id="job-title"
                  placeholder="Your job title"
                  className="form-control"
                />
                <label htmlFor="reason">Reason for Contact*</label>
                <select id="reason" className="form-control">
                  <option value="">Select...</option>
                  <option value="security">Security-related inquiry</option>
                  <option value="sales">Sales inquiry</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                  className="form-control"
                />
                <label htmlFor="country">Country*</label>
                <select id="country" className="form-control">
                  <option value="">Select...</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                </select>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
