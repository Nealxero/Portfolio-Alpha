import React from "react";

import "../../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Mudkip from "../../img/Mudkip.gif";

export const About = () => {
  return (
    <div className="About" id="About">
      <div className="container2">
        <div className="text-container2">
          <h1>
            <img src={Mudkip} id="Mudkip" /> {"<About Me/> "}
            <img src={Mudkip} id="Mudkip" />{" "}
          </h1>
          <h4 className="">
            I'm A 23-year-old aspiring full stack developer based in Spain. I
            started my journey in the IT field about a year ago, and since then,
            I have been immersing myself in various programming languages and
            web development frameworks to hone my skills.
          </h4>
        </div>
      </div>
      
      <div className="about-icons" id="icons">
                <ul className="social-icons">
                  <li>
                    <a href="https://www.linkedin.com/in/santidevacevedo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  </li>
                  <li>
                    <a href="https://github.com/Nealxero" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  </li>
                </ul>
              </div>
      
      
    </div>
  );
};
