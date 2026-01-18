import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo text-blue-600 dark:text-blue-400"
      >
        Our Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo"
      >
        Our Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-gray-300"
      >
        Explore a collection of projects across Mobile App Development, Web
        App Design & Development, Custom Software Solutions, AI agents &
        chatbots, automation tools, and photo editing work.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-6"
      >
        {workData.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square rounded-2xl cursor-pointer bg-contain bg-center bg-no-repeat relative group overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

            {/* Content Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2 duration-500 py-4 px-5 flex items-center justify-between group-hover:bottom-7 shadow-xl">
              <div className="flex-1">
                <h2 className="font-semibold text-lg text-gray-800 dark:text-white font-ovo">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-ovo">
                  {project.description}
                </p>
              </div>
              <div className="border-2 rounded-full border-blue-500 w-10 h-10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 transition-all shadow-md ml-3 flex-shrink-0">
                <Image
                  src={assets.send_icon}
                  alt="View project"
                  className="w-5 group-hover:invert"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent duration-500 font-ovo font-medium"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
