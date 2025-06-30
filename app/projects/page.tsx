"use client"

import { ExpandableProjectCards } from '@/components/ui/ExpandableCard'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#D1F2EB]">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#b8e0d9] opacity-20 mix-blend-multiply blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#92d5c6] opacity-20 mix-blend-multiply blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#285E61] mb-6">
            Project Archive
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-[#285E61]/30 origin-center mx-auto"
            style={{ width: '160px' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-[#285E61]/80 max-w-2xl mx-auto"
          >
            Selected works from my portfolio
          </motion.p>
        </motion.div>

        {/* Projects Grid - Directly rendered without container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <ExpandableProjectCards />
        </motion.div>

        {/* Subtle Footer */}
        <div className="mt-20 text-center">
          <p className="text-[#285E61]/60 text-sm">
            Crafted with Care 🍀
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage