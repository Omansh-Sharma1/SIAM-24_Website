import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
          <div className="relative w-full h-96">
            <img src="SIAM_img.jpg" alt="About SIAM" className="w-full h-full object-cover" />
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
  
  <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-6">SIAM</h2>
  <p className="text-white text-justify font-playfair font-light text-lg leading-relaxed tracking-wide">
    The Society for Industrial and Applied Mathematics (SIAM) is a global community of over 14,000 members and nearly 500 institutional members, promoting applied mathematics and computational sciences for practical use in industry and research. Renowned institutions like MIT, Harvard, and Stanford host SIAM student chapters, where members engage in innovative projects and research collaborations, enhancing their skills and contributing to the global mathematics community.
    <br />
    <a href="https://www.siam.org/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:underline">
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
          <div className="relative w-full h-[30rem]">
            <img src="SIAM_JUIT_img.jpg" alt="SIAM-JUIT" className="w-full h-full object-cover" />
          </div>
        </motion.div>
  
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -200 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-3/4 h-px bg-gradient-to-l from-green-200 to-green-400 mb-8"></div>
          <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-6">SIAM-JUIT</h2>
          <p className="text-white text-justify font-playfair font-light text-lg leading-relaxed tracking-wide">
            SIAM-JUIT, the sixth student chapter in India, follows the legacy of IISc Bangalore, DTU Delhi, and IIT Guwahati. It provides students with a platform to bridge academic knowledge and real-world applications, fostering interdisciplinary learning, research, and industry exposure. The chapter organizes workshops, seminars, and competitions to cultivate skills and awareness in applied mathematics, preparing students for successful careers in diverse fields.
          </p>
        </motion.div>
      </section>
        
        <section className="space-y-12">
          <div className="relative flex-1 mt-8 ml-8">
            <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="h-16"></div>

            <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
            <h2 className="text-5xl font-['Exo_2']  text-green-200 mb-8">Why Join SIAM?</h2>
          </div>
          <div className="flex justify-between">
            {/* Left YouTube Preview */}
            <motion.a
              href="https://youtu.be/ydE_ilhvjmM?si=UvJCMLHW5qtLiYPE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-sm h-64 bg-black rounded-xl shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="img1_prev.png"
                alt="WATCH THE OFFICIAL VIDEO BY SIAM"
                className="w-full h-full object-fill"
                loading='lazy'
              />
            </motion.a>

            {/* Why Join Text */}
            <div className="flex-1 px-6">
              <ul className="font-['Exo_2']  font-light text-medium leading-relaxed tracking-wide list-disc list-inside text-gray-400 text-center">
                {[
                  "Access to cutting-edge research opportunities...",
                  "Opportunities for professional growth and networking...",
                  "Engagement in workshops and seminars...",
                ].map((point, index) => (
                  <li key={index} className="mb-4">
                    <button
                      onClick={() => toggleExpansion(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span>{point}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transform transition-transform duration-300 ${
                          expanded === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden text-justify"
                      >
                        <p className="font-playfair text-white text-300 mt-2 text-medium font-Exo 2">
                          {index === 0 && (
                            <>
                              Joining SIAM gives you access to an extensive library of cutting-edge research in applied mathematics and computational science. Members can explore groundbreaking studies, collaborate with experts, and contribute to advancements in diverse fields such as artificial intelligence, data science, and renewable energy. Stay ahead of the curve by immersing yourself in the latest innovations.
                            </>
                          )}
                          {index === 1 && (
                            <>
                              SIAM provides a global platform for professional networking, connecting you with top academicians, industry leaders, and like-minded peers. Whether attending exclusive conferences or engaging with seasoned professionals through mentorship programs, you'll expand your horizons and build a robust network to support your career goals.
                            </>
                          )}
                          {index === 2 && (
                            <>
                              By participating in workshops and seminars organized by SIAM, you gain hands-on experience and deep insights into complex topics. These events often feature renowned speakers and experts, offering practical knowledge that bridges the gap between academia and real-world applications.
                            </>
                          )}
                          
                        </p>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-6">
                <p className="text-lg text-green-100 font-['Exo_2'] font-bold">
                  ... and much more!
                </p>
              </div>
            </div>

            {/* Right YouTube Preview */}
            <motion.a
              href="https://www.youtube.com/@siamjuit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-sm h-64 bg-black rounded-xl shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="img2_prev.png"
                alt="VISIT SIAM@JUIT ON YOUTUBE"
                className="w-full h-full object-fill"
                loading='lazy'
              />
            </motion.a>
          </div>
        </section>

        <div className="h-16"></div>
        {/* Events Section */}
<section className="space-y-12 mt-16">
  
  <div className="relative flex-1 mt-8 ml-8">
    <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
    <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
    <div className="h-24"></div>
    <h2 className="text-6xl font-['Exo_2']  text-green-200 mb-8">Events</h2>
  </div>
  <div className="font-Exo 2 text-green-200 relative border-l-4">
    {[ 
      {
        title: "Workshop on Data Science",
        date: "Dec 10, 2023",
        description: "An in-depth workshop on data science techniques and tools.",
        img: "workshop_image.jpg",
      },
      {
        title: "Annual SIAM Conference",
        date: "Jan 15, 2024",
        description: "Network with professionals and attend sessions on applied mathematics.",
        img: "conference_image.jpg",
      },
      {
        title: "AI and Machine Learning Symposium",
        date: "Feb 20, 2024",
        description: "Explore the latest trends and research in AI and ML.",
        img: "symposium_image.jpg",
      },
    ].map((event, index) => (
      <motion.div
        key={index}
        className="flex items-center mb-12 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        {/* Left Image */}
        <div className="w-1/2 pr-6">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="ml-8 bg-black p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-2xl font-semibold text-green-200">{event.title}</h3>
          <p className="text-sm text-gray-300 italic mb-4">{event.date}</p>
          <p className="text-gray-400 leading-relaxed">{event.description}</p>
        </div>

        {/* Connecting Line */}
        {index < 2 && (
          <motion.div
            className="absolute left-[25%] top-full h-16 w-0.5 bg-green-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
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


