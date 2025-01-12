import React, { useState } from 'react';
import { FaLinkedin, FaKaggle, FaGithub, FaGoogleDrive } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const recommendations = [
    {
      name: 'Innovasea',
      title: 'Jennie Korus',
      message: `I had the pleasure of working with Abdul on a machine learning project at Innovasea, 
      where he played a crucial role in helping us develop a model to forecast dissolved oxygen levels. 
      Abdul was a dedicated and talented asset to the project. He was primarily responsible for model development 
      and testing using various algorithms and feature engineering to handle a challenging and complex time series dataset. 
      His excellent analytical and programming skills, along with his understanding of machine learning principles, 
      were evident throughout the project. Additionally, his ability to respond to feedback and continuously improve his 
      work was a real asset to the project.`,
      profilePicture:
        'https://www.innovasea.com/wp-content/uploads/2021/03/7cb1ff7c-apple-touch-icon.jpg',
      profile: 'https://www.linkedin.com/company/innovasea/posts/?feedView=all',
    },
    {
      name: 'Indian Institute of Technology Hyderabad',
      title: 'Ambarish Parthasarathy',
      message: `I had worked with Abdul during his period as Research Assistant at IIT Hyderabad. 
      Given a wary environment here, he adapted very quickly unlike the other peers in the team. 
      His collaborative skills were quite fascinating as he always discusses his approaches and the ideas 
      either with me or with other peers, which helped him to excel in his field. 
      I am very much confident that his skills and talents will definitely attract various organisations and companies.`,
      profilePicture:
        'https://media.licdn.com/dms/image/v2/D560BAQF4UTIU_pr10A/company-logo_200_200/company-logo_200_200/0/1707976518475/iithyderabad_logo?e=1744243200&v=beta&t=1DgRTdanUPXbe6RhLWNZWTXrBXHhnwJTesDt8CiB-58',
      profile: 'https://www.linkedin.com/school/iithyderabad/',
    },
    {
      name: 'Ranchpal OÜ',
      title: 'Pradeep Thakran',
      message: `I wholeheartedly recommend Abdul for any role that requires a skilled and innovative Machine Learning Engineer 
      with a strong foundation in Data Science. His technical expertise, coupled with his collaborative and proactive approach, 
      make him an asset to any organization. Abdul's passion for staying at the forefront of technological advancements and his 
      commitment to excellence make him a standout professional in the field. It was a pleasure working alongside Abdul, and I am 
      confident that he will continue to excel in his future endeavors.`,
      profilePicture:
        'https://media.licdn.com/dms/image/v2/C4D0BAQFyhJ-pcTkkbQ/company-logo_200_200/company-logo_200_200/0/1630542143588/ranchpal_logo?e=1744243200&v=beta&t=Vkdjpha4TwBJWMy2Ir4KFoy5yA4vnvGlxzFUf1AOuIs',
      profile: 'https://www.linkedin.com/company/ranchpal/posts/?feedView=all',
    },
  ];

  const links = [
    {
      icon: <FaLinkedin size={24} className="text-gray-200" />,
      url: 'https://www.linkedin.com/in/abdulbaseerkhan/',
    },
    {
      icon: <FaKaggle size={24} className="text-gray-200" />,
      url: 'https://www.kaggle.com/abdulbaseermohammed',
    },
    {
      icon: <SiFiverr size={24} className="text-gray-200" />,
      url: 'https://www.fiverr.com/indian_guy',
    },
    {
      icon: <FaGoogleDrive size={24} className="text-gray-200" />,
      url: 'https://scholar.google.com/citations?user=94RyFREAAAAJ',
    },
    {
      icon: <FaGithub size={24} className="text-gray-200" />,
      url: 'https://github.com/baseer23/',
    },
    {
      icon: <FaGoogleDrive size={24} className="text-gray-200" />,
      url: 'https://drive.google.com/file/d/1R3CJRwWQGzQbpnI4mIchw_zZDBUYzljj/view?usp=sharing',
      label: 'CV',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-gray-200">
      {/* About the Founder */}
      <div className="mb-12">
        <p className="text-center mt-4 max-w-4xl mx-auto text-lg text-gray-400 leading-relaxed">
          The mission is to harness the potential of artificial intelligence to solve real-world challenges and deliver meaningful, data-driven solutions. 
          By focusing on areas like NLP, Computer Vision, and Time Series Forecasting, I am committed to helping businesses and individuals 
          explore new possibilities and improve existing processes. Together, we can work to turn your ideas into reality with thoughtful and impactful technology.
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="relative border border-gray-800 p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={rec.profilePicture}
                alt={`${rec.name}'s profile`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-200">{rec.name}</h4>
                <p className="text-sm text-gray-500">{rec.title}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {rec.message.substring(0, 100)}...
            </p>
            <button
              onClick={() => setExpandedIndex(index)}
              className="absolute bottom-4 right-4 text-blue-400 hover:underline"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Overlay for Expanded Recommendation */}
      {expandedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg relative">
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
            <h4 className="text-2xl font-bold text-gray-200 mb-2">
              {recommendations[expandedIndex]?.name}
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              {recommendations[expandedIndex]?.title}
            </p>
            <p className="text-gray-400">{recommendations[expandedIndex]?.message}</p>
          </div>
        </div>
      )}

      {/* Links Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gray-900 shadow-md rounded-full hover:bg-gray-800 transition duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
