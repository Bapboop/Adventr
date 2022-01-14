import React from "react";
import "./Footer.css";

function Footer() {

  return (
    <div className='foot-container'>
      <div className='foot-info'>
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

      <div className='foot-links'>
        <li>Robert Popphan</li>
        <li className='white'>|</li>
        <li>Adventr 2022 </li>
        <li className='white'>|</li>
        <li>
        {/* <a style="color:black;"><i className="fab fa-github"></i></a> */}
        <a style={{color: "rgb(141, 176, 130)"}} href='https://github.com/Bapboop' target='_blank' > <i className='fab fa-github' /></a>
        </li>
      </div>

    </div>
  )
}

export default Footer;
