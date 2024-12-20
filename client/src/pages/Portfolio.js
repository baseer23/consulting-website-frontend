import React from "react";
import niagaraFalls from "../assets/niagara-falls.png"; // Correct path to your image

const Portfolio = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${niagaraFalls})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center shadow-lg">
          Hi, I am Abdul Baseer, founder of Thinkcharge. <br /> I am a philosopher by design.
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
