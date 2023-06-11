import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import perairanKwatisore from "../provinsi/Image/Tigapuluhlima/perairan kwatisore.jpg";

const Card3 = () => {
  const cardsData = [
    {
      image: perairanKwatisore,
      title: "Papua Tengah"
    }
  ];
  return (
    <Link to="/Papua-Tengah">
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

export default Card3;
