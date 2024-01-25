import "./Header.css";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import arrowDownImg from "../../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="container">
      <nav>
        <img src={logo} alt="Site Logo" />
        <button onClick={() => setIsActive(!isActive)}>
          <img src={hamburger} alt="Hamburger menu button" />
        </button>
        <ul className={isActive ? "active" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <h1>We Are Creatives!</h1>
      <img className="arrow-down" src={arrowDownImg} alt="" />
    </header>
  );
};

export default Header;
