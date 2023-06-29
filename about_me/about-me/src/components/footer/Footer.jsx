import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/tautvydas-bli%C5%ABd%C5%BEius-7b28931b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={35} />
        </a>
        <a
          href="https://github.com/KaldraAntPaklodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={35} />
        </a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Tautvydas Bliudzius. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;