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
        `group/bento shadow-input  flex flex-col justify-between space-y-4 rounded-3xl relative border-green/[0.6] transition duration-200 hover:shadow-xl dark:shadow-none ${id !==2 && 'overflow-hidden'}`,
        className
      )}
      style={{
        background:
          'linear-gradient(90deg,rgba(209, 242, 235, 1) 3%, rgba(151, 196, 188, 1) 87%, rgba(92, 184, 162, 1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} `}>
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
          <div
            className={`font-sans text-lg lg:text-3xl w-full font-bold z-10 text-[#2C736A] pb-3`}
          >
            {title}
          </div>
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          {typeof description === 'string' && id === 1 ? (
            <ul className='list-disc pl-4 space-y-2 text-textNormal text-sm lg:text-base font-light z-10'>
              {description
                .split('\n')
                .filter(line => line.trim() !== '')
                .map((line, idx) => (
                  <li key={idx}>{line.trim()}</li>
                ))}
            </ul>
          ) : (
            <div
              className={cn(
                'font-sans font-light text-sm lg:text-base leading-relaxed text-textNormal z-10',
                id === 1 && 'max-w-full'
              )}
            >
              {description}
            </div>
          )}

          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}

          {id === 2 && <ContactAvatar />}

          

          {/* Tech stack list div */}
          {id === 3 && (
            < EducationLShape/>
          )}

          {id === 5 && <SkillSection />}

          {id === 6 && (
            <div className='mt-5 relative'>
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
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
