import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import CardData from "./CardsData";

    const Main = ({ title, description}) => {
    return(
        <div className="mainBg">
            <h2>{title}</h2>
            <p className="mainDescription">{description}</p>
            <div className="cards">
                <Card data={CardData} />            
            </div>
        </div>
    )
}


Main.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Main