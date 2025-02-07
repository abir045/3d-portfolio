import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from './canvas'
import Lottie from "lottie-react";
import animationData from "../assets/Desktop.json";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import linkedin from "../assets/linkedin.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute flex inset-0 top-[120px] max-w-7xl flex-row items-start gap-5 mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroSubText} mt-5`}>Front End Developer</h2>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Salekin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mb-10`}>
            I develop beautiful, modern Frontend applications.{" "}
            <br className="sm:block hidden" />{" "}
          </p>

          <div className="my-5 flex gap-4 mb-8 ">
            <Link to={"https://github.com/abir045"} target="_blank">
              <FaGithub size={35} className="text-white" />{" "}
            </Link>

            {/* linkedin */}
            <Link
              to="https://www.linkedin.com/in/salekinimran/"
              target="_blank"
            >
              <FaLinkedin size={35} className="text-white" />{" "}
            </Link>
          </div>

          {/* <Link
            to="https://drive.google.com/file/d/1R7pTf9sU1D2NBIYMTtVQvUHMpOuWCVNP/view?usp=sharing"
            target="_blank"
          >
            <button className="px-4 py-3 border border-black bg-[#915eff] text-white rounded-lg ">
              Download Resume
            </button>
          </Link> */}

          <a
            href="https://drive.google.com/file/d/1sjPhU2t7SCSD8xIR485pCyVmDi-9J8iC/view"
            target="_blank"
            rel="noopener noreferrer"
            // className="inline-block"
          >
            <button className="px-4 py-3 border border-black bg-[#915eff] text-white rounded-lg">
              Download Resume
            </button>
          </a>
        </div>

        <div>
          {/* <img className="rounded-full" src={linkedin} alt="" /> */}

          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={linkedin}
            className=" rounded-full  shadow-2xl border  border-blue-400"
          />
        </div>

        {/* <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div> */}
      </div>

      {/* lottie pc animation */}

      {/* <div className="flex  md:justify-center pt-[55%] md:py-[5%]">
        <Lottie animationData={animationData} />
      </div> */}
    </section>
  );
};

export default Hero;
