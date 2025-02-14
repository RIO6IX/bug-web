import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "./AccountSettings.css"; // Add your CSS here

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="account-settings-container">
      <h2 className="settings-heading">Account Settings</h2>

      <div className="settings-card">
        <div className="settings-tabs">
          <Nav variant="tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <Nav.Item>
              <Nav.Link eventKey="profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="security">Security</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="notifications">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="preferences">Preferences</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="privacy">Privacy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="language">Language</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="connected-accounts">Connected Accounts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="activity-log">Activity Log</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content className="tab-content">
          <Tab.Pane eventKey="profile">
            <h3>Profile Settings</h3>
            <div className="profile-settings">
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your full name" />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <button className="save-btn">Save Changes</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="security">
            <h3>Security Settings</h3>
            <div className="security-settings">
              <div className="security-option">
                <label>Change Password</label>
                <input type="password" placeholder="Enter current password" />
                <input type="password" placeholder="Enter new password" />
                <input type="password" placeholder="Confirm new password" />
                <button className="save-btn">Change Password</button>
              </div>

              <div className="security-option">
                <label>Enable Two-Factor Authentication (2FA)</label>
                <input type="checkbox" />
                <span>Enable 2FA for an added layer of security.</span>
                <button className="enable-btn">Enable 2FA</button>
              </div>

              <div className="security-option">
                <label>Security Questions</label>
                <input type="text" placeholder="Enter a security question" />
                <input type="text" placeholder="Answer to the question" />
                <button className="save-btn">Save Security Question</button>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="notifications">
            <h3>Notification Settings</h3>
            <div className="notification-settings">
              <label>
                <input type="checkbox" />
                Receive Email Notifications
              </label>
              <label>
                <input type="checkbox" />
                Receive SMS Notifications
              </label>
              <label>
                <input type="checkbox" />
                Push Notifications
              </label>
              <button className="save-btn">Save Notifications</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="preferences">
            <h3>Preferences</h3>
            <div className="preferences-settings">
              <label>Set Your Timezone</label>
              <select>
                <option>GMT</option>
                <option>GMT+1</option>
                <option>GMT+2</option>
              </select>
              <button className="save-btn">Save Preferences</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="privacy">
            <h3>Privacy Settings</h3>
            <div className="privacy-settings">
              <div className="privacy-option">
                <label>
                  <input type="checkbox" />
                  Share my email with third parties
                </label>
              </div>
              <div className="privacy-option">
                <label>
                  <input type="checkbox" />
                  Show my activity to others
                </label>
              </div>
              <div className="privacy-option">
                <label>
                  <input type="checkbox" />
                  Make my account private
                </label>
              </div>
              <div className="privacy-option">
                <label>
                  <input type="checkbox" />
                  Allow search engines to index my profile
                </label>
              </div>
              <button className="save-btn">Save Privacy Settings</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="language">
            <h3>Language Settings</h3>
            <div className="language-settings">
              <label>Preferred Language</label>
              <select>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <button className="save-btn">Save Language</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="connected-accounts">
            <h3>Connected Accounts</h3>
            <div className="connected-accounts-settings">
              <button className="connect-btn">Connect Google</button>
              <button className="connect-btn">Connect Facebook</button>
              <button className="disconnect-btn">Disconnect LinkedIn</button>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="activity-log">
            <h3>Activity Log</h3>
            <div className="activity-log">
              <ul>
                <li>Logged in from IP 192.168.1.1</li>
                <li>Changed password on 2025-02-14</li>
                <li>Updated profile on 2025-02-12</li>
              </ul>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </div>
  );
};

export default AccountSettings;
