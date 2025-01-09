import React, { useState } from 'react';

function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which recommendation is expanded

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
    <div className="min-h-screen bg-gray-100 p-8 text-gray-900">
      {/* About the Founder */}
      <div className="mb-12">
      <p className="text-center mt-4 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
    The mission is to harness the potential of artificial intelligence to solve real-world challenges and deliver meaningful, data-driven solutions. 
    By focusing on areas like NLP, Computer Vision, and Time Series Forecasting, I am committed to helping businesses and individuals 
    explore new possibilities and improve existing processes. Together, we can work to turn your ideas into reality with thoughtful and impactful technology.
</p>

</div>


      {/* Customer Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="border p-4 bg-white shadow-sm rounded">
            <div className="flex items-center mb-4">
              <img
                src={rec.profilePicture}
                alt={`${rec.name}'s profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">{rec.name}</h4>
                <p className="text-sm text-gray-600">{rec.title}</p>
              </div>
            </div>
            <p className="mb-4">{rec.message.substring(0, 100)}...</p>
            <button
              onClick={() => setExpandedIndex(index)}
              className="text-blue-500 hover:underline"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Overlay for Expanded Recommendation */}
      {expandedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg">
            <button
              onClick={() => setExpandedIndex(null)}
              className="text-green-500 font-bold mb-4"
            >
              Back
            </button>
            <div className="mb-4">
              <h4 className="text-xl font-bold">{recommendations[expandedIndex].name}</h4>
              <p className="text-sm text-gray-600">{recommendations[expandedIndex].title}</p>
            </div>
            <p>{recommendations[expandedIndex].message}</p>
          </div>
        </div>
      )}

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center p-4"
          >
            {link.image ? (
              <img src={link.image} alt="Link" className="w-20 h-20 object-contain mb-4" />
            ) : (
              <span className="w-20 h-20 flex items-center justify-center bg-green-500 text-white text-lg font-bold rounded-md">
                {link.label}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
