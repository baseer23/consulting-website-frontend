// About.js
import React from 'react';

function About() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold mb-4">About Me: Abdul Baseer Khan</h2>
      <p className="text-center max-w-3xl mb-8">
        I am a passionate Data Scientist and Machine Learning Engineer with expertise in NLP, Computer Vision, and Time Series Forecasting. I am driven by a love for solving real-world problems using cutting-edge AI technologies.
      </p>
      <div className="flex gap-6 mb-6">
        <a href="https://www.kaggle.com/abdulbaseer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">Kaggle</a>
        <a href="https://www.fiverr.com/abdulbaseer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">Fiverr</a>
        <a href="https://www.linkedin.com/in/abdulbaseer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">LinkedIn</a>
        <a href="https://twitter.com/abdulbaseer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">Twitter</a>
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full"></div>
          <a
            href="/path-to-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-4 w-24 h-24 flex items-center justify-center bg-blue-500 text-white rounded-full text-center text-sm font-bold hover:bg-blue-600 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;