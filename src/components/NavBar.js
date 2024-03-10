import "./NavBar-styles.css";

//Import React Feature
import React, { useState } from "react";
import { Link } from "react-router-dom";
//Import Icons
import { FaBars, FaTimes } from "react-icons/fa";

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
            <h1>
              Arya<span>Pradana</span>
            </h1>
          </div>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
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
