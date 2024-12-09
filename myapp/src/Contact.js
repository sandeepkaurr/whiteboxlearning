import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./Style.css";

function Contact() {
  return (
    <div>
      <Header></Header>
      <div class="faqheading">
        <h1>Contact Us</h1>
        <a
          style={{
            marginLeft: "870px",
            padding: "20px",
            textDecoration: "none",
          }}
          href="/"
        >
          <i class="fa-solid fa-house"></i> Home
        </a>
        <a href="/Contact" style={{ textDecoration: "none" }}>
          Contact
        </a>
      </div>
      <div class="contactbox">
        <h2>Get in touch!</h2>
        <p>
          We'd love to hear from you. Fill up the form below to send us a
          message.
        </p>
        <form style={{ marginLeft: "" }}>
          <label class="label" htmlFor="name">
            Name:
          </label>
          <br></br>
          <input
            type="text"
            placeholder=" Enter Your Name"
            class="input"
          ></input>
          <br></br>
          <label class="label" htmlFor="name">
            Email:
          </label>
          <br></br>
          <input
            class="input"
            type="email"
            placeholder="Enter Your Email"
          ></input>
          <br></br>
          <label class="label" htmlFor="name">
            Phone:
          </label>
          <br></br>
          <input
            class="input"
            type="phone"
            placeholder="Enter Your Phone"
          ></input>
          <br></br>
          <label class="label" htmlFor="name">
            Msg:
          </label>
          <br></br>
          {/* <textarea class="input" placeholder="Type your msg here..."> */}

          {/* </textarea> */}
          <textarea
            className="input"
            placeholder="Type your msg here..."
          ></textarea>
        </form>
        <div className="contbox">
          <button class="contbtn">
            <i class="fa-solid fa-play  "></i>Send
          </button>
          <button class="contbtn">Reset</button>
        </div>
      </div>
      <div className="infobox">
        <h2 className="ch2">Conatct Details</h2>
        <h4 className="ch4">Fremont Office</h4>
        <p className="cp">6500 Dublin Blvd #214, Dublin, CA 94568</p>
        <br></br>
        <h4 className="ch4">All Enquries</h4>
        <p className="cp">Tel: +1 925-557-1053</p>
        <p className="cp">Email: info@whitebox-learning.com</p>
      </div>

      <Footer style={{ marginbottom: "500px" }}></Footer>
      <div className="spacer"> hello</div>
    </div>
  );
}

export default Contact;
