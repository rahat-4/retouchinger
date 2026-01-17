import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhatWeOffer = ({ isDarkMode }) => {
  const offerings = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Django. We create scalable, performant solutions tailored to your business needs.",
      image: "/whatweoffer/web.jpeg",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms with cutting-edge technologies.",
      image: "/whatweoffer/mobileapp.jpeg",
      features: ["iOS & Android", "Cross-Platform", "Native Performance"],
    },
    {
      title: "AI Solutions",
      description:
        "Intelligent automation and AI-powered solutions including chatbots, agents, and machine learning models to streamline your business processes.",
      image: "/whatweoffer/ai.jpeg",
      features: ["AI Agents", "Chatbots", "Machine Learning"],
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions and enterprise applications designed to solve complex business challenges with scalable, maintainable code.",
      image: "/whatweoffer/software.jpeg",
      features: ["Custom Solutions", "Enterprise Apps", "API Integration"],
    },
    {
      title: "Automation Services",
      description:
        "Streamline your workflows with intelligent automation tools and scripts that reduce manual work and increase efficiency across your organization.",
      image: "/whatweoffer/automation.jpeg",
      features: ["Workflow Automation", "Process Optimization", "Integration"],
    },
    {
      title: "Photo Editing",
      description:
        "Professional photo editing and retouching services for businesses and individuals, delivering high-quality results for all your image needs.",
      image: "/whatweoffer/photo-edit.jpeg",
      features: ["Retouching", "Color Correction", "Background Removal"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive software solutions to transform your business and
            bring your ideas to life
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="space-y-24">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="inline-block">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-ovo">
                  {offer.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {offer.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-3">
                  {offer.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
                >
                  Learn More →
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
