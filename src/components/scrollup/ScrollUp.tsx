import React from "react";
import "./Scrollup.css";

export default function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // quando o scroll for maior que 560 viewport hight, add
    // o show-scroll na classe .scrollup no elemento que a tiver
    if (this.scrollY >= 560) scrollUp?.classList.add("show-scroll");
    else scrollUp?.classList.remove("show-scroll")
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
