import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { github, url } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'



const ProjectCard = ({index, name, description, tags, image, source_code_link, live_url}) => (

<motion.div 
variants={fadeIn("up", "spring", index * 0.5,  1)}
>
 <Tilt
 options={{
  max: 45,
  scale:1 ,
  speed: 450,
  
 }}
 className="bg-tertiary p-5 rouded-2xl sm:w-[360px] w-full"
 > 
 
 <div className='relative w-full h-[230px]'>
  <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
  
  <div className='absolute inset-0 flex space-x-2 items-start justify-end m-3 card-img_hover'>
  {/* source_code_link */}
  <div 
  onClick={() => window.open(source_code_link , "blank")}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
   <img
   src={github}
   alt="github"
   className='w-1/2 h-1/2 object-contain'
   />   
</div>

{/* live url */}
<div 
  onClick={() => window.open(live_url , "blank")}
  className='bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
  >
   <img
   src={url}
   alt="live url"
   className='w-1/2 h-1/2 rounded-full object-contain'
   />   
</div>
</div>
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
  </div>

 </Tilt>

</motion.div>

)

const Works = () => {
  return (
    <>
    <motion.div 
    
    variants={textVariant()}
    >
    <p className={styles.sectionSubText}>
        My Work
      </p>

      <h2 className={styles.sectionHeadText}>Projects.</h2>


    </motion.div>

    <div className='w-full flex'>
      <motion.p 
      variants={fadeIn("" ,"" , 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Following are some of my featured projects.
       Each project is briefly descriobed with links to code repositories and live demos in it.

  </motion.p>
    </div>
    
    <div className='mt-20 flex flex-wrap gap-7'>
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