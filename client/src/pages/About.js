import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in">About AKLO Labs</h2>
      <p className="text-center max-w-3xl mb-8 text-lg">
        <strong>AKLO Labs</strong>, which stands for <em>Advanced Knowledge and Learning Optimization</em>, 
        is committed to driving innovation, fostering research, and building intelligent systems. 
        We specialize in empowering businesses with data-driven solutions and cutting-edge AI technologies 
        to address complex challenges with precision and insight.
      </p>
      <div className="bg-gray-700 shadow-md rounded-lg p-6 mb-12 max-w-4xl text-center hover:scale-105 transition duration-500">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h3>
        <p>
          To be a global leader in innovation and advanced learning systems, 
          bridging the gap between raw data and actionable intelligence. 
          At AKLO Labs, we aim to optimize knowledge discovery and system intelligence 
          for industries across the globe.
        </p>
      </div>
    </div>
  );
}

export default About;
