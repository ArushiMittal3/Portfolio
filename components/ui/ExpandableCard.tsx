'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useWillChange } from 'framer-motion'
import Image from 'next/image'
import { projects, Project } from '@/data'

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}

export function ExpandableProjectCards ({ limit }: { limit?: number }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)
  const id = useId()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const displayedProjects = limit ? projects.slice(0, limit) : projects
  const willChange = useWillChange()

  useEffect(() => {
    function onKeyDown (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false)
        } else {
          setActiveProject(null)
        }
      }
    }

    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      setIsFullscreen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject, isFullscreen])

  useOutsideClick(ref, () => {
    if (!isFullscreen) {
      setActiveProject(null)
    }
  })

  return (
    <>
      <AnimatePresence mode='wait'>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50'
            style={{ willChange: 'opacity' }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {activeProject && (
          <div
            className={`fixed ${
              isFullscreen
                ? 'inset-0'
                : 'inset-0 flex items-start justify-center p-4 sm:p-6'
            } z-[60] overflow-y-auto`}
          >
            <motion.div
              layoutId={`card-${activeProject.id}-${id}`}
              ref={ref}
              className={`${
                isFullscreen
                  ? 'w-full h-full rounded-none'
                  : 'w-full max-w-5xl rounded-2xl max-h-[90vh]'
              } bg-white dark:bg-gray-800 shadow-2xl overflow-hidden flex flex-col`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  damping: 25,
                  stiffness: 300,
                  mass: 0.5
                }
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeInOut'
                }
              }}
              transition={{
                damping: 25,
                stiffness: 300,
                mass: 0.5
              }}
              style={{ willChange }}
            >
              <div className='relative'>
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  width={1200}
                  height={isFullscreen ? 400 : 300}
                  className={`w-full ${
                    isFullscreen ? 'h-48 sm:h-56' : 'h-48 sm:h-72'
                  } object-cover`}
                  priority
                />
                <div className='absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 sm:gap-3'>
                  <motion.button
                    className='bg-white/90 dark:bg-gray-700/90 rounded-full p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform'
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                    transition={{ stiffness: 400, damping: 10 }}
                  >
                    {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
                  </motion.button>
                  <motion.button
                    className='bg-white/90 dark:bg-gray-700/90 rounded-full p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform'
                    onClick={() => setActiveProject(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title='Close'
                    transition={{ stiffness: 400, damping: 10 }}
                  >
                    <CloseIcon />
                  </motion.button>
                </div>
              </div>

              <div className='p-4 sm:p-6 md:p-8 overflow-y-auto flex-1'>
                <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8'>
                  <div className='flex-1'>
                    <motion.h2
                      layoutId={`title-${activeProject.id}-${id}`}
                      className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#D1F2EB] mb-3 sm:mb-4'
                      transition={{ stiffness: 300 }}
                    >
                      {activeProject.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeProject.id}-${id}`}
                      className='text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6'
                      transition={{ stiffness: 300 }}
                    >
                      {activeProject.description}
                    </motion.p>

                    <div className='mb-6 sm:mb-8'>
                      <h3 className='font-semibold text-lg sm:text-xl text-gray-800 dark:text-[#D1F2EB] mb-2 sm:mb-3'>
                        Tech Stack
                      </h3>
                      <div className='flex flex-wrap gap-2 sm:gap-3'>
                        {activeProject.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: index * 0.05,

                              stiffness: 500,
                              damping: 15
                            }}
                            className='inline-block bg-[#D1F2EB] text-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium'
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className='mb-6 sm:mb-8'>
                      <h3 className='font-semibold text-lg sm:text-xl text-gray-800 dark:text-[#D1F2EB] mb-2 sm:mb-3'>
                        Project Overview
                      </h3>
                      <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed'>
                        {activeProject.details.overview}
                      </p>
                    </div>

                    {activeProject.details.challenges && (
                      <div className='mb-6 sm:mb-8'>
                        <h3 className='font-semibold text-lg sm:text-xl text-gray-800 dark:text-[#D1F2EB] mb-2 sm:mb-3'>
                          Challenges
                        </h3>
                        <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed'>
                          {activeProject.details.challenges}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className='lg:w-2/5'>
                    <motion.div
                      className='bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className='font-semibold text-lg sm:text-xl text-gray-800 dark:text-[#D1F2EB] mb-3 sm:mb-4'>
                        Key Features
                      </h3>
                      <ul className='space-y-2 sm:space-y-3'>
                        {activeProject.details.features.map(
                          (feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                delay: 0.1 + index * 0.05,

                                stiffness: 300
                              }}
                              className='flex items-start gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg'
                            >
                              <span className='text-[#D1F2EB] mt-1 text-lg sm:text-xl'>
                                •
                              </span>
                              <span>{feature}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </motion.div>

                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8'>
                      {activeProject.githubUrl && (
                        <motion.a
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={activeProject.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-gray-800 hover:bg-gray-700 text-[#D1F2EB] px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg'
                          transition={{
                            stiffness: 400,
                            damping: 10,
                            delay: 0.3
                          }}
                        >
                          <GithubIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                          View Code
                        </motion.a>
                      )}
                      {activeProject.liveUrl && (
                        <motion.a
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={activeProject.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-[#D1F2EB] hover:bg-[#b8e0d9] text-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg'
                          transition={{
                            stiffness: 400,
                            damping: 10,
                            delay: 0.35
                          }}
                        >
                          <ExternalLinkIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6'>
        {displayedProjects.map(project => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}-${id}`}
            onClick={() => setActiveProject(project)}
            className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all'
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ stiffness: 300, damping: 15 }}
          >
            <div className='relative h-40 sm:h-48 md:h-56'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-full object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent' />
              <div className='absolute bottom-0 left-0 p-4 sm:p-6'>
                <motion.h3
                  layoutId={`title-${project.id}-${id}`}
                  className='text-xl sm:text-2xl font-bold text-[#D1F2EB] mb-1 sm:mb-2'
                  transition={{ stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.id}-${id}`}
                  className='text-[#D1F2EB]/90 text-sm sm:text-base'
                  transition={{ stiffness: 300 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>

            <div className='p-4 sm:p-6'>
              <div className='flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4'>
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.05,

                      stiffness: 500,
                      damping: 15
                    }}
                    className='text-xs sm:text-sm bg-[#D1F2EB] text-gray-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium'
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 3 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.15,

                      stiffness: 500,
                      damping: 15
                    }}
                    className='text-[0.7rem] sm:text-[0.78rem] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-[#D1F2EB] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium'
                  >
                    +{project.techStack.length - 3} more
                  </motion.span>
                )}
              </div>

              <div className='flex flex-wrap gap-2 sm:gap-3 justify-start'>
                {project.githubUrl && (
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,

                      stiffness: 500,
                      damping: 15
                    }}
                    href={project.githubUrl}
                    onClick={e => e.stopPropagation()}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-[#D1F2EB] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium'
                  >
                    Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.25,

                      stiffness: 500,
                      damping: 15
                    }}
                    href={project.liveUrl}
                    onClick={e => e.stopPropagation()}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs sm:text-sm bg-[#D1F2EB] hover:bg-[#b8e0d9] text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium'
                  >
                    Live
                  </motion.a>
                )}
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3,

                    stiffness: 500,
                    damping: 15
                  }}
                  className='text-xs sm:text-sm ml-auto bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-[#D1F2EB] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium'
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
)

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' y1='14' x2='21' y2='3' />
  </svg>
)

const CloseIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='w-5 h-5 text-gray-800 dark:text-gray-200'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  )
}
const MaximizeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5 text-gray-800 dark:text-gray-200'
  >
    <path d='M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3' />
  </svg>
)

const MinimizeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5 text-gray-800 dark:text-gray-200'
  >
    <path d='M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3' />
  </svg>
)
