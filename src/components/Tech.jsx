import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import Lottie from 'lottie-react'
import js from "../assets/js.json"
import css from '../assets/css.json'
import R from '../assets/react.json'
import N from '../assets/node.json'
import github from '../assets/git.json'
import next from '../assets/next.json'
import figma from '../assets/figma.json'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
       
       <Lottie animationData={js} className='w-[150px]' />
       <Lottie animationData={css} className='w-[150px]' /> 
       <Lottie animationData={R} className='w-[150px]' />
       <Lottie animationData={N} className='w-[150px] '/>
       <Lottie animationData={github} className='w-[150px]' />
       <Lottie animationData={next} className='w-[150px]' />
       <Lottie animationData={figma} className='w-[120px]  ' />

      
      
      {/* {technologies.map((technology)=> (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
      
      </div>
  )
}

export default Tech