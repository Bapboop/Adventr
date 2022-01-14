import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="navbar-container">
      <ul>
        <nav className="navbar-ele">
          <div className="left-container">
            <NavLink exact to="/">
              <img
                className="logo"
                src="https://res.cloudinary.com/dd9qejhag/image/upload/v1642147321/Adventr/imageedit_1_5509939165_crvhr5.png"
              />
            </NavLink>
            <NavLink exact to="/photostream">
              <li style={{color: "rgb(141, 176, 130)"}} className="photostream">Your photostream</li>
            </NavLink>
          </div>

          <div className="center-container">
            {/* <input type="text" placeholder="Photos, people, or groups" /> */}
          </div>
          <li></li>
          <div className="right-container">{isLoaded && sessionLinks}</div>
        </nav>
      </ul>
    </div>
  );
}

export default Navigation;
