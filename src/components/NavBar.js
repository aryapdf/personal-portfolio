import "./NavBar-styles.css";

//Import React Feature
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import Feature
import Clock from "../feature/Clock";
//Import Icons
import { FaBars, FaTimes } from "react-icons/fa";

//Import Logo
import Viyo from "../assets/viyo-catp.png";

const NavBar = () => {
  //Hamburger Feature
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //Navbar Change color when scrolled
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={Viyo} alt="Logo Viyo" className="logo-viyo" />
          </div>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">
              <a href="home">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="date-time">
        <h4>Jakarta, Indonesia</h4>
        <p>
          <Clock />
        </p>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {
          //Call 'click' function
          click ? (
            <FaTimes size={25} style={{ color: "#cdd6f4" }} />
          ) : (
            <FaBars size={25} style={{ color: "#cdd6f4" }} />
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
