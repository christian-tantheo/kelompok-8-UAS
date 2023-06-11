import React from "react";
import { Link } from "react-router-dom";
import "../Styles.css";

function Navbar() {
  return (
    <div>
      <header>
        <h1>Pesona</h1>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Map">Map</Link>
          <Link to="/Weather">Weather</Link>
          <Link to="/About">About Us</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
