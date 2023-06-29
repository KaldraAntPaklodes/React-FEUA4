import "./Nav.css";
import { Link } from "react-router-dom"
import { BiSpa } from "react-icons/bi"

const Nav = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <BiSpa className="logo-icon" /> SPA
      </Link>
      <div className="links">
        <Link to="/aboutus" className="link">
          Apie mus
        </Link>
        <Link to="/spanews" className="link">
          Naujienos
        </Link>
        <Link to="/services" className="link">
          Paslaugos
        </Link>
        <Link to="/ourworks" className="link">
          Atlikti darbai
        </Link>
        <Link to="/contacts" className="link">
          Kontaktai
        </Link>
      </div>
    </header>
  );
};

export default Nav;