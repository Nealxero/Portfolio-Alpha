import React from "react";

import "../../styles/projects.css";
import { useState } from "react";
import Victa from "../../img/Victa.png";
import soon from "../../img/soon.png";
import github from "../../img/github.png";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id="projectsID">
      <h3 id="Projects">My Projects</h3>
      <div className="img-container">
        <div className="image-box">
          <img src={Victa} alt="Victa Project" />
          <div className="overlay">
            <a href="https://github.com/Nealxero/Victa-0.5" target="_blank">
              Victa
            </a>
          </div>
        </div>
        <div className="image-box">
          <img src={soon} alt="Coming Soon" />
          <div className="overlay">
            <a href="" target="_blank">
              Coming Soon
            </a>
          </div>
        </div>
      </div>
      <div className="gitBox">
      <a
        className="gitbtn"
        href="https://github.com/Nealxero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github-btn">
          <span>My Github</span>
          <FaGithub className="github-logo" />
        </button>
      </a>
      </div>
    </div>
  );
};
