import React from 'react'
import { SpotLight } from 'three/src/Three.Core.js'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa';


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='-top-10 -right-90 h-[80vh] w-[50vw]'
          fill='purple'
        />
        <Spotlight className='-top-08 -right-50 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className=' h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0 flex'>
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:80px_80px]',
            '[background-image:linear-gradient(to_right,rgba(228,228,231,0.2)_0.5px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]',
      'dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_0.5px,transparent_5px),linear-gradient(to_bottom,rgba(38,38,38,0.1)_5px,transparent_5px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100'></div>
       
      </div>
      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> Dynamic web magic with next.js </h2>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl ' words="Transforming Concepts into Seamless User Experiences "/>
          <p className='text-cneter md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hey, I am Arushi , Nice to meet you</p>
          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow/>}position='right' />
          </a>
          </div>
       </div>
    </div>
  )
}

export default Hero
