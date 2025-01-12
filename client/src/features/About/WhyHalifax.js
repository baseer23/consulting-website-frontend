import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function WhyHalifax() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Halifax?
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Halifax offers a unique combination of affordable innovation,
          cutting-edge infrastructure, and scalable resources. Businesses here
          solve global challenges while maintaining cost efficiency and
          competitive growth rates. Here's why top industries thrive in Halifax.
        </motion.p>
      </section>

      {/* Problem-Solution Sections */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ocean Technology */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://techtalent.ca/wp-content/uploads/2023/05/Halifax.jpeg"
              alt="Ocean Technology"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Ocean Technology</h2>
            <p className="text-gray-700">
              Halifax is solving marine inefficiencies globally. With access to
              the Bedford Institute of Oceanography, Halifax companies develop
              AI-driven ecosystem mapping, reduce overfishing risks, and lead
              sustainable practices.  
              <a
                href="https://www.dal.ca/research/ocean.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn more here.
              </a>
            </p>
          </motion.div>

          {/* Logistics */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://halifaxpartnership.com/sites/default/uploads/pages/hero-backgrounds/_1200x630_crop_center-center_82_none/Halifax-Industries-Ocean-Economy.webp?mtime=1668023436"
              alt="Logistics"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Logistics Innovation</h2>
            <p className="text-gray-700">
              Shipping delays cost billions annually. Halifax’s port, ranked
              among North America’s most efficient, offers a 15% faster
              turnaround than comparable ports. Its data-first approach is ideal
              for supply chain innovators.  
              <a
                href="https://www.portofhalifax.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Explore the Port of Halifax.
              </a>
            </p>
          </motion.div>

          {/* Real Estate */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://cdn.prod.website-files.com/60085ab794a5304e9c4e73d6/66abe6496a0020c200969447_Construction%20Planning.webp"
              alt="Real Estate"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Real Estate</h2>
            <p className="text-gray-700">
              Urban housing crises are mitigated with IoT-driven PropTech
              innovations in Halifax. Predictive models improve urban planning
              efficiency by 20%. Affordable housing costs attract global talent.  
              <a
                href="https://www.novascotia.ca/economy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read Nova Scotia’s housing plans.
              </a>
            </p>
          </motion.div>

          {/* Clean Energy */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://lh7-us.googleusercontent.com/pxeL0O8bbe0TuD06zL49VOs3UlrYe5_by0RcBXtP0szyJrZgC1Srg4xfFoLRfXSd5YeYTLC0FwKjSRGlwiuWywVfn5G3DQZ9aV5vkW0KaVDOtYH0M_LzjJYAR87qa8q_csy766SiZTI9Uk-hqEY9jAs"
              alt="Clean Energy"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Clean Energy</h2>
            <p className="text-gray-700">
              Halifax uses unique environments like the Bay of Fundy, home to
              the world’s largest tidal ranges, for clean energy R&D. Renewable
              energy scaling here costs 25% less than in major hubs.  
              <a
                href="https://www.fundyforce.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Discover the Bay of Fundy projects.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Build Solutions in Halifax?
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Join the ranks of businesses leveraging Halifax’s cost-effective
          infrastructure, global data partnerships, and unique innovation hubs
          to set new global standards.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block"
        >
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default WhyHalifax;
