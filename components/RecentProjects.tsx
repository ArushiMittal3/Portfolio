'use client'

import { FaLocationArrow } from 'react-icons/fa6'
import { ExpandableProjectCards } from './ui/ExpandableCard'
import { motion } from 'framer-motion'

const RecentProjects = () => {
  return (
    <div className='py-20 relative' id='projects'>
      {/* Background elements */}

      <div className='relative z-10'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4'
        >
          A small selection of{' '}
          <span className='text-gray-800'>recent projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-center text-gray-700 max-w-2xl mx-auto mb-12'
        >
          Here are some of my most recent works. Each project represents unique
          challenges and creative solutions.
        </motion.p>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-18 mt-10'>
          <ExpandableProjectCards limit={3} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16 '
        >
          <a
            href='/projects' // Update this to your actual projects page
            className='inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-800 bg-[#D1F2EB] hover:bg-[#b8e0d9] transition-colors rounded-full border-2 border-gray-700 shadow-lg hover:shadow-xl'
          >
            See All Projects
            <FaLocationArrow className='ml-2' />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default RecentProjects
