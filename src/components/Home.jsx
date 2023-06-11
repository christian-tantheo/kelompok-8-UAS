import React from "react";
import videoFile from "../images/slider.mp4";
import "./Home.css";

function Home() {
  return (
    <div>
      <video playsInline autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Om dan Adek - Adek</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
