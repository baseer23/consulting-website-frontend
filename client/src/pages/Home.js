// Home.js
import React from 'react';

function Home() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aisha</h1>
        <p className="text-xl mb-6">Your AI-powered requirements gathering assistant.</p>
        <a href="#about" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
