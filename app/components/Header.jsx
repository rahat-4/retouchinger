import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  // Changeable sentences for the left column
  const sentences = [
    "Web App Design & Development",
    "Custom Software Solutions",
    "AI Agents & Chatbots",
    "Automation Tools & Workflows",
    "Mobile App Development",
    "Photo Editing Services",
  ];

  // Carousel images for the right column
  const carouselImages = [
    assets.img_one,
    assets.img_two,
    assets.img_three,
    assets.img_four,
    assets.img_five,
  ];

  const [currentSentence, setCurrentSentence] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-change sentence every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Changeable Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
                Software Company
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl font-ovo"
              >
                Hi! We're Retouchinger&nbsp;
                <Image src={assets.hand_icon} alt="" className="w-6" />
              </motion.h3>
              <br />

              {/* Animated Changing Sentence */}
              <div className="h-20 sm:h-24 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentSentence}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-ovo bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                  >
                    {sentences[currentSentence]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <br />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-ovo max-w-xl mx-auto lg:mx-0"
              >
                We provide Web App Design & Development, Custom Software Solutions, AI Agents & Chatbots,
                Automation Tools & Workflows, Mobile App Development, and Photo Editing Services to
                help businesses launch and scale digital products.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Carousel Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

              {/* Carousel Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={carouselImages[currentImage]}
                      alt="Portfolio showcase"
                      className="rounded-3xl shadow-2xl object-cover w-full h-full"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 pb-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "bg-blue-500 w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) =>
                      (prev - 1 + carouselImages.length) % carouselImages.length
                  )
                }
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % carouselImages.length)
                }
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
