import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (index) => {
    setExpandedCard(index);
  };

  const handleCollapse = () => {
    setExpandedCard(null);
  };

  const teamMembers = [
    {
      name: "Anant Sharma",
      role: "President",
      description: "Some Description",
      detailedDescription: "Detailed information about Anant Sharma goes here."
    },
    {
      name: "Parth Gupta",
      role: "Vice President",
      description: "Some Description",
      detailedDescription: "Detailed information about Parth Gupta goes here."
    },
    {
      name: "Vasu Bhatia",
      role: "Secretary",
      description: "Some Description",
      detailedDescription: "Detailed information about Vasu Bhatia goes here."
    },
    {
      name: "Srishti Gupta",
      role: "Joint Secretary",
      description: "Some Description",
      detailedDescription: "Detailed information about Srishti Gupta goes here."
    },
    {
      name: "Naman Mittal",
      role: "Treasurer",
      description: "Some Description",
      detailedDescription: "Detailed information about Naman Mittal goes here."
    },
    {
      name: "Naman Tomar",
      role: "Web Master",
      description: "Some Description",
      detailedDescription: "Detailed information about Naman Tomar goes here."
    },
    {
      name: "Bhavya Sharma",
      role: "Research Head",
      description: "Some Description",
      detailedDescription: "Detailed information about Bhavya Sharma goes here."
    },
    {
      name: "Chaitanya Anchal",
      role: "Public Relations Head",
      description: "Some Description",
      detailedDescription: "Detailed information about Chaitanya Anchal goes here."
    },
    {
      name: "Ashmi Sharma",
      role: "Operations Manager",
      description: "Some Description",
      detailedDescription: "Detailed information about Ashmi Sharma goes here."
    }
  ];

  return (
    <section
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
      onClick={handleCollapse}
    >
      <div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading */}
        <motion.h1
          className="text-7xl tracking-wide font-['Exo_2'] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Meet Our Team
        </motion.h1>

        {/* Paragraph */}
        <p className="text-medium font-semibold mt-8 font-roboto">
          Our team is dedicated to making a difference by providing resources, support, and opportunities for students and educators to learn and grow. We are committed to fostering a culture of inclusivity, respect, and open communication. We are passionate about what we do, and we are excited to share our vision with you.
        </p>

        {/* Title: Founding Faculty Advisor */}
        <div className="font-['Exo_2'] font-semibold text-center mt-12">
          <span style={{ fontSize: '160%' }}>Founding Faculty Advisor</span>
          <div className="w-1/4 h-px bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </div>

        {/* Single Centered Zero Card */}
        <div className="flex justify-center mb-16 mt-8">
          <motion.div
            id="team-member-0"
            className={`bg-gray-800 p-6 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative ${
              expandedCard !== null && expandedCard !== 0
                ? "blur-md scale-90"
                : "blur-none scale-100"
            }`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="team-member-0.jpg"
              alt="0"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 font-['Exo_2']">
              Prof. (DR.) Vivek Kumar Sehgal
            </h3>
            <p className="text-gray-400 font-['Exo_2']">Professor & Head of Dept. of CSE&IT</p>
            <p className="mt-2 text-gray-300 font-['Exo_2'] text-sm">
              "As the Founding Faculty Advisor, Prof. Sehgal is instrumental...
            </p>

            {/* Hover Gradient & Icons */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 flex gap-4 items-center">
                <a href="https://www.linkedin.com/">
                  <img
                    src="linkedin.png"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a href="mailto:info@yourdomain.com">
                  <img src="gmail.png" alt="Email" className="w-8 h-8" />
                </a>
              </div>

              {/* Plus Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand(0);
                }}
                className="absolute bottom-4 right-4 text-green-300 text-2xl font-bold hover:text-green-500 transition-colors"
              >
                +
              </button>
            </div>

            {/* Expanded View */}
            {expandedCard === 0 && (
              <motion.div
                className="absolute inset-0 bg-black text-white p-8 rounded-lg shadow-2xl z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold font-['Exo_2'] mb-4">
                  Prof. (DR.) Vivek Kumar Sehgal
                </h2>
                <p className="justify-center text-medium font-semibold font-['Exo_2'] mb-6">
                "Prof. Sehgal, as the Founding Faculty Advisor, has played a pivotal role in shaping the department's vision and fostering a culture of excellence. His leadership and dedication have been instrumental in driving the department towards achieving new heights."
                </p>

                {/* Close Button */}
                <button
                  onClick={handleCollapse}
                  className="font-['Exo_2'] mt-4 px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Stylish Divider */}
        <div className="relative w-full h-4 mb-12">
          <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
          <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
        </div>

        {/* Title: Officers 24-25 */}
        <div className="font-['Exo_2'] font-semibold text-center mt-12">
          <span style={{ fontSize: '160%' }}>Officers 24-25</span>
          <div className="w-1/4 h-px bg-gradient-to-r from-green-400 to-green-600 mx-auto">
          </div>
        </div>

        {/* Grid of Other Cards */}
        <div
          id="team-content"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative ${
                expandedCard !== null && expandedCard !== index + 1
                  ? "blur-md scale-90"
                  : "blur-none scale-100"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={`team-member-${index + 1}.jpg`}
                alt={`Team Member ${index + 1}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4 font-['Exo_2']">
                {member.name}
              </h3>
              <p className="text-gray-400 font-['Exo_2']">{member.role}</p>
              <p className="mt-2 text-gray-300 font-['Exo_2'] text-sm">
                {member.description}
              </p>

              {/* Hover Gradient & Icons */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 flex gap-4 items-center">
                  <a href="https://www.linkedin.com/"
                  target="_blank" rel="noopener noreferrer">
                    <img
                      src="linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="mailto:info@yourdomain.com"
                  target="_blank" rel="noopener noreferrer">
                    <img
                      src="gmail.png"
                      alt="Email"
                      className="w-8 h-8"
                    />
                  </a>
                </div>

                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExpand(index + 1);
                  }}
                  className="absolute bottom-4 right-4 text-green-300 text-2xl font-bold hover:text-green-500 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Expanded View */}
              {expandedCard === index + 1 && (
                <motion.div
                  className="absolute inset-0 bg-black text-white p-8 rounded-lg shadow-2xl z-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold font-['Exo_2'] mb-4">
                    {member.name}
                  </h2>
                  <p className="text-lg font-['Exo_2'] mb-6">
                    {member.detailedDescription}
                  </p>

                  {/* Close Button */}
                  <button
                    onClick={handleCollapse}
                    className="font-['Exo_2'] mt-4 px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;