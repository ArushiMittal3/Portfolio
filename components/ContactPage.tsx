"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactPage() {
  return (
    <div id="contact">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="min-h-screen hover:shadow-2xl border border-white/50 rounded-4xl "
      style={{
        background: 'linear-gradient(90deg, rgba(209, 242, 235, 1) 3%, rgba(151, 196, 188, 1) 87%, rgba(92, 184, 162, 1) 100%)'
      }}
      whileHover={{ y: -5 }}
    >
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Let's <span className="text-button">Connect</span>
            </motion.h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg ">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you!
            </p>
          </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="bg-white/50 rounded-xl p-5 shadow-sm hover:shadow-md border border-white/70 flex flex-col gap-3 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 md:p-8">
                <form
                  action="https://formsubmit.co/arushimittal2432@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[ 
                      { id: "name", label: "Your Name", placeholder: "Write your name here", type: "text" },
                      { id: "email", label: "Email Address", placeholder: "Write your email here", type: "email" }
                    ].map((field) => (
                      <motion.div key={field.id} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label htmlFor={field.id} className="block text-gray-700 mb-1 font-medium text-sm">{field.label}</label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent bg-white/70 text-gray-700 transition-all"
                          placeholder={field.placeholder}
                          required
                        />
                      </motion.div>
                    ))}
                  </div>

                  {[ 
                    { id: "subject", label: "Subject", placeholder: "Subject heading", type: "text" },
                    { id: "message", label: "Your Message", placeholder: "Please write your message here", type: "textarea" }
                  ].map((field) => (
                    <motion.div key={field.id} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                      <label htmlFor={field.id} className="block text-gray-700 mb-1 font-medium text-sm">{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.id}
                          rows={4}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent bg-white/70 text-gray-700 transition-all"
                          placeholder={field.placeholder}
                          required
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent bg-white/70 text-gray-700 transition-all"
                          placeholder={field.placeholder}
                          required
                        />
                      )}
                    </motion.div>
                  ))}

                  <div className="pt-3">
                    <motion.button
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                        backgroundColor: "#285E61",
                        boxShadow: "0 10px 20px -5px rgba(44, 122, 123, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="bg-button text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all shadow-md text-sm"
                    >
                      Send Email <FaPaperPlane className="text-lg" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {[
                {
                  icon: <FaEnvelope className="text-xl" />,
                  title: "Personal Email",
                  content: "arushimittal2432@gmail.com",
                  href: "mailto:arushimittal2432@gmail.com"
                },
                {
                  icon: <FaEnvelope className="text-xl" />,
                  title: "College Email",
                  content: "523410031@nitkkr.ac.in",
                  href: "mailto:523410031@nitkkr.ac.in"
                },
                {
                  icon: <FaLinkedin className="text-xl" />,
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/in/arushi-mittal-1950a3211/"
                },
                {
                  icon: <FaGithub className="text-xl" />,
                  title: "GitHub",
                  href: "https://github.com/ArushiMittal3"
                },
                {
                  icon: <SiLeetcode  className="text-xl" />,
                  title: "Leetcode",
                  href: "https://leetcode.com/u/ArushiMittal03/"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <div className="p-5 rounded-lg bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm hover:shadow-md transition-all h-full flex flex-col items-center">
                    <div className="bg-[#E6FFFA] p-3 rounded-full mb-3 group-hover:bg-[#B2F5EA] transition-colors">
                      <div className="text-[#2C7A7B]">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1 text-gray-800 text-sm">{item.title}</h3>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors text-center text-sm">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}