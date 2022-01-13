import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SplashBackground.css';

function SplashBackground() {
  const sessionUser = useSelector(state => state.session.user)
  if (sessionUser) return ( <Redirect to='/images' /> )


  return (
    <div className='splash-container'>
      <ul className='bg-slideshow'>
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
        <li>
          <span>Image 04</span>
        </li>
        <li>
          <span>Image 05</span>
        </li>

      </ul>

    </div>

  )
}

export default SplashBackground;
