import React from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="px-[8%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Retouchinger Logo"
              className="w-32 mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-ovo leading-relaxed">
              We build Web & Mobile applications, custom software, AI agents
              & chatbots, and automation tools — and provide professional photo
              editing services to help businesses scale and market effectively.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Image
                src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                alt="Email"
                className="w-5"
              />
              <span className="font-ovo">info@retouchinger.com</span>
            </div>
          </div>

          {/* USA Office Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-ovo text-gray-800 dark:text-white flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              USA Office
            </h4>
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400 font-ovo leading-relaxed">
              204 S Juanita Ave
              <br />
              Los Angeles, 3-104
              <br />
              CA 90004
              <br />
              United States
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=204+S+Juanita+Ave,+Los+Angeles,+CA+90004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium font-ovo transition-colors"
            >
              Get Directions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Bangladesh Office Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-ovo text-gray-800 dark:text-white flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Bangladesh Office
            </h4>
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400 font-ovo leading-relaxed">
              House: 17, Road: 3/2
              <br />
              Block: D, Haq Residential Society
              <br />
              Basabo, Dhaka-1214
              <br />
              Bangladesh
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=House+17,+Road+3/2,+Block+D,+Haq+Residential+Society,+Basabo,+Dhaka+1214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium font-ovo transition-colors"
            >
              Get Directions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-ovo text-gray-800 dark:text-white">
              Connect With Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/mainul-islam-rahat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-ovo transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shuvro.hasan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-ovo transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="px-[8%]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-ovo">
              © 2026 Retouchinger. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-ovo">
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
