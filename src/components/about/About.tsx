import React from "react";
import "./About.css";
import AboutImg from "../../assets/profile.png";
import CV from "../../assets/maykCV.pdf";
import Info from "./Info";
import files from "../../assets/files.svg";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="About image" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Fullstack web developer, I create web sites end-to-end with tests and
            UI/UX design ~ completar essa descrição ~
          </p>
        
          <a download='' href={CV} className="button button--flex">
            Download CV &nbsp;
          <img src={files} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
