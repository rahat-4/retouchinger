import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "228c4d37-2221-467a-aa6b-f92202260a52");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo text-blue-600 dark:text-blue-400"
      >
        Connect With Us
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold font-ovo"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-gray-300"
      >
        We'd love to hear from you! Whether you have a question, want to work
        together, or just want to say hi, feel free to reach out to us.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-ovo">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              required
              className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors font-ovo"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-ovo">
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              required
              className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors font-ovo"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-ovo">
            Your Message
          </label>
          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            name="message"
            required
            className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors font-ovo resize-none"
          ></textarea>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 rounded-full py-4 px-10 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 font-ovo"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="Send" className="w-4" />
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 text-center font-medium font-ovo ${
              result.includes("Success")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
      >
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2 font-ovo">
            Email
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 font-ovo">
            info@retouchinger.com
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2 font-ovo">
            Phone
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 font-ovo">
            +1 (555) 123-4567
          </p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-white"
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
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2 font-ovo">
            Locations
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 font-ovo">
            USA & Bangladesh
          </p>
        </div>
      </motion.div>

      {/* Office Locations with Maps - Combined Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="mt-20"
      >
        <h3 className="text-center text-3xl sm:text-4xl font-bold font-ovo mb-4">
          Visit Our Offices
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 font-ovo mb-12 max-w-2xl mx-auto">
          We have offices in two locations to serve you better. Drop by or reach
          out to discuss your project.
        </p>

        <div className="space-y-10 max-w-6xl mx-auto">
          {/* USA Office Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Address Card */}
            <div className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                </div>
                <div>
                  <span className="text-2xl mb-2 block">🇺🇸</span>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white font-ovo">
                    USA Office
                  </h4>
                </div>
              </div>
              <address className="not-italic text-gray-700 dark:text-gray-300 font-ovo leading-relaxed mb-6">
                <p className="font-semibold mb-2">Los Angeles, California</p>
                <p>204 S Juanita Ave</p>
                <p>Los Angeles, 3-104</p>
                <p>CA 90004, United States</p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=204+S+Juanita+Ave,+Los+Angeles,+CA+90004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-medium font-ovo transition-all shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.945978!2d-118.31234!3d34.07701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0c19e3a8e07%3A0x1234567890abcdef!2s204%20S%20Juanita%20Ave%2C%20Los%20Angeles%2C%20CA%2090004!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="USA Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Bangladesh Office Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Map */}
            <div className="lg:col-span-3 h-96 lg:h-auto order-2 lg:order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.367893012345!2d90.42!3d23.7465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b0123456789%3A0xabcdef1234567890!2sBasabo%2C%20Dhaka%201214!5e0!3m2!1sen!2sbd!4v1621234567890!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bangladesh Office Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Address Card */}
            <div className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                </div>
                <div>
                  <span className="text-2xl mb-2 block">🇧🇩</span>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white font-ovo">
                    Bangladesh Office
                  </h4>
                </div>
              </div>
              <address className="not-italic text-gray-700 dark:text-gray-300 font-ovo leading-relaxed mb-6">
                <p className="font-semibold mb-2">Dhaka, Bangladesh</p>
                <p>House: 17, Road: 3/2, Block: D</p>
                <p>Haq Residential Society</p>
                <p>Basabo, Dhaka-1214</p>
                <p>Bangladesh</p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=House+17,+Road+3/2,+Block+D,+Haq+Residential+Society,+Basabo,+Dhaka+1214"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-medium font-ovo transition-all shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
