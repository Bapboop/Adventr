import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot-container">
      <div className="foot-info">
        <li>React</li>
        <li>Redux</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JSON API</li>
        <li>Git</li>
      </div>

      <div className="foot-links">
        <li>
          <a
            className="atag-color"
            href="https://www.linkedin.com/in/robert-popphan-0b6711126/"
            target="_blank"
          >
            Robert Popphan
          </a>
        </li>
        <li className="white-line">|</li>
        <li>©2022 Adventr</li>
        <li className="white-line">|</li>
        <li>
          <a
            className="atag-color"
            href="https://github.com/Bapboop"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
