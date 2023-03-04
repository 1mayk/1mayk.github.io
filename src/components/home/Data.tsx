import React from "react";
import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Maycon
        <img className="home__hand" src={hand} alt="mão acenando" />
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        Web developer with a great passion for my work and constantly dedicated
        to improving my skills in various programming languages, frameworks, and
        UI/UX design.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="botão enviar" />
      </a>
    </div>
  );
}
