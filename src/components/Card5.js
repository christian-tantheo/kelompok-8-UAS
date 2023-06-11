import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import museumkebudayaanAsmat from "../provinsi/Image/Tigapuluhtujuh/museum kebudayaan asmat.jpg";

const Card5 = () => {
  const cardsData = [
    {
      image: museumkebudayaanAsmat,
      title: "Papua Selatan"
    }
  ];
  return (
    <Link to="/Papua-Selatan">
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

export default Card5;
