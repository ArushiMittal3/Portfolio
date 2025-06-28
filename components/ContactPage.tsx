"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7FAF9]"> {/* Softer background */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's <span className="text-[#2C7A7B]">Connect</span> {/* Darker teal for better contrast */}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#D1F2EB]" 
          >
            <div className="p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D1F2EB] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D1F2EB] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D1F2EB] focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D1F2EB] focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-[#2C7A7B] hover:bg-[#285E61] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors shadow-md"
                  >
                    Send Message <FaPaperPlane />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Additional Contact Info - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            <a href="mailto:hello@example.com" className="group">
              <div className="p-6 rounded-xl transition-all group-hover:bg-[#D1F2EB]/20">
                <div className="text-[#2C7A7B] text-2xl mb-3">
                  <FaEnvelope />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">hello@example.com</p>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl transition-all group-hover:bg-[#D1F2EB]/20">
                <div className="text-[#2C7A7B] text-2xl mb-3">
                  <FaLinkedin />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">LinkedIn</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">linkedin.com/in/yourprofile</p>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-6 rounded-xl transition-all group-hover:bg-[#D1F2EB]/20">
                <div className="text-[#2C7A7B] text-2xl mb-3">
                  <FaGithub />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">GitHub</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">github.com/yourusername</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}