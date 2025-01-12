import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center py-6 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center animate-fade-in">About AKLO Labs</h2>
      <p className="text-center max-w-xl sm:max-w-3xl mb-6 text-base sm:text-lg">
        <strong>AKLO Labs</strong> is proud to call Halifax home. Rooted in the heart of Atlantic Canada, 
        we are committed to driving innovation, fostering research, and building intelligent systems. 
        Our mission is to empower local and global businesses with data-driven solutions and cutting-edge AI technologies 
        that address complex challenges with precision and insight.
      </p>
      <div className="bg-gray-700 shadow-md rounded-lg p-4 sm:p-6 mb-8 max-w-xl sm:max-w-4xl text-center hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-purple-400">Our Vision</h3>
        <p className="text-sm sm:text-base">
          To be a global leader in innovation and advanced learning systems while celebrating Halifax's growing reputation 
          as a hub for tech talent and entrepreneurship. At AKLO Labs, we aim to bridge the gap between raw data and actionable intelligence, 
          delivering impactful solutions from the Maritimes to the world.
        </p>
      </div>
      {/* Clickable "Why Halifax" Section */}
      <div
        className="bg-blue-900 shadow-md rounded-lg p-4 sm:p-6 max-w-xl sm:max-w-4xl text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => navigate('/why-halifax')}
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-teal-400">Why Halifax?</h3>
        <p className="text-sm sm:text-base">
          Halifax combines a vibrant, supportive tech community with a rich cultural and maritime heritage. 
          Our city is a place where innovation thrives, making it the perfect environment for developing cutting-edge AI solutions. 
          We’re inspired by Halifax's unique blend of local talent, world-class research institutions, and a deep sense of connection 
          to the global stage.
        </p>
      </div>
    </div>
  );
}

export default About;
