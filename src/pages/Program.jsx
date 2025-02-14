import React, { useState } from "react";
import "./Program.css"; // Link to your CSS file

export function Program() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const bountyPrograms = [
    { name: "Web App Security", category: "Web", reward: "$1000" },
    { name: "Mobile App Bugs", category: "Mobile", reward: "$2000" },
    { name: "API Vulnerabilities", category: "API", reward: "$1500" },
    { name: "Infrastructure", category: "Infrastructure", reward: "$3000" },
  ];

  const filteredPrograms = bountyPrograms.filter((program) =>
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFilter === "all" || program.category.toLowerCase() === selectedFilter)
  );

  return (
    <div className="program-container">
      {/* Sub Navigation Bar */}
      <div className="sub-nav">
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Active Programs</a></li>
            <li><a href="#">My Reports</a></li>
            <li><a href="#">Rewards</a></li>
          </ul>
        </nav>
      </div>

      <h2 className="program-heading">Bug Bounty Program</h2>
      <p className="program-description">
        Welcome to our Bug Bounty Program! Find the available programs, search and filter by category.
      </p>

      {/* Search Bar and Filters */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search Programs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Categories</option>
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="api">API</option>
          <option value="infrastructure">Infrastructure</option>
        </select>
      </div>

      {/* Display Available Programs */}
      <div className="program-list">
        {filteredPrograms.length === 0 ? (
          <p>No programs found based on your search and filter criteria.</p>
        ) : (
          filteredPrograms.map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program.name}</h3>
              <p>Category: {program.category}</p>
              <p>Reward: {program.reward}</p>
              <button className="btn-participate">Participate</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Program;
