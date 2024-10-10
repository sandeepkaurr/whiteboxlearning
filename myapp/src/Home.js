import React, { useState } from "react";
import Header from "./Header";
import "./Style.css";

function Home() {
  const images = [
    "https://picsum.photos/800/400/?blur",

    "https://picsum.photos/id/1/800/400",
    "https://picsum.photos/800/400",
    "https://picsum.photos/seed/picsum/800/400",
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

  return (
    <>
      <Header></Header>

      <div className="slider"></div>
      <h1>Whitebox Learning</h1>
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
      <div></div>
    </>
  );
}

export default Home;
