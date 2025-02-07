import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt classNamex="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] justify-evenly items-center flex-col"
        >
          <img className="w-16 object-contain" src={icon} alt={title} />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="-mt-64">
        {/* <p className={styles.sectionSubText}>Introduction</p> */}

        <h2 className={`${styles.sectionHeadText}`}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-[5%] text-white text-[17px] max-w-3xl leading-[30px] "
      >
        {/* I am a frontend developer with a passion to build dynamic products with
        the most updated technologies. Currently I am working as a freelance
        Developer. At the moment developing apps with React Js, Next Js,
        Tailwind CSS, Node Js and contributing to open source in my free time.
        Pro Tailwind CSS. In my free time I like to travel, explore etc. */}
        Hey there! I'm a passionate frontend developer with a strong focus on
        building modern, user-friendly web applications. My expertise lies in
        React, Next.js, and the MERN stack, and I thrive on crafting seamless,
        interactive experiences for users. My programming journey began with a
        deep curiosity about how websites function under the hood. I started by
        experimenting with HTML, CSS, and JavaScript, building small projects
        that quickly grew into full-fledged applications. Over time, I honed my
        skills in React and Next.js, mastering component-based architecture,
        state management, and performance optimization. enjoy creating clean,
        intuitive, and engaging UIs that enhance user experiences. Whether it's
        designing smooth animations, optimizing performance, or integrating
        complex APIs, I find joy in the details that make an app feel polished
        and professional
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
       {services.map((service, index)=> (
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");

/**
 * -Write a detailed introduction about yourself, including:

-Your programming journey.

-The type of work you enjoy.

-Any hobbies or interests outside of programming (e.g., sports, painting).

-Showcase your personality in this section.
 */
