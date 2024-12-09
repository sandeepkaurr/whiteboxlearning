import React from "react";
import "./Style.css";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img src={logo} alt="logo" className="logo"></img>
          </li>
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/Schdule">
              <b>Schedule</b>
            </Link>
          </li>
          <li>
            <Link to="/Resources">
              <b>Resources</b>
            </Link>
          </li>
          <li>
            <Link to="/Faq">
              <b>FAQ</b>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <b>Contact</b>
            </Link>
          </li>
        </ul>
        <button class="btn">Login </button>
        <button class="btn">Register </button>
        <div
          style={{
            marginLeft: "1150px",
            marginTop: "-130px",
            marginRight: "50px",
          }}
        >
          <i class="fa-solid fa-moon fa-2x"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
