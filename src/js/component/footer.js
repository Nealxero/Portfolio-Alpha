import React from "react";
import "../../styles/footer.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Mudkip2 from "../../img/Mudkip2.gif"
export const Footer = () => {
    return (
        <footer>
          <div className="containerF">
            <div className="row">
              <div className="col-md-6" id="name">
                <p> © 2023 Santiago Acevedo </p><img src={Mudkip2} id="Mudkip2"   />
              </div>
              <div className="col-md-6" id="icons">
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
          </div>
        </footer>
      );
}