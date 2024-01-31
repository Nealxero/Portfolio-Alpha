import React from "react";

import "../../styles/projects.css";
import { useState } from "react";
import arcade from "../../img/arcade.png"
import Victa from "../../img/Victa.png";
import Prompt from "../../img/Prompt.png"
import xpent from "../../img/xpentpng.png"
import github from "../../img/github.png";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id="projectsID">
      <h3 id="Projects">{"<My Projects/>"}</h3>
      <div className="img-container">
        <div className="image-box">
          <img src={Prompt} alt="NextJS" />
          <div className="overlay">
            <a href="https://next-1st.vercel.app" target="_blank">
             Promptopia
             <p> 
             Using NextJS, google authenticator and MongoDB, in this web you can create an user and publish useful prompts for public use (step by step guide)
             </p>
            </a>
          </div>
        </div>
        <div className="image-box">
          <img src={arcade} alt="ArcadePlanet" />
          <div className="overlay">
            <a href="https://simple-app-2-kappa.vercel.app" target="_blank">
              Arcade Planet
            
            <p> Simple Front page example for an Arcade located in Sevilla, Spain. Using React, JS, CSS</p>
            </a>
          </div>
        </div>
        <div className="image-box">
          <img src={xpent} alt="Xpent" />
          <div className="overlay">
            <a href="https://xpent.vercel.app" target="_blank">
              Xpent
            
            <p> Budget app to keep track of your expenses, you can create different budgets and add expenses for each of them</p>

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
