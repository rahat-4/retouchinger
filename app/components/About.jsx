import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  // Co-founders data - Update with actual information
  const coFounders = [
    {
      name: "Mainul Islam Rahat",
      role: "Co-Founder & CEO",
      image: assets.image_one, // Replace with actual image
      bio: "Full-stack developer with 5+ years of experience in building scalable web applications and leading development teams.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Co-Founder Name",
      role: "Co-Founder & CTO",
      image: assets.profile_img, // Replace with actual image
      bio: "Technology leader passionate about creating innovative solutions and driving technical excellence.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo text-blue-600 dark:text-blue-400"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo mb-16"
      >
        About Us
      </motion.h2>

      {/* Company Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-ovo text-center">
            Retouchinger is a software company focused on building web applications,
            mobile apps, and custom enterprise software. We also design and
            implement AI agents & chatbots, automation tools and workflows, and
            provide professional photo editing services. With experience across
            multiple industries, we deliver production-ready solutions that are
            secure, scalable, and tailored to business needs.
          </p>
        </div>
      </motion.div>

      {/* Co-Founders Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-ovo">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Co-Founders
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {coFounders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                />
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 font-ovo">
                  {founder.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 font-ovo">
                  {founder.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-ovo">
                  {founder.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={founder.linkedin}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={founder.twitter}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href={founder.github}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
