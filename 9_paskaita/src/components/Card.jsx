import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="cards">
      {data.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={card.imgAlt} />
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      imgAlt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;