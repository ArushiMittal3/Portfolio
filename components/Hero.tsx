import React from 'react'
import { SpotLight } from 'three/src/Three.Core.js'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa';
import  LiquidBackground, {  } from './ui/FilamentBackground'
import FilamentBackground from './ui/FilamentBackground'
import { FiFileText } from 'react-icons/fi';


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
       <FilamentBackground /> 
      <div>
        <Spotlight
          className='-top-0 -left-0 md:-left-0 md:-top-0 h-screen'
          fill=''
        />
        <Spotlight
          className='-top-0 left-50 h-[70vh] w-[50vw]'
          fill='#117A65'
        />
        <Spotlight className='top-50 -left-0 h-[80vh] w-[60vw]' fill='#117A65' />
      </div>

      
      
      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-textNormal max-w-80'> Dynamic web magic with next.js </h2>
          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl ' words="Transforming Concepts into Seamless User Experiences "/>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-textSecondary'>Hey, I am Arushi , Nice to meet you</p>
            <div className='flex gap-4'>
              <MagicButton title="See my projects" icon={<FaLocationArrow/>}position='right' />
          <MagicButton title="Download Resume" icon={<FiFileText />}position='right' />
            </div>
          </div>
       </div>
    </div>
  )
}

export default Hero
