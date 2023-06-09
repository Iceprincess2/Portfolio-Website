import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import { FacebookShareButton } from "react-share";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>7, Asajon way, off Lekki/Epe Expressway,</p>
              <p>Sangotedo Lagos Island.</p>
              <p>Nigeria.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              +2348122788996
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              favouradjushi@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Adjushi Akpevwe Favour. Software Engineer. I am
            passionate about my work and a team player
          </p>
          <div className="social">
            <a href="https://www.facebook.com/favour.adjushi.7/">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/AdjushiF">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/favour-adjushi-060b86164/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/Iceprincess2?tab=repositories">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
