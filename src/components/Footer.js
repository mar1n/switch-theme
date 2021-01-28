import React from "react";
import "./Footer.css";
import { ReactComponent as Email } from "../icons/at.svg";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div>© 2021 Szymon Dawidowicz</div>
        </div>
        <div className="footer-right">
          <div className="footer-item">
            <a
              href={`https://www.linkedin.com/in/szymon-dawidowicz`}
              className="footer-button"
            >
              <Linkedin />
            </a>
          </div>
          <div className="footer-item">
            <a href={`https://github.com/mar1n/`} className="footer-button">
              <Github />
            </a>
          </div>
          <div className="footer-item">
            <a
              href={`mailto:sztm0nd4widowicz@gmail.com`}
              className="footer-button"
            >
              <Email />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
