import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const OurClients = () => {
  const clientLogos = [
    { name: "Client 1" },
    { name: "Client 2" },
    { name: "Client 3" },
    { name: "Client 4" },
    { name: "Client 5" },
    { name: "Client 6" },
    { name: "Client 7" },
    { name: "Client 8" },
  ];

  // Duplicate ONCE (correct)
  const logos = [...clientLogos, ...clientLogos];

  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="py-20 w-full bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies around the world
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="
              flex py-4 w-max gap-12 sm:gap-16 lg:gap-20
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
            animate={{ x: [0, -width] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28
                           grayscale hover:grayscale-0 opacity-60 hover:opacity-100
                           transition-all duration-300"
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500 text-xs font-medium">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20">
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "100+", label: "Projects Done" },
            { value: "15+", label: "Team Members" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
