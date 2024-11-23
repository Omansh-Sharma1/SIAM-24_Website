"use client";
import React, { useEffect, useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import {FocusCards} from "../ui/focus-cards";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AnimatedImageCarousel } from "../ui/animated-image-carousel";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Home() {
  const synonyms = [
    "Creativity",
    "Vision",
    "Progress",
    "Innovation",
    "Imagination",
    "Exploration",
  ];

  const cardControls = useAnimation();
  const titleControls = useAnimation();
  const missionControls = useAnimation();
  const infiniteTestimonials = [
    {
      name: "Stanford University",
      title: "Research Partner",
      quote:
        "Stanford University has been at the forefront of pioneering research in applied sciences, consistently pushing the boundaries of knowledge. Their work has the potential to transform the way we live and interact with the world around us, making significant advancements in various fields.",
    },
    {
      name: "University of Oxford",
      title: "Strategic Partner",
      quote:
        "The University of Oxford is committed to collaborating on transformative education initiatives. These initiatives aim to foster critical thinking, creativity, and innovation by providing students with the tools and knowledge necessary to address complex global challenges and drive positive change.",
    },
    {
      name: "Google Research",
      title: "Industry Collaborator",
      quote:
        "Google Research is leading the charge in driving innovation through data science and machine learning. By empowering individuals and organizations with cutting-edge technology, they enable their partners to make a positive impact and transform industries through informed decision-making.",
    },
    {
      name: "Caltech",
      title: "Academic Partner",
      quote:
        "Caltech is advancing interdisciplinary research in engineering, continuously pushing the boundaries of what is possible. Their work inspires future generations of scientists and engineers, fostering an environment of discovery and innovation that shapes the scientific landscape.",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      titleControls.start({ opacity: 1, y: 0 });
      cardControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, titleControls, cardControls]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop - (window.innerHeight - ref.current.offsetHeight) / 2;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  
  const firstSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const titleRef = useRef(null);
  
  const testimonialsControls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const aboutContent = aboutRef.current;
      const missionContent = missionRef.current;
      const testimonialsContent = testimonialsRef.current;
      const titleElement = titleRef.current;
  
      if (titleElement && aboutContent) {
        const titleRect = titleElement.getBoundingClientRect();
        const isInViewport = titleRect.top < window.innerHeight * 0.8;
        
        if (isInViewport) {
          titleControls.start({ opacity: 1, y: 0 });
        } else {
          titleControls.start({ opacity: 0, y: 30 });
        }
      }
  
      if (aboutContent) {
        const rect = aboutContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          cardControls.start({ opacity: 1, x: 0 });
        }
      }
  
      if (missionContent) {
        const rect = missionContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          missionControls.start({ opacity: 1, y: 0 });
        }
      }
  
      if (testimonialsContent) {
        const rect = testimonialsContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          testimonialsControls.start({ opacity: 1, y: 0 });
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardControls, missionControls, titleControls, testimonialsControls]);
  
  const handleScrollDown = (ref) => {
    scrollToSection(ref);
  };

  const focusCardsData = [
    {
      src: "Question_mark.jpg",
      title: "Who are we?",
      link: "/about", // Matches About.jsx
    },
    {
      src: "Contactus.jpg",
      title: "Get in Touch",
      link: "/contact", // Matches Contact.jsx
    },
    {
      src: "MeetOurTeam.jpg",
      title: "Meet Our Team",
      link: "/team", // Matches Team.jsx
    },
  ];
  
  

  const cardItems = [
    {
      title: "Applied Mathematics",
      description: "Advancing mathematical theories and applications to solve real-world problems across various domains.",
      link: "/applied-mathematics"
    },
    {
      title: "Data Science",
      description: "Leveraging data-driven approaches to uncover insights and drive innovation in research and industry.",
      link: "/data-science"
    },
    {
      title: "Computational Science",
      description: "Developing advanced computational methods and algorithms to tackle complex scientific challenges.",
      link: "/computational-science"
    },
    {
      title: "Research Collaboration",
      description: "Fostering partnerships between academia and industry to accelerate scientific discoveries.",
      link: "/collaboration"
    },
    {
      title: "Education Innovation",
      description: "Transforming mathematical education through modern pedagogical approaches and technology.",
      link: "/education"
    },
    {
      title: "Community Engagement",
      description: "Building a vibrant community of researchers, educators, and practitioners in mathematical sciences.",
      link: "/community"
    }
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Main Content - Improved Responsiveness */}
      <motion.div 
        ref={firstSectionRef} 
        className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-8 bg-black text-white p-4 sm:p-8 lg:p-16"
      >
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-5xl font-['Exo_2'] font-semibold mb-4 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Inspiring{" "}
            <FlipWords 
              words={synonyms} 
              duration={3000} 
              className={"text-green-200 font-bold inline"} 
            />
            <br className="hidden sm:block" />
            <span className="block sm:inline">Through research</span>
          </motion.h1>
          <p className="hidden text-sm sm:text-base lg:text-lg text-white font-roboto text-center lg:text-justify mb-12 lg:mb-16 leading-relaxed px-4 lg:px-0">
            Applied mathematics, computational and data science are essential to moving society forward and solving many of the world's most pressing questions and problems. SIAM plays a central role in bringing mathematical and computational scientists together, providing a platform and community for this important work.
          </p>
          <motion.button
            className="relative text-white border-2 border-white py-2 px-6 sm:px-8 rounded-full text-base sm:text-lg font-Exo 2 font-semibold overflow-hidden transition-all duration-1100 ease-in-out hover:text-white focus:outline-none group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ marginTop: "1rem", backgroundColor: "transparent" }}
            onClick={() => handleScrollDown(aboutRef)}
          >
            <span className="relative z-10">Explore</span>
            <span className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 transform -translate-x-full translate-y-full transition-transform duration-1100 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
          </motion.button>
        </div>

        {/* Carousel/Image Section - Responsive Adjustment */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end space-x-12 lg:space-x-16 items-center sm-shrink-0">
  <div className="flex-grow"></div> {/* Spacer */}
  <AnimatedImageCarousel
    images={[
      "ISIAM.jpg",
      "ISIAM2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
    ]}
    transitionDuration={1.5}
    className="max-w-full sm:max-w-md lg:max-w-full"
  />
</div>
      </motion.div>
      
      {/* About Section - Improved Mobile Responsiveness */}
      <div 
 ref={aboutRef}
 className="min-h-screen bg-black text-white text-center py-8 md:py-12 px-4 md:px-8 relative"
>
 <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
 <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>

        <motion.h2
          ref={titleRef}
          className="text-xl md:text-2xl lg:text-4xl text-green-200 font-['Exo_2'] font-bold mb-4 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[120%] md:text-[140%] lg:text-[160%]">Explore</span>
        </motion.h2>
        <div className="mt-8 sm:mt-12">
          <FocusCards cards={focusCardsData} />
        </div>
      </div>

      {/* Mission Section - Mobile Responsiveness */}
           <div 
        ref={missionRef}
        className="min-h-screen bg-black text-white text-center py-8 md:py-12 px-4 md:px-8 relative"
      >
        <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl text-green-200 font-['Exo_2'] font-bold mb-4 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[120%] md:text-[140%] lg:text-[160%]">Our Mission</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={cardControls}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        >
          <HoverEffect 
            items={cardItems} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8" 
          />
        </motion.div>
      </div>

      {/* Testimonials Section - Mobile Responsiveness */}
      <div
  ref={testimonialsRef}
  className="min-h-screen bg-black text-white text-center py-12 px-4 md:px-8 lg:px-16 relative"
>
  {/* Stylish Green Divs */}
  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500"></div>
  <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500"></div>

  {/* Responsive Title */}
  <motion.h2
    className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-green-200 font-['Exo_2'] font-bold mb-6 sm:mb-8 md:mb-10"
    initial={{ opacity: 0, y: 30 }}
    animate={titleControls}
    transition={{ duration: 0.5 }}
  >
    <span className="text-[120%] sm:text-[130%] md:text-[140%] lg:text-[160%]">
      Collaborations
    </span>
  </motion.h2>

  {/* Responsive Testimonials Section */}
  <div className="mt-8 md:mt-10 lg:mt-12">
    <AnimatedTestimonials
      testimonials={[
        {
          src: "/images/university1.jpg",
          name: "University of California",
          designation: "Research Collaborator",
          quote: "A partnership focused on advancing mathematical sciences.",
        },
        {
          src: "/images/mit.jpg",
          name: "MIT",
          designation: "Research Partner",
          quote: "Innovating solutions for industrial applications.",
        },
        {
          src: "/images/harvard.jpg",
          name: "Harvard University",
          designation: "Strategic Partner",
          quote: "Leading research in applied mathematics for industry.",
        },
      ]}
    />
  </div>


        {/* Infinite Moving Cards Section - Mobile Responsiveness */}
        <div className="relative">
        <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent to-green-500 z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent to-green-500 z-10"></div>
       
        </div>
        <div className="mt-12 sm:mt-16">
          <motion.h2
            className="text-xl md:text-2xl lg:text-4xl text-green-200 font-['Exo_2'] font-bold mb-4 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[120%] md:text-[140%] lg:text-[160%]">Testimonials</span>
          </motion.h2>
          <InfiniteMovingCards 
            items={infiniteTestimonials} 
            direction="left" 
            speed="normal" 
            pauseOnHover={true} 
            className="w-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}