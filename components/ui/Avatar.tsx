'use client'

import Lottie from 'react-lottie'
import animationData from '@/data/avtar.json'

export default function ContactAvatar() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div
      className="relative w-40 h-40 md:w-48 md:h-48 group mx-auto overflow-visible" // allow overflow
    >
      {/* Lottie animation container */}
      <div className="w-full h-full rounded-full overflow-hidden">
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Speech bubble - positioned outside and above */}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"
        style={{ whiteSpace: 'nowrap' }}
      >
        <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-600 shadow-lg px-5 py-3 rounded-xl text-base text-gray-800 dark:text-gray-100">
          Come contact me!
          <div className="absolute top-full left-1/2 w-4 h-4 -rotate-45 bg-white dark:bg-zinc-800 border-b border-r border-gray-200 dark:border-zinc-600 -translate-x-1/2 -mt-1" />
        </div>
      </div>
    </div>
  )
}
