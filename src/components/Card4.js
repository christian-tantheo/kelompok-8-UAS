import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import lembahBaliem from "../provinsi/Image/Tigapuluhenam/lembah baliem.jpg";

const Card4 = () => {
  const cardsData = [
    {
      image: lembahBaliem,
      title: "Papua Pegunungan"
    }
  ];
  return (
    <Link to="/Papua-Pegunungan">
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

export default Card4;
