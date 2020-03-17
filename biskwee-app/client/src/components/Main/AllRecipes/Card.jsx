import React from "react";

import "../../../css/Card.css";

const Card = props => {
  return (
    <div className="recipe-card">
      <span>{props.name}</span>
      <img src={`${props.image_url}`} alt={props.name} />
    </div>
  );
};

export default Card;
