import React from "react";
import "../../styles/footer.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <div className="containerF">
        <div className="row">
         
            <ul className="social-icons"id="icons">
              <li>
                <a href="https://www.linkedin.com/in/santidevacevedo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </li>
              <li>
                <a href="https://github.com/Nealxero" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </li>
            </ul>
          
        </div>
      </div>
    </footer>
  );
}
