// Portfolio.js
import React from 'react';

function Portfolio() {
  const recommendations = [
    {
      name: 'John Doe',
      title: 'Senior Developer',
      message: 'Aisha significantly improved our project workflows.',
      profile: 'https://www.linkedin.com/in/johndoe/'
    },
    {
      name: 'Jane Smith',
      title: 'Project Manager',
      message: 'An essential tool for our team’s success!',
      profile: 'https://www.linkedin.com/in/janesmith/'
    },
    {
      name: 'Michael Lee',
      title: 'Tech Lead',
      message: 'Highly recommend Aisha for any AI-driven solutions.',
      profile: 'https://www.linkedin.com/in/michaellee/'
    },
  ];

  return (
    <div className="h-screen bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="border p-4 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold mb-2">{rec.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{rec.title}</p>
            <p className="mb-4">{rec.message}</p>
            <a
              href={rec.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;