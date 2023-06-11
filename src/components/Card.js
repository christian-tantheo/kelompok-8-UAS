import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import ampatImage from "../provinsi/Image/Tigapuluhtiga/raja ampat.jpg";

const Card = () => {
  const cardsData = [
    {
      image: ampatImage,
      title: "Papua Barat"
    }
  ];

  return (
    <Link to="/Papua-Barat-Daya">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={card.image} alt={card.title} />
            </div>
            <span className="title">{card.title}</span>
          </div>
        ))}
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </Link>
  );
};

export default Card;
