import React from "react";
import "./Footer.css";

function Footer() {

  return (
    <div className='foot-container'>
      <div className='foot-info'>
        <li>Temp1</li>
        <li>Temp2</li>
        <li>Temp3</li>
        <li>Temp4</li>
        <li>Temp5</li>
      </div>

      <div className='foot-links'>
        <li>Robert Popphan</li>
        <li>Adventr</li>
        <li>
        <i className="fab fa-github" />
        </li>
      </div>

    </div>
  )
}

export default Footer;
