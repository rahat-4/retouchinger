import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

const Technologies = () => {
  const tools = [...toolsData, ...toolsData, ...toolsData]; // Triple for seamless loop
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 3); // Divide by 3 now
    }
  }, []);

  return (
    <div className="py-20 w-full bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="
              flex py-4 w-max gap-8 sm:gap-12 lg:gap-16
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
            animate={{ x: [0, -width] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                           hover:scale-110 transition-transform duration-300"
              >
                <div
                  className="relative w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg
                             flex items-center justify-center p-4 border-2
                             border-gray-100 dark:border-gray-700
                             hover:border-blue-500 dark:hover:border-blue-400
                             hover:shadow-xl hover:shadow-blue-500/20
                             dark:hover:shadow-blue-400/20 transition-all"
                >
                  <Image
                    src={tool}
                    alt="Technology"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "15+", label: "Technologies" },
            { value: "100%", label: "Modern Stack" },
            { value: "24/7", label: "Support" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium font-ovo">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
