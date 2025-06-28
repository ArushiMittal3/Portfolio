'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJsSquare, FaDatabase } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiTypescript, SiCplusplus } from 'react-icons/si'
import { BsPeopleFill, BsLightningFill } from 'react-icons/bs'
import { FiCode, FiCpu } from 'react-icons/fi'

const skills = {
  "Core Languages": [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> }
  ],
  "Frontend": [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <FiCode /> },
    { name: 'Framer Motion', icon: <BsLightningFill /> }
  ],
  "Backend": [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <FiCpu /> },
    { name: 'API Design', icon: '🚀' }
  ],
  "Databases": [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Firebase', icon: <SiFirebase /> }
  ],
  "DevOps & Tools": [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Postman', icon: '📮' }
  ],
  "Soft Skills": [
    { name: 'Communication', icon: <BsPeopleFill /> },
    { name: 'Leadership', icon: '👑' },
    { name: 'Problem Solving', icon: '🧩' }
  ]
}

const SkillCard = ({ title, items }: { title: string; items: { name: string; icon: React.ReactNode }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-[#D1F2EB]/20 rounded-2xl p-6 shadow-sm hover:shadow-md border border-[#D1F2EB]/30 flex flex-col gap-4 transition-all duration-300 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-[#D1F2EB] text-[#2C736A] rounded-lg">
        {title === 'Core Languages' && <FaJsSquare size={20} />}
        {title === 'Frontend' && <FaReact size={20} />}
        {title === 'Backend' && <FaNodeJs size={20} />}
        {title === 'Databases' && <FaDatabase size={20} />}
        {title === 'DevOps & Tools' && <FaGitAlt size={20} />}
        {title === 'Soft Skills' && <BsPeopleFill size={20} />}
      </div>
      <h3 className="text-xl font-semibold text-[#2C736A]">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {items.map(({ name, icon }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg text-sm text-[#2C736A] shadow-sm hover:shadow transition-all duration-200 border border-[#D1F2EB]/50"
        >
          <span className="shrink-0 text-[#3A8A7F]">{icon}</span>
          <span>{name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function SkillSection() {
  return (
    <section id="skills" className="py-20 px-5 sm:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-3 text-[#2C736A]">Skills & Expertise</h2>
        <p className="text-lg text-[#3A8A7F] max-w-2xl mx-auto">
          Technologies and tools I work with daily to build amazing digital experiences
        </p>
      </motion.div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCard key={category} title={category} items={items} />
        ))}
      </div>
    </section>
  )
}