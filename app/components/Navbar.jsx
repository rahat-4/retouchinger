import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed flex justify-between items-center px-5 lg:px-8 xl:px-[8%] z-50 transition-all duration-300 ${
          isScrolling
            ? "bg-white/80 backdrop-blur-lg shadow-lg dark:bg-gray-900/80 dark:shadow-white/10"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="h-20 w-auto lg:h-32 cursor-pointer"
            priority
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-8 lg:gap-10 rounded-full px-8 py-3.5 font-medium ${
            isScrolling
              ? ""
              : "bg-white/70 shadow-lg backdrop-blur-sm dark:bg-gray-800/70 dark:border dark:border-white/20"
          }`}
        >
          <li>
            <a
              href="#top"
              className="font-ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-ovo hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme toggle"
              className="h-6 w-6"
            />
          </button>

          <button
            onClick={openMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden flex flex-col gap-6 py-20 px-10 bg-white fixed top-0 bottom-0 -right-64 w-64 h-screen z-50 transition duration-500 shadow-2xl dark:bg-gray-900 dark:text-white"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5"
            />
          </div>
          <li>
            <a
              href="#top"
              className="font-ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-ovo text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
