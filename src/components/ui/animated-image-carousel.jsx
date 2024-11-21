import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedImageCarousel = ({ 
  images, 
  transitionDuration = 1.5,
  intervalDuration = 5
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Automatically change images at the specified interval
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, intervalDuration * 1000);

    return () => clearInterval(interval);
  }, [images, intervalDuration]);

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 1
    }),
    center: {
      zIndex: 2,
      x: "0%",
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 1,
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  return (
    <motion.div
      className="relative w-full h-96 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`carousel-image-${currentImage}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            },
            opacity: { 
              duration: transitionDuration 
            }
          }}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
      </AnimatePresence>
    </motion.div>
  );
};