import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const [userId, setUserId] = useState(1);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <header className="header">
      <div className="links">
        <Link to="/" className="link">
          Main
        </Link>
        <Link to="/users" className="link">
          Users
        </Link>
        <input type="number" value={userId} onChange={handleInputChange} className="user-input" />
        <Link to={`/user/${userId}`} className="link">
          Open selected User
        </Link>
      </div>
    </header>
  );
};

export default TopBar;