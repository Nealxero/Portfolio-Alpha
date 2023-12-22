import React from "react";

import "../../styles/skills.css";
import javascript from "../../img/javascript.png";
import flask from "../../img/Flask.jpg"
import sql from "../../img/SQL.png"
import css from "../../img/css.png";
import react from "../../img/react.png";
import python from "../../img/python.png";
import html from "../../img/html.png";
import restful from "../../img/restful.png";
import next from "../../img/nextjs.png"
import mongodb from "../../img/mongodb.png"
export const Skills = () => {
  return (
    <div id="Skills">
      <h3 id="skillsID"> {"<Skills/>"} </h3>
      <h4> Front </h4>
      <div className="skillsCont">
        <div className="imgJS">
          <img className="" src={javascript} alt="JavaScript icon"></img>
          <p className="my-4">JavaScript</p>
        </div>
        <div className="imgJS">
          <img className="" src={css} alt="JavaScript icon"></img>
          <p className="my-4">CSS</p>
        </div>
        <div className="imgJS">
          <img className="" src={html} alt="JavaScript icon"></img>
          <p className="my-4">HTML</p>
        </div>
        <div className="imgJS">
          <img className="" src={react} alt="JavaScript icon"></img>
          <p className="my-4">React</p>
        </div>
        <div className="imgJS">
          <img className="" src={next} alt="JavaScript icon"></img>
          <p className="my-4">NextJS</p>
        </div>
      </div>
      <h4> Back </h4>
      <div className="skillsCont">
        <div className="imgJS">
          <img className="w-2" src={python} alt="JavaScript icon"></img>
          <p className="my-4">Python</p>
        </div>
        <div className="imgJS">
          <img className="w-2" src={flask} alt="JavaScript icon"></img>
          <p className="my-4">Flask</p>
        </div>
        <div className="imgJS">
          <img className="w-2" src={sql} alt="JavaScript icon"></img>
          <p className="my-4"> SQL </p>
        </div>
        <div className="imgJS">
          <img className="w-2" src={restful} alt="JavaScript icon"></img>
          <p className="my-4"> REST API </p>
        </div>
        <div className="imgJS">
          <img className="w-2" src={mongodb} alt="JavaScript icon"></img>
          <p className="my-4"> MongoDB </p>
        </div>
      </div>
     
    </div>
  );
};
