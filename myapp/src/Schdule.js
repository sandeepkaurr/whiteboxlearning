import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Schdule() {
  return (
    <div className="sch">
      <Header></Header>
      <div className="faqheading">
        <h1>Schedule</h1>
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
      <div>
        <button className="schbtn">Calender</button>
        <br></br>
        <button class="schbtn">Course Content</button>
      </div>
      <div className="table">
        <table border="1" style={{ width: "80%", borderCollapse: "collapse" }}>
          <thead className="thead">
            <tr>
              <th>Fundamentals</th>
              <th>AIML (Artificial Intelligence & Machine Learning)</th>
              <th>AIML (Artificial Intelligence & Machine Learning)</th>
              <th>Quality Engineering</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quality Engineering</td>
              <td>Python</td>
              <td>HTML and HTML5</td>
              <td>Testing Concepts</td>
            </tr>
            <tr>
              <td>Agile SDLC</td>
              <td>Data analysis</td>
              <td>CSS</td>
              <td>Selenium WebDriver</td>
            </tr>
            <tr>
              <td>JIRA Agile</td>
              <td>Data Visualization</td>
              <td>DOM & jQuery</td>
              <td>Java Programming</td>
            </tr>
            <tr>
              <td>UNIX</td>
              <td>Essential Math for ML</td>
              <td>Tailwind CSS</td>
              <td>Cypress</td>
            </tr>
            <tr>
              <td>HTTP</td>
              <td>ML - Supervised Learning Algorithms</td>
              <td>React</td>
              <td>Puppeteer</td>
            </tr>
            <tr>
              <td>REST API</td>
              <td>Reinforcement learning</td>
              <td>Express.js</td>
              <td>Appium</td>
            </tr>
            <tr>
              <td>Kubernetes</td>
              <td>PyTorch, TensorFlow</td>

              <td>MongoDB</td>
              <td>WebDriverIO</td>
            </tr>
            <tr>
              <td>UNIX</td>
              <td>Essential Math for ML</td>
              <td>Tailwind CSS</td>
              <td>Cypress</td>
            </tr>
            <tr>
              <td>Kubernetes</td>
              <td>PyTorch, TensorFlow</td>

              <td>MongoDB</td>
              <td>WebDriverIO</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Schdule;
