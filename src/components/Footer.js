import "./Footer-styles.css";

import React from "react";
import {
  FaCss3,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaNpm,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>Cikarang Utara, Bekasi</p>
              <p>Indonesia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>+62 813 6889 9879</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaEnvelope
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>aryaagnipradana@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="instagram">
            <h4>
              <FaInstagram
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <Link
                to="https://www.instagram.com/_aryapdf/?hl=en"
                target="_blank"
              >
                <p>@_aryapdf</p>
              </Link>
            </div>
          </div>
          <div className="github">
            <h4>
              <FaGithub
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <Link to="https://github.com/aryapdf" target="_blank">
                <p>github.com/aryapdf</p>
              </Link>
            </div>
          </div>
          <div className="linkedin">
            <h4>
              <FaLinkedin
                size={25}
                style={{ color: "#cdd6f4", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <Link
                to="https://www.linkedin.com/in/aryaagnipradana/"
                target="_blank"
              >
                {" "}
                <p>in/aryaagnipradana</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="credit">
            <p>
              &#169;2024 <span>Arya Pradana</span>, Indonesia. Supported by :
            </p>
            <div className="logo">
              <FaHtml5 size={30} color="#cdd6f4" />
              <FaCss3 size={30} color="#cdd6f4" />
              <FaJs size={30} color="#cdd6f4" />
              <FaNpm size={30} color="#cdd6f4" />
              <FaNodeJs size={30} color="#cdd6f4" />
              <FaReact size={30} color="#cdd6f4" />
            </div>
          </div>
        </div>
      </div>
      <div className="rainbow"></div>
    </section>
  );
};

export default Footer;
