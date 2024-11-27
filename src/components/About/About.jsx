import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [hovered, setHovered] = useState(null);
  const [inView1, setInView1] = useState(true);
  const [inView2, setInView2] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const card1 = document.getElementById("card1");
      const card2 = document.getElementById("card2");

      const rect1 = card1.getBoundingClientRect();
      const rect2 = card2.getBoundingClientRect();

      // Trigger animation for the first card when it enters the viewport
      if (rect1.top < window.innerHeight && !inView1) {
        setInView1(true);
      }

      // Trigger animation for the second card only when it's in view
      if (rect2.top < window.innerHeight && !inView2) {
        setInView2(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView1, inView2]);

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Animated "About Us" Heading */}
      <motion.h1
        className="absolute top-24 text-7xl font- tracking-wide font-['Exo_2']  font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100 text-center flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Us
      </motion.h1>

      {/* Spacing div to align the content below the heading */}
      <div className="h-24"></div>
      <div id="about-content" className="relative px-8 py-20 space-y-16">
        {/* About SIAM Card */}
        <section className="flex flex-col lg:flex-row justify-between mt-16 gap-8">
          <motion.div
            id="card1"
            className="flex-1 bg-black rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 200 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <img
                src="SIAM_img.jpg"
                alt="About SIAM"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 200 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Stylish Line */}
            <div className="relative w-3/4 h-px bg-gradient-to-r from-green-200 to-green-400 mb-8 ml-auto"></div>

            <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-6">
              SIAM
            </h2>
            <p className="text-white text-justify font-playfair font-light text-lg leading-relaxed tracking-wide">
              The Society for Industrial and Applied Mathematics (SIAM) is a
              global community of over 14,000 members and nearly 500
              institutional members, promoting applied mathematics and
              computational sciences for practical use in industry and research.
              Renowned institutions like MIT, Harvard, and Stanford host SIAM
              student chapters, where members engage in innovative projects and
              research collaborations, enhancing their skills and contributing
              to the global mathematics community.
              <br />
              <a
                href="https://www.siam.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline"
              >
                Explore SIAM
              </a>
            </p>
          </motion.div>
        </section>

        {/* SIAM-JUIT Card */}
        <section className="flex flex-col lg:flex-row-reverse justify-between mt-16 gap-8">
          <motion.div
            id="card2"
            className="flex-1 bg-black rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -200 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[30rem] overflow-hidden rounded-lg">
              <img
                src="SIAM_JUIT_img.jpg"
                alt="SIAM-JUIT"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -200 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-3/4 h-px bg-gradient-to-l from-green-200 to-green-400 mb-8"></div>
            <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-6">
              SIAM-JUIT
            </h2>
            <p className="text-white text-justify font-playfair font-light text-lg leading-relaxed tracking-wide">
              SIAM-JUIT, the sixth student chapter in India, follows the legacy
              of IISc Bangalore, DTU Delhi, and IIT Guwahati. It provides
              students with a platform to bridge academic knowledge and
              real-world applications, fostering interdisciplinary learning,
              research, and industry exposure. The chapter organizes workshops,
              seminars, and competitions to cultivate skills and awareness in
              applied mathematics, preparing students for successful careers in
              diverse fields.
            </p>
          </motion.div>
        </section>

        <section className="space-y-12">
          <div className="relative flex-1 mt-8 ml-8">
            <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="h-16"></div>

            <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
            <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-8">
              Why Join SIAM?
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 px-4 md:px-0">
            {/* Left YouTube Preview */}
            <motion.a
              href="https://youtu.be/ydE_ilhvjmM?si=UvJCMLHW5qtLiYPE"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-1/2 lg:max-w-sm rounded-xl shadow-lg overflow-hidden bg-black aspect-video md:aspect-auto md:h-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="img1_prev.png"
                alt="WATCH THE OFFICIAL VIDEO BY SIAM"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.a>
            {/* Why Join Text */}
            <div className="flex-1 px-4 md:px-6 py-4 md:py-6">
              <ul className="font-['Exo_2'] font-light text-sm md:text-base lg:text-lg leading-relaxed tracking-wide list-disc list-inside text-gray-400 text-center">
                {[
                  "Access to cutting-edge research opportunities...",
                  "Opportunities for professional growth and networking...",
                  "Engagement in workshops and seminars...",
                ].map((point, index) => (
                  <li key={index} className="mb-3 md:mb-4">
                    <button
                      onClick={() => toggleExpansion(index)}
                      className="flex items-center justify-between w-full text-left hover:text-green-400 transition-colors duration-300"
                    >
                      <span className="pr-2">{point}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 transform transition-transform duration-300 ${
                          expanded === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <p className="font-playfair text-white text-sm md:text-base lg:text-lg mt-2 md:mt-3 px-2 md:px-4 text-justify">
                          {index === 0 && (
                            <>
                              Joining SIAM gives you access to an extensive
                              library of cutting-edge research in applied
                              mathematics and computational science. Members can
                              explore groundbreaking studies, collaborate with
                              experts, and contribute to advancements in diverse
                              fields such as artificial intelligence, data
                              science, and renewable energy. Stay ahead of the
                              curve by immersing yourself in the latest
                              innovations.
                            </>
                          )}
                          {index === 1 && (
                            <>
                              SIAM provides a global platform for professional
                              networking, connecting you with top academicians,
                              industry leaders, and like-minded peers. Whether
                              attending exclusive conferences or engaging with
                              seasoned professionals through mentorship
                              programs, you'll expand your horizons and build a
                              robust network to support your career goals.
                            </>
                          )}
                          {index === 2 && (
                            <>
                              By participating in workshops and seminars
                              organized by SIAM, you gain hands-on experience
                              and deep insights into complex topics. These
                              events often feature renowned speakers and
                              experts, offering practical knowledge that bridges
                              the gap between academia and real-world
                              applications.
                            </>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4 md:mt-6">
                <p className="text-base md:text-lg lg:text-xl text-green-100 font-['Exo_2'] font-bold">
                  ... and much more!
                </p>
              </div>
            </div>

            {/* Right YouTube Preview */}
            <motion.a
              href="https://www.youtube.com/@siamjuit"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-1/2 lg:max-w-sm rounded-xl shadow-lg overflow-hidden bg-black aspect-video md:aspect-auto md:h-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="img2_prev.png"
                alt="VISIT SIAM@JUIT ON YOUTUBE"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay with YouTube Icon */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
            </motion.a>
          </div>
        </section>

        <div className="h-16"></div>
        {/* Events Section */}
<section className="space-y-8 md:space-y-12 mt-8 md:mt-16 px-4 md:px-8">
  {/* Header */}
  <div className="relative flex-1 mt-4 md:mt-8 ml-4 md:ml-8">
    <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
    <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
    <div className="h-16 md:h-24"></div>
    <h2 className="text-3xl md:text-4xl lg:text-6xl font-['Exo_2'] text-green-200 mb-4 md:mb-8">
      Events
    </h2>
  </div>

  {/* Events Timeline */}
  <div className="font-['Exo_2'] text-green-200 relative border-l-4 border-green-500">
    {[
     {
      title: "Project Euler",
      date: "Mar 5, 2024",
      description:
        "Challenge your mathematical and programming skills with complex computational problems.",
      img: "project_euler.jpg", // Replace with your actual image path or URL
    },
    {
      title: "Auctionomics",
      date: "Mar 15, 2024",
      description:
        "Learn and participate in auctions with real-world economic scenarios.",
      img: "auctionomics.jpg", // Replace with your actual image path or URL
    },
    {
      title: "Distinguished Speaker Seminar Series",
      date: "Mar 25, 2024",
      description:
        "Engage with experts discussing cutting-edge research and innovation.",
      img: "speaker_seminar.jpg", // Replace with your actual image path or URL
    },
    {
      title: "Mathemagical Hacks",
      date: "Apr 5, 2024",
      description:
        "Combine your mathematical brilliance and coding prowess in this hackathon.",
      img: "mathemagical_hacks.jpg", // Replace with your actual image path or URL
    },
    ].map((event, index) => (
      <motion.div
        key={index}
        className="flex flex-col md:flex-row items-center mb-8 md:mb-12 relative pl-4 md:pl-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-6">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 md:ml-8 bg-black p-4 md:p-6 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-green-200 mb-2">
            {event.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-300 italic mb-2 md:mb-4">
            {event.date}
          </p>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            {event.description}
          </p>
        </div>

                {/* Connecting Line */}
                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute right-0 top-full h-16 w-0.5 bg-gradient-to-b from-green-300 to-transparent"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3 + 0.5,
                      ease: "easeInOut" 
                    }}
                    style={{
                      left: 'calc(50% + 16px)'
                    }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
