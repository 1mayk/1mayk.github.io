import React from "react";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_mayconoliveira/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/maycon-oliveira97/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/1mayk" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}
