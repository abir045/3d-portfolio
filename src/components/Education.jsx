import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { educations } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const EducationCard = ({education}) => {

return <VerticalTimelineElement
contentStyle={{background: '#1d1835', color: '#fff'}}
contentArrowStyle={{ borderRight: '7px solid #232631'}}
// date={education.date}
iconStyle={{ background: education.iconBg}}
icon = {
  <div className='flex justify-center items-center w-full h-full'>
    <img
    src={education.icon}
    alt={education.title}
    className='w-[95%] rounded-full object-contain'
    />
  </div>
}
>

<div>
  <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
  <p className='text-secondary text-base font-semibold' style={{margin: 0}}>{education.company_name}</p>
</div>
  



</VerticalTimelineElement>



}




const Education = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}
    >
    <p className={styles.sectionSubText}>
        My Education Background
      </p>

      <h2 className={styles.sectionHeadText}>Overview</h2>


    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
       {educations.map((education, index)=> (
      
      <EducationCard key={index} education={education} />
      
      ) )}
      

      </VerticalTimeline>

    </div>
    
    </>
  )
}

export default SectionWrapper(Education, 'education') 