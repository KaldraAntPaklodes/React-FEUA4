import React from "react";
import PropTypes from "prop-types";

    const Header = ({ title, description}) => {
    return(
        <div className="header">
            <div className="headerBg"></div>
            <p className="title">{title}</p>
            <p className="headerText">{description}</p>
            <button>Button</button>
        </div>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Header