import React from "react";
import "./Style.css";
import logo from "./images/logo.jpg";
function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img src={logo} alt="logo" className="logo"></img>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <button class="btn">Login </button>
        <button class="btn">Register </button>
      </nav>
    </header>
  );
}

export default Header;
