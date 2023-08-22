import React from 'react'
import footer from '../assets/mountains.json'
// import city from '../assets/'

import Lottie from 'lottie-react'

const Footer = () => {
  return (
    <div className='flex '>

   <Lottie animationData={footer}   />

    </div>
  )
}

export default Footer