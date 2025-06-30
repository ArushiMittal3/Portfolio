'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJsSquare,
  FaDatabase
} from 'react-icons/fa'
import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus
} from 'react-icons/si'
import { BsPeopleFill, BsLightningFill } from 'react-icons/bs'
import { FiCode, FiCpu } from 'react-icons/fi'

const skills = {
  Languages: [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> }
  ],
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind', icon: <FiCode /> },
    { name: 'Framer', icon: <BsLightningFill /> }
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <FiCpu /> },
    { name: 'APIs', icon: '🚀' }
  ],
  Databases: [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Firebase', icon: <SiFirebase /> }
  ],
  DevOps: [
    // Shortened category name
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Postman', icon: '📮' }
  ],
  'Soft Skills': [
    { name: 'Communication', icon: <BsPeopleFill /> },
    { name: 'Leadership', icon: '👑' },
    { name: 'Problem Solving', icon: '🧩' }
  ]
}

const SkillCard = ({
  title,
  items
}: {
  title: string
  items: { name: string; icon: React.ReactNode }[]
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, margin: '0px 0px -50px 0px' }}
    className='bg-[#D1F2EB]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md border border-[#D1F2EB]/30 flex flex-col gap-3 sm:gap-4 transition-all duration-300 backdrop-blur-sm'
  >
    <div className='flex items-center gap-2 sm:gap-3'>
      <div className='p-1.5 sm:p-2 bg-[#D1F2EB] text-[#2C736A] rounded-lg sm:rounded-lg'>
        {title === 'Languages' && (
          <FaJsSquare className='text-sm sm:text-base' />
        )}
        {title === 'Frontend' && <FaReact className='text-sm sm:text-base' />}
        {title === 'Backend' && <FaNodeJs className='text-sm sm:text-base' />}
        {title === 'Databases' && (
          <FaDatabase className='text-sm sm:text-base' />
        )}
        {title === 'DevOps' && <FaGitAlt className='text-sm sm:text-base' />}
        {title === 'Soft Skills' && (
          <BsPeopleFill className='text-sm sm:text-base' />
        )}
      </div>
      <h3 className='text-lg sm:text-xl font-semibold text-[#2C736A]'>
        {title}
      </h3>
    </div>
    <div className='flex flex-wrap gap-2 sm:gap-3'>
      {items.map(({ name, icon }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center gap-1 sm:gap-2 bg-white/70 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm text-[#2C736A] shadow-sm hover:shadow transition-all duration-200 border border-[#D1F2EB]/50'
        >
          <span className='shrink-0 text-[#3A8A7F] text-xs sm:text-sm'>
            {icon}
          </span>
          <span>{name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function SkillSection () {
  return (
    <section id='skills' className='py-20 px-5 sm:px-10 max-w-7xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl font-bold mb-3 text-[#2C736A]'>
          Skills & Expertise
        </h2>
        <p className='text-lg text-[#3A8A7F] max-w-2xl mx-auto'>
          Technologies and tools I work with daily to build amazing digital
          experiences
        </p>
      </motion.div>

      <div className='grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {Object.entries(skills).map(([category, items]) => (
          <SkillCard key={category} title={category} items={items} />
        ))}
      </div>
    </section>
  )
}
