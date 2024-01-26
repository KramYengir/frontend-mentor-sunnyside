import "./Header.css";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import arrowDownImg from "../../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    console.log("Active libk: ", linkName);
    setIsActive(false);
  };

  return (
    <header>
      <div className="container">
        <nav role="navigation" aria-label="Main menu" aria-expanded={isActive}>
          <img src={logo} alt="Site Logo" />
          <button onClick={() => setIsActive(!isActive)}>
            <img src={hamburger} alt="Hamburger menu button" />
          </button>
          <ul className={isActive ? "active" : ""}>
            <li>
              <a
                href="#about"
                className={activeLink == "#about" ? "active" : ""}
                onClick={() => handleLinkClick("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeLink == "#services" ? "active" : ""}
                onClick={() => handleLinkClick("#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink == "#projects" ? "active" : ""}
                onClick={() => handleLinkClick("#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink == "#contact" ? "active" : ""}
                onClick={() => handleLinkClick("#contacts")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          We Are <br /> Creatives!
        </h1>
        <img
          className="arrow-down"
          src={arrowDownImg}
          alt="Arrow pointing down"
        />
      </div>
    </header>
  );
};

export default Header;
