import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "framer-motion";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo text-blue-600 dark:text-blue-400"
      >
        What We Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo"
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-gray-300"
      >
        We offer custom web development solutions to help businesses grow with
        technology. From full-stack development to API integration and database
        optimization, we build scalable and efficient applications tailored to
        your needs.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl px-8 py-12 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-900 duration-500 cursor-pointer group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Image src={icon} alt={title} className="w-8" />
            </div>
            <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white font-ovo">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-gray-300 font-ovo">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-6 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
            >
              Read more
              <Image
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                alt="Arrow"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
