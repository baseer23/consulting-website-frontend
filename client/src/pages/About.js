import React from 'react';

function About() {
  const links = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      url: 'https://www.linkedin.com/in/abdulbaseerkhan/',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png',
      url: 'https://www.kaggle.com/abdulbaseermohammed',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDe6lddf0n1wCg1gtKp-e0cd3G24pqQV8eg&s',
      url: 'https://www.fiverr.com/indian_guy',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1200px-Google_Scholar_logo.svg.png',
      url: 'https://scholar.google.com/citations?user=94RyFREAAAAJ',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png',
      url: 'https://github.com/baseer23/',
    },
    {
      image: '',
      url: 'https://drive.google.com/file/d/1R3CJRwWQGzQbpnI4mIchw_zZDBUYzljj/view?usp=sharing',
      label: 'CV',
    },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {/* Header Section */}
      <h2 className="text-3xl font-bold mb-6">Abdul Baseer Khan</h2>
      <p className="text-center max-w-3xl mb-12 text-lg">
        I am a passionate Data Scientist and Machine Learning Engineer with expertise in NLP, Computer Vision, and Time Series Forecasting. I am driven by a love for solving real-world problems using cutting-edge AI technologies.
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12 px-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col items-center text-center p-4"
          >
            {link.image ? (
              <img
                src={link.image}
                alt=""
                className="w-24 h-24 object-contain mb-4"
              />
            ) : (
              <span className="w-24 h-24 flex items-center justify-center bg-green-500 text-white text-lg font-bold rounded-md">
                {link.label}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default About;
