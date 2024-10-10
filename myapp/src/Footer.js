import React from "react";
import "./Style.css";
import logo from "./images/logo.jpg";
import cir from "./images/cir.jpeg";
// import chalk from "chalk";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div class="main">
      <img src={logo} alt="logo" className="l"></img>
      <div className="grid-container">
        <div className="grid-iem-1">
          <div>
            <h2>Whitebox Learning</h2>
            <div class="icon">
              <span class="icon1">
                <FaFacebookF style={{ marginRight: "30px" }} />
              </span>
              <span class="icon2">
                <FaYoutube style={{ marginRight: "30px" }} />
              </span>
              <span class="icon2">
                <FaLinkedin style={{ marginRight: "30px" }} />
              </span>
            </div>
          </div>
        </div>
        <div className="grid-item-2">
          <h2 class="h2">Contact Us</h2>
          <div className="info">
            <div className="item1">
              6500 Dublin Blvd., Ste.214(B), Dublin, CA, 94568
            </div>
            <div className="item2">+1 925-557-1053</div>
            <div className="item3">info@whitebox-learning.com</div>
            <div className="item4">recruiting@whitebox-learning.com</div>
            <span>
              <img class="cir" src={cir} alt="cir"></img>
            </span>
          </div>
        </div>
      </div>
      <h3 class="end">
        '@ 2024' <span style={{ color: "blue" }}>Whitebox Learing ,inc. </span>
        All rights reserved.
      </h3>
    </div>
  );
}

export default Footer;
