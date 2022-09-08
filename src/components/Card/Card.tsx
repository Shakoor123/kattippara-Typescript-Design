import React from "react";
import "./Card.css";
import net1 from "../../assets/net1.webp";
const Card = () => {
  return (
    <div className="card">
      <div className="cardWrapper">
        <div className="cardTop">
          <img src={net1} alt="" className="cardImage" />
        </div>
        <div className="cardBottom">
          <span className="thikNumber">Thikness:.23mm</span>
          <span className="HoleNumber">Hole size:32mm</span>
          <span className="price">Price:3500</span>
          <span className="arrow">arrow</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
