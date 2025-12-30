import React from "react";
import Image from "next/image";
import { toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

const Technologies = ({ isDarkMode }) => {
  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...toolsData, ...toolsData, ...toolsData];

  return (
    <div className="py-20 w-full overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="text-lg font-ovo text-blue-600 dark:text-blue-400 mb-2">
            Our Tech Stack
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo mb-4">
            Technologies{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              We Use
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powering innovation with cutting-edge tools and technologies
          </p>
        </motion.div>

        {/* Scrolling Tools Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

          {/* Scrolling Animation */}
          <motion.div
            className="flex gap-8 sm:gap-12 lg:gap-16"
            animate={{
              x: [0, -1920], // Adjust based on your content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform duration-300"
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20">
                  <Image
                    src={tool}
                    alt="Technology"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium font-ovo">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium font-ovo">
              Modern Stack
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium font-ovo">
              Support
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium font-ovo">
              Uptime
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
