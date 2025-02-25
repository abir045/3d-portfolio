import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/dall.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import cv from "../assets/cv.svg";
import logo2 from "../assets/scifi.png";
import dev from "../assets/logo-dev.png";
import desktop from "../assets/desktop.png";
import codeLogo from "../assets/code.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-tertiary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={codeLogo}
            alt="logo"
            className="w-14 h-14 object-contain bg-secondary rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Salekin Imran
          </p>
        </Link>

        <ul className="list-none hidden tracking-widest font-bold sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <>
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-secondary" : "text-white"
                  } hover:text-white text-[18px] font-bold cursor-pointer `}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title} </a>
                </li>
              </>
            );
          })}
        </ul>

        {/* social icons */}

        {/* <ul className="list-none  hidden sm:flex space-x-5">
          <li key="1" className="hover:bg-white">
            <a href="https://github.com/abir045" target="_blank">
              <img src={github} className="w-[50px]" />
            </a>
          </li>

          <li key="2" className="hover:bg-white">
            <a href="https://www.linkedin.com/in/salekinimran/" target="_blank">
              <img src={linkedin} className="w-[50px]" />
            </a>
          </li>

          <li key="3" className="hover:bg-white">
            <a
              href="https://drive.google.com/file/d/1R7pTf9sU1D2NBIYMTtVQvUHMpOuWCVNP/view?usp=sharing"
              target="_blank"
            >
              <img src={cv} className="w-[50px]" />
            </a>
          </li>
        </ul> */}
        {/* <div className="hidden md:flex">
          <Link
            to="https://drive.google.com/file/d/1R7pTf9sU1D2NBIYMTtVQvUHMpOuWCVNP/view?usp=sharing"
            target="_blank"
          >
            <button className="btn-sm border border-white bg-tertiary text-white rounded-lg ml-4">
              Download CV
            </button>
          </Link>
        </div> */}

        {/* mb menu */}

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-tertiary absolute top-20 right-0 
        mx-4 my-2 min-w-[250px] z-10 rounded `}
          >
            <ul className="flex flex-col items-center mx-auto gap-10 font-bold tracking-wide leading-5">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-secondary" : "text-white"
                    } font-poppins text-base font-medium cursor-pointer `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title} </a>
                  </li>
                );
              })}

              <div className="">
                <Link
                  to="https://drive.google.com/file/d/1R7pTf9sU1D2NBIYMTtVQvUHMpOuWCVNP/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn-sm border border-white bg-tertiary text-white rounded-lg ml-4">
                    Download CV
                  </button>
                </Link>
              </div>

              {/* <li key="4" className="hover:bg-white">
                <a href="https://github.com/abir045" target="_blank">
                  <img src={github} className="w-[50px]" />
                </a>
              </li>

              <li key="5" className="hover:bg-white">
                <a
                  href="https://www.linkedin.com/in/salekinimran/"
                  target="_blank"
                >
                  <img src={linkedin} className="w-[50px]" />
                </a>
              </li>

              <li key="6" className="hover:bg-white">
                <a
                  href="https://drive.google.com/file/d/1R7pTf9sU1D2NBIYMTtVQvUHMpOuWCVNP/view?usp=sharing"
                  target="_blank"
                >
                  <img src={cv} className="w-[50px]" />
                </a>
              </li> */}
            </ul>

            {/* <div > */}

            {/* </div>  */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
