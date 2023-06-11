import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import tamannasionalLorentz from "../provinsi/Image/Tigapuluhempat/taman nasional lorentz.jpg";

const Card2 = () => {
  const cardsData = [
    {
      image: tamannasionalLorentz,
      title: "Papua"
    }
  ];
  return (
    <Link to="/Papua1">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={card.image} alt={card.title} />
            </div>
            <span className="title">{card.title}</span>
          </div>
        ))}
      </div>
    </Link>
  );
};
export default Card2;
