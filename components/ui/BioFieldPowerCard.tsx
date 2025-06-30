import { motion } from 'framer-motion'

const BioFieldPowerCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='h-full w-full flex flex-col'
    >
      {/* Simplified card container with gray background */}
      <div className=' h-full w-full overflow-hidden  flex flex-col '>
        {/* Header */}
        <div className='flex items-start justify-between mb-4'>
          <div>
            <h3 className='text-xl font-bold text-white mb-1'>
              Remote Internship
            </h3>
            <h2 className='text-2xl font-extrabold text-[#D1F2EB]'>
              BioFieldPower (iHub - AWaDH)
            </h2>
            <p className='text-gray-300 mt-1'>IIT Ropar • Oct 2024 - Present</p>
          </div>
          <div className='bg-[#D1F2EB]/10 px-3 py-1 rounded-full border border-[#D1F2EB]/30'>
            <span className='text-[#D1F2EB] text-sm font-medium'>Remote</span>
          </div>
        </div>

        {/* Description */}
        <ul className='space-y-2 mb-4'>
          {[
            'Led a team of interns, managing task assignments and workflow optimization',
            'Developed a full-stack biomass management platform',
            'Reviewed code submissions and enforced quality standards',
            'Implemented critical features and optimized performance',
            'Worked on-site at IIT Ropar for three weeks during winter'
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className='text-gray-300 text-sm flex items-start'
            >
              <span className='text-[#D1F2EB] mr-2 mt-1'>▹</span>
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className='mt-auto pt-4 border-t border-gray-700'>
          <h4 className='text-xs font-semibold text-gray-400 mb-2'>
            TECHNOLOGIES USED
          </h4>
          <div className='flex flex-wrap gap-2'>
            {[
              'Next.js',
              'MongoDB',
              'Express',
              'Firebase Auth',
              'Team Leadership'
            ].map(tech => (
              <motion.div
                key={tech}
                whileHover={{ y: -2 }}
                className='px-2 py-1 bg-gray-700/50 rounded-full border border-gray-600 text-xs'
              >
                <span className='text-[#D1F2EB] font-medium'>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BioFieldPowerCard
