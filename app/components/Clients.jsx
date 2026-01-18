import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurClients = () => {
  const clientLogos = [
    { logo: "/clients/img_one.png", name: "Client One", website: "#" },
    { logo: "/clients/img_two.png", name: "Client Two", website: "#" },
    { logo: "/clients/img_three.png", name: "Client Three", website: "#" },
    { logo: "/clients/img_four.png", name: "Client Four", website: "#" },
    { logo: "/clients/img_five.png", name: "Client Five", website: "#" },
    { logo: "/clients/img_six.png", name: "Client Six", website: "#" },
    { logo: "/clients/img_seven.png", name: "Client Seven", website: "#" },
    { logo: "/clients/img_eight.png", name: "Client Eight", website: "#" },
    { logo: "/clients/img_nine.png", name: "Client Nine", website: "#" },
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
                           opacity-100
                           transition-all duration-300"
              >
                <div
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-2"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={192}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20">
          {[
            { value: "76+", label: "Happy Clients" },
            { value: "178+", label: "Projects Done" },
            { value: "17+", label: "Team Members" },
            { value: "6+", label: "Years Experience" },
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
