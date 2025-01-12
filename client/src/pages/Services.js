// Services.js
import React from 'react';

function Services() {
  const services = [
    'AI-driven requirements gathering',
    'Custom AI and machine learning solutions',
    'Time series forecasting and predictive analytics',
    'Natural language processing (NLP) and chatbot development',
    'Computer vision and image processing solutions',
    'Cloud deployment on AWS, GCP, and Azure',
    'End-to-end MLOps and CI/CD pipelines',
    'Generative AI solutions and LLM fine-tuning',
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-500 mb-4 sm:mb-6">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
          We specialize in delivering cutting-edge solutions in AI, machine learning, and data science to transform your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-800 shadow-md sm:shadow-lg rounded-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm sm:text-lg font-medium text-gray-200">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
