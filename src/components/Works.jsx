import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { github, url ,live } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import {fadeIn, textVariant , slideIn} from '../utils/motion'



const ProjectCard = ({index, name, description, tags, image, source_code_link, live_url}) => (

<motion.div 

variants={slideIn("right", "tween",  0.1,  0.5)}
>
 <Tilt
 options={{
  max: 45,
  scale:1 ,
  speed: 450,
  
 }}
 className="bg-tertiary p-5 rouded-2xl sm:w-[360px] w-full"
 > 
 
 <div className='relative w-full h-[230px]'
 
 >
  <img
  
  
  src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
  
  
</div>


{/* details */}

<div className='mt-5 '> 
  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
  <p className='mt-2 text-secondary text-[14px]'> {description}</p>
</div>


  <div className='mt-4 flex flex-wrap gap-2'>
    {tags.map((tag)=> (
      <p key={`${name}-${tag.name} `} className={`text-[14px] ${tag.color} `}>
        #{tag.name}
      </p>
    ))}

<div className='absolute top-[86%]  inset-0 flex space-x-5 items-center justify-end m-3 card-img_hover'
  
  >
  {/* source_code_link */}
  <div 
  onClick={() => window.open(source_code_link , "blank")}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-99'
  >
   <img
   src={github}
   alt="github"
   className='w-[50px] object-contain'
   />   
</div>

{/* live url */}
<div 
  onClick={() => window.open(live_url , "blank")}
  className='bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-99 '
  >
   <img
   src={live}
   alt="live url"
   className='w-[50px]  object-contain'
   />   
</div>
</div>


  </div>

  

 </Tilt>

</motion.div>

)

const Works = () => {
  return (
    <>
    
    <div className='flex flex-col'>
      <p className={styles.sectionSubText}>
      My Work
      </p>

    <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
    
      
  
    <motion.p 
    variants={slideIn("down" ,"tween" , 0.1, 1)}
    className='text-secondary text-[17px] max-w-3xl mb-5'
    >
      Following are some of my featured projects.
      Each project is briefly descriobed with links to code repositories and live demos in it.

    </motion.p>
    {/* </div> */}
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
        {projects.map((project, index)=> (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          
          /> 
        ) )}

    </div>
    
    </>
  )
}

export default  SectionWrapper(Works, "work") 