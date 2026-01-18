import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurClients = () => {
  const clientLogos = [
    { name: "Acme Labs", website: "https://acmelabs.example", logo: "/clients/acme.svg" },
    { name: "Nimbus Tech", website: "https://nimbustech.example", logo: "/clients/nimbus-tech.svg" },
    { name: "BluePeak", website: "https://bluepeak.example", logo: "/clients/bluepeak.svg" },
    { name: "Aurora Systems", website: "https://aurorasystems.example", logo: "/clients/aurora-systems.svg" },
    { name: "Greenfield Media", website: "https://greenfield.example", logo: "/clients/greenfield-media.svg" },
    { name: "Orbit AI", website: "https://orbitai.example", logo: "/clients/orbit-ai.svg" },
    { name: "Helix Solutions", website: "https://helix.example", logo: "/clients/helix-solutions.svg" },
    { name: "Pulse Studio", website: "https://pulsestudio.example", logo: "/clients/pulse-studio.svg" },
    { name: "Cedar Commerce", website: "https://cedarcommerce.example", logo: "/clients/cedar-commerce.svg" },
    { name: "Zenith Health", website: "https://zenithhealth.example", logo: "/clients/zenith-health.svg" },
    { name: "Lumen Analytics", website: "https://lumen.example", logo: "/clients/lumen-analytics.svg" },
    { name: "Echo Retail", website: "https://echoretail.example", logo: "/clients/echo-retail.svg" },
    { name: "Vertex Logistics", website: "https://vertexlogistics.example", logo: "/clients/vertex-logistics.svg" },
    { name: "Solace Finance", website: "https://solacefinance.example", logo: "/clients/solace-finance.svg" },
    { name: "Nimbus Energy", website: "https://nimbusenergy.example", logo: "/clients/nimbus-energy.svg" },
    { name: "Atlas Robotics", website: "https://atlasrobotics.example", logo: "/clients/atlas-robotics.svg" },
    { name: "Coral Creative", website: "https://coralcreative.example", logo: "/clients/coral-creative.svg" },
  ];

  // Duplicate ONCE (correct)
  const logos = [...clientLogos, ...clientLogos];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

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
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-2">
                      <span className="text-gray-700 dark:text-gray-100 font-bold text-sm sm:text-base">
                        {getInitials(client.name)}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">
                      {client.name}
                    </span>
                  </div>
                </a>
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
