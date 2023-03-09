import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  /*=============== Change background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // quando o scroll for maior que 200 viewport hight, add
    // o scroll-header na classe .header no elemento que a tiver
    if (this.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });
  /*=============== Toggle Menu ===============*/
  const [toggle, setToggle] = useState<boolean>(false);
  const [activateNav, setActivateNav] = useState<string>("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Mayk
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActivateNav("#home")}
                className={
                  activateNav === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActivateNav("#about")}
                className={
                  activateNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActivateNav("#skills")}
                className={
                  activateNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActivateNav("#services")}
                className={
                  activateNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActivateNav("#projects")}
                className={
                  activateNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActivateNav("#contact")}
                className={
                  activateNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
