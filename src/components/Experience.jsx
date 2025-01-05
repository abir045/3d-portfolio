import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Experience = () => {
  return (
    <div className="">
      <div className="flex flex-col ">
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>

        <p className={`${styles.sectionSubText} font-bold`}>Web Developer</p>
        <p className={styles.sectionSubText}>
          <span className="font-bold">Company:</span> Simplisolve US
        </p>
        <p className="text-xl font-medium">oct 2023 - Nov 2023</p>
        <p className="font-medium">
          <span className="font-bold text-lg ">Responsibilities:</span> Work
          with Frontend design, updating UI and user experience and work in CMS
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "Experience");
