import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./FlipCard.css";
import person1 from "../images/stevenlie.jpg";
import person2 from "../images/christiantantheo.jpg";
import person4 from "../images/gavinprasetya.jpg";
import person3 from "../images/seanmarcello.jpg";
import backImage from "../images/umn.png";

const cardData = [
  {
    name: "Steven Lie",
    image: person1,
    backImage: backImage,
    instagram: "https://www.instagram.com/nevetslie/"
  },
  {
    name: "Christian Tantheo",
    image: person2,
    backImage: backImage,
    instagram: "https://www.instagram.com/christiantantheo"
  },
  {
    name: "Sean Marcello",
    image: person3,
    backImage: backImage,
    instagram: "https://www.instagram.com/seanmrcl"
  },
  {
    name: "Gavin Prasetya",
    image: person4,
    backImage: backImage,
    instagram: "https://www.instagram.com/gapin_p"
  }
];

const FlipCard = ({ name, image, description, backImage, instagram }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="" className="person" />
          <p className="title">{name}</p>
          <p>{description}</p>
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="" className="back-image" />
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon-container"
                style={{ fontSize: "2rem" }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      {cardData.map((card, index) => (
        <FlipCard
          key={index}
          name={card.name}
          image={card.image}
          description={card.description}
          backImage={card.backImage}
          instagram={card.instagram}
        />
      ))}
    </div>
  );
};

export default About;
