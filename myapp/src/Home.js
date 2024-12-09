import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";

function Home() {
  const images = [
    "https://picsum.photos/800/400/?blur",

    "https://picsum.photos/id/1/800/400",
    "https://picsum.photos/800/400",
    "https://picsum.photos/seed/picsum/800/400",
  ];
  const img = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/20/200/300",
    "https://picsum.photos/id/50/200/300",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) / images.length);
  //   }, 3000);
  // });

  return (
    <>
      <Header></Header>

      <div className="slider"></div>
      <h1 style={{ marginTop: "100px", fontSize: "50px" }}>
        Whitebox Learning
      </h1>
      <button className="button" onClick={prevImage}>
        &lt;
      </button>
      <img src={images[currentIndex]}></img>
      <button className="button" onClick={nextImage}>
        &gt;
      </button>
      <p>
        A comprehensive learning ecosystem tailored for developers, machine
        learning enthusiasts, and data engineers learning enthusiasts, and data
        engineers
      </p>
      <div className="card-container">
        <div className="card">
          <img src={img[0]} alt="card" className="card-image"></img>
          <div className="card-content">
            <h1 className="card-title">Machine Learning</h1>
            <hr style={{ width: "300px" }}></hr>
            <div className="card-content">
              <a href="#">Enroll Now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img[1]} alt="card" className="card-image"></img>
          <div className="card-content">
            <h1 className="card-title">Data Engineering</h1>
            <hr style={{ width: "300px" }}></hr>

            <div className="card-content">
              <a href="#">Enroll Now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img[2]} alt="card" className="card-image"></img>
          <div className="card-content">
            <h1 className="card-title">Fullstack Development</h1>
            <hr style={{ width: "300px" }}></hr>

            <div className="card-content">
              <a href="#">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <h1>
          What is Whitebox<br></br> Learning?
        </h1>
        <p>
          Whitebox Learning (WBL) is a classroom and online based training
          <br></br> for developers and ML & data engineers.
        </p>
        <div className="grid-container1">
          <div className="grid-column">
            <i class="fa-solid fa-gear fa-5x"></i>
            <h2 className="h22">Instructor led classroom training</h2>

            <p style={{ marginTop: "-30px", marginLeft: "-15px" }}>
              Elevate your skills with our engaging instructor-led classroom
              training sessions, designed to foster meaningful learning
              experiences.
            </p>
          </div>
          <div className="grid-column">
            <i class="fa-solid fa-folder fa-5x"></i>
            <h2>Online access using webinars</h2>
            <p style={{ marginTop: "1px", marginLeft: "-15px" }}>
              Gain convenient access to valuable knowledge through
              interactivewebinars, empowering you to learn anytime, anywhere.
            </p>
          </div>
          <div className="grid-column">
            <i class="fa-solid fa-keyboard fa-5x"></i>
            <h2>Portals for every course</h2>
            <p style={{ marginTop: "1px", marginLeft: "-15px" }}>
              Explore dedicated portals for each course, providing seamless
              access to comprehensive resources and materials tailored to your
              learning journey.
            </p>
          </div>
          <div className="grid-column">
            <i class="fa-solid fa-window-restore fa-5x"></i>
            <h2>Online Recordings</h2>
            <p style={{ marginTop: "1px", marginLeft: "-15px" }}>
              Access our library of online recordings, ensuring you never miss a
              session and can review course material at your convenience.
            </p>
          </div>
          <div className="grid-column">
            <i class="fa-solid fa-file fa-5x"></i>
            <h2>Timed Quiz and Video Interviews</h2>
            <p style={{ marginTop: "-30px", marginLeft: "-15px" }}>
              Engage in timed quizzes and video interviews, sharpening your
              skills and preparing you for real-world challenges with
              interactive assessments.
            </p>
          </div>
          <div className="grid-column">
            <i class="fa-solid fa-barcode fa-5x"></i>
            <h2>Practice with Group mocks</h2>
            <p style={{ marginTop: "-10px", marginLeft: "-15px" }}>
              Participate in instructor-led group mock sessions, simulating
              real-world scenarios to refine your skills and boost your
              confidence.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
