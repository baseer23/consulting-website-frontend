import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h2>Basheer Khan Experience</h2>
      <p>
        We provide AI-driven solutions to help businesses achieve their goals.
        Explore our portfolio to see our successful projects or get in touch
        with us for a consultation.
      </p>
      <button onClick={() => (window.location.href = "/contact")}>
        Book a Consultation
      </button>
    </div>
  );
};

export default Home;
