import React from "react";
import "./home.css";

const programs = [
  {
    id: 1,
    name: "Acme Corp Bug Bounty",
    description: "Earn rewards by reporting security vulnerabilities in Acme Corp's products.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 2,
    name: "CyberSecure Bounty",
    description: "Help secure CyberSecure's platforms and get rewarded.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 3,
    name: "FinanceShield Bug Bounty",
    description: "Find and report vulnerabilities in FinanceShield's infrastructure.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

function Home() {
  return (
    <div className="container">
      <h2 className="text-center">Welcome to the Bug Bounty Platform</h2>
      <p className="text-center">Find and report security vulnerabilities.</p>
      <div className="programs-container">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.name} className="program-image" />
            <div className="card-body">
              <h3 className="program-title">{program.name}</h3>
              <p className="program-description">{program.description}</p>
              <a href={program.link} className="btn-custom">
                View Program
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
