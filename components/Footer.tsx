'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-[#D1F2EB] py-12 px-4 mt-20 w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-bold'>Arushi Mittal</h3>
            <p className='text-[#D1F2EB]/80'>
              Crafting digital experiences with purpose and precision.
            </p>
            <div className='flex gap-4'>
              <a
                href='https://github.com/ArushiMittal3'
                className='text-[#D1F2EB] hover:text-white transition-colors'
              >
                <FaGithub size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/arushi-mittal-1950a3211/'
                className='text-[#D1F2EB] hover:text-white transition-colors'
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#project'
                  className='hover:text-white transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a href='#about' className='hover:text-white transition-colors'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-white transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-semibold'>Get In Touch</h4>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='text-[#D1F2EB]' />
                <span>arushimittal2432@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='text-[#D1F2EB]' />
                <span>523410031@nitkkr.ac.in</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='border-t border-gray-700 mt-12 pt-8 text-center text-[#D1F2EB]/60'>
          <p>
            © {new Date().getFullYear()} Arushi Mittal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
