"use client"
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import MagicButton from './ui/MagicButton'
import FilamentBackground from './ui/FilamentBackground'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { useRouter } from 'next/navigation' 

const Hero = () => {
  const router = useRouter(); 
  const downloadUrl = "arushi_resume_final.pdf"; // Adjust this path as needed, put your resume file in /public/files/

  const handleDownload = (url: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("yu")
    e.preventDefault();
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="hero" className='pb-20 pt-36'>
      <FilamentBackground />
      <div>
        <Spotlight className='-top-0 -left-0 md:-left-0 md:-top-0 h-screen' fill='' />
        <Spotlight className='-top-0 left-50 h-[70vh] w-[50vw]' fill='#117A65' />
        <Spotlight className='top-50 -left-0 h-[80vh] w-[60vw]' fill='#117A65' />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-sm text-center text-textNormal max-w-80'>
            Software  Developer
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl '
            words='Bringing ideas to life with CODE and CREATIVITY '
          />
          <p className='text-center md:tracking-wider mb-4 text-md  text-textSecondary'>
            MCA @ NIT Kurukshetra | Ex-iHub-AWaDH BioFieldPower Intern, IIT Ropar | Student Placement Coordinator | Bridging innovation and leadership
          </p>
          <div className='flex gap-4'>
            <MagicButton
              title="See my projects"
              icon={<FaLocationArrow />}
              position='right'
              handleClick={() => router.push("/projects")}
            />
            <MagicButton
              title="Download Resume"
              icon={<FiFileText />}
              position='right'
              handleClick={handleDownload(downloadUrl)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
