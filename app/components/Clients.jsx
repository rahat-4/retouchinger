import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurClients = ({ isDarkMode }) => {
  // Replace these with your actual client logo paths
  const clientLogos = [
    { name: "Client 1", logo: "/images/clients/client1.png" },
    { name: "Client 2", logo: "/images/clients/client2.png" },
    { name: "Client 3", logo: "/images/clients/client3.png" },
    { name: "Client 4", logo: "/images/clients/client4.png" },
    { name: "Client 5", logo: "/images/clients/client5.png" },
    { name: "Client 6", logo: "/images/clients/client6.png" },
    { name: "Client 7", logo: "/images/clients/client7.png" },
    { name: "Client 8", logo: "/images/clients/client8.png" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="py-20 w-full overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies around the world
          </p>
        </motion.div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10"></div>

          {/* Scrolling Animation */}
          <motion.div
            className="flex gap-12 sm:gap-16 lg:gap-20"
            animate={{
              x: [0, -1920], // Adjust based on your content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {/* Placeholder - Replace with actual Image component */}
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500 text-xs font-medium">
                    {client.name}
                  </span>
                </div>

                {/* Uncomment when you have actual logos:
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-4"
                />
                */}
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Projects Done
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Team Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
