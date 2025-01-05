import React from "react";
import footer from "../assets/mountains.json";
// import city from '../assets/'

import Lottie from "lottie-react";
import codeLogo from "../assets/code.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex ">
      {/* <Lottie animationData={footer}   /> */}
      <footer className="footer bg-tertiary text-neutral-content p-10">
        <aside>
          <img
            src={codeLogo}
            alt="logo"
            className="w-14 h-14 object-contain bg-secondary rounded-full"
          />

          <p className="font-bold text-xl">
            Salekin Imran
            <br />
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://github.com/abir045" target="_blank">
              <FaGithub size={35} />{" "}
            </Link>

            {/* linkedin */}
            <Link
              to="https://www.linkedin.com/in/salekinimran/"
              target="_blank"
            >
              <FaLinkedin size={35} />{" "}
            </Link>

            <Link
              to="https://www.facebook.com/LifeJourneyfulltime"
              target="_blank"
            >
              <FaFacebook size={35} />{" "}
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
