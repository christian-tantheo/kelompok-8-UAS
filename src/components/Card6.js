import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import danauFramu from "../provinsi/Image/Tigapuluhdelapan/danau framu.jpg";

const Card6 = () => {
  const cardsData = [
    {
      image: danauFramu,
      title: "Papua Barat Daya"
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
      </div>
    </Link>
  );
};

export default Card6;
