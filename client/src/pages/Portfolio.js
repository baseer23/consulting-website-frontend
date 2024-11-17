import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Driven Dashboard",
      description: "Built a real-time analytics dashboard for business insights.",
    },
    {
      title: "Customer Segmentation",
      description: "Used machine learning to improve customer segmentation.",
    },
    {
      title: "Time Series Forecasting",
      description: "Predicted trends using advanced forecasting models.",
    },
  ];

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <p>Here are some of our successful projects:</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
