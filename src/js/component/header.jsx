import React from "react";
import { useState, useEffect } from "react";

import "../../styles/header.css";
import prof from "../../img/profPic.png";
import crop from "../../img/cropped.png";

export const Header = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const message =
      "the goal is not the perfection, but to learn something new.";
    let i = 0;
    const intervalId = setInterval(() => {
      if (i === message.length) {
        clearInterval(intervalId);
      } else {
        setText((prevText) => prevText + message.charAt(i));
        i++;
      }
    }, 55);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header" id="Home">
      <div className="containerH">
        <div className="text-container">
          <h1 className="glow">The name's Santiago</h1>
          <h2 className="glow">Full Stack Developer</h2>
          <p>{text}</p>
        </div>
        <div className="image-container">
          <img src={crop} alt="Your Image" />
        </div>
      </div>
	  
    </div>
  );
};
