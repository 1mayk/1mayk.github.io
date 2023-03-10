import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mayk</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/_mkmaik"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/_mayconoliveira/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maycon-oliveira97/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/1mayk"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mayk. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
