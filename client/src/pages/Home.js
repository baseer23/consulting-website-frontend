// Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [typingText, setTypingText] = useState('');
  const fullText = "AKLO Labs – Transforming Ideas into Intelligent Solutions.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 30); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-600 flex items-center justify-center">
      <div className="text-center">
        {/* Typing Effect for Slogan */}
        <h1 className="text-4xl font-bold mb-4 text-white animate-fade-in">
          {typingText}
        </h1>

        {/* Subtext with subtle slide-in animation */}
        <p className="text-xl mb-6 text-gray-300 opacity-0 animate-slide-in">
          Empowering data-driven solutions for a smarter future.
        </p>

        {/* Call-to-action button */}
        <a
          href="#about"
          className="bg-gray-800 text-white px-6 py-3 rounded shadow-lg hover:bg-gray-700 transition transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
