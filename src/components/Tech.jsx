import React from 'react'

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
       <Lottie animationData={N} className='w-[200px] '/>
       <Lottie animationData={github} className='w-[150px]' />
       <Lottie animationData={next} className='w-[150px]' />
       <Lottie animationData={figma} className='w-[120px]  ' />

      
      </div>
  )
}

export default Tech