'use client'

import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './ui/BackgroundAnimation'
import { useState } from 'react'
import Lottie from 'react-lottie'
import MagicButton from './ui/MagicButton'
import { IoCopyOutline } from 'react-icons/io5'
import animationData from '@/data/confetti.json'
import EducationLShape from './ui/Education'
import SkillSection from './ui/SkillSection'
import ContactAvatar from './ui/Avatar'

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-auto md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id: number
  img?: string | null
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const handleCopy = () => {
    const text = 'arushimittal2432@gmail.com'
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        `group/bento shadow-input flex flex-col justify-between space-y-4 rounded-3xl relative border-green/[0.6] transition duration-200 hover:shadow-xl dark:shadow-none ${id !== 2 && 'overflow-hidden'}`,
        className
      )}
      style={{
        background: id === 1 || id === 2 
          ? '#1F2937' 
          : 'linear-gradient(90deg, rgba(209, 242, 235, 1) 3%, rgba(151, 196, 188, 1) 87%, rgba(92, 184, 162, 1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'}`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover,object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id == 5 && 'w-full opacity-80}'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover,object-center'}
            />
          )}
        </div>
        
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 flex items-center justify-center text-textNormal font-bold' />
          </BackgroundGradientAnimation>
        )}
        
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          {![2, 5].includes(id) && (
  <>
    <div className={cn(
      'font-sans text-lg lg:text-3xl w-full font-bold z-10',
      id === 1 ? 'text-emerald-200' : 'text-[#2C736A]',
      'pb-3'
    )}>
      {title}
    </div>

    <div className="space-y-4">
      {typeof description === 'string' ? (
        description.split('\n').map((paragraph, index) => (
          <p
            key={index}
            className={cn(
              'font-sans font-light',
              id === 1 ? 'text-sm lg:text-base text-gray-300' : 'text-sm text-textNormal',
              'leading-relaxed z-10'
            )}
          >
            {paragraph}
          </p>
        ))
      ) : (
        <div className={cn(
          'font-sans font-light leading-relaxed z-10',
          id === 1
            ? 'text-sm lg:text-base text-gray-300'
            : 'text-sm text-textNormal pb-3',
          id === 1 && 'max-w-full'
        )}>
          {description}
        </div>
      )}
    </div>
  </>
)}

          {id === 3 && <EducationLShape />}
          {id === 5 && <SkillSection />}
        {id === 2 && <ContactAvatar />}
          
          
          {id === 6 && (
            <div className='relative'>
              <div className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses=''
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}