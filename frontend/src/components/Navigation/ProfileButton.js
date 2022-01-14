import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink, useHistory } from "react-router-dom";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const signout = (e) => {
    e.preventDefault();
    history.push('/')
    return dispatch(sessionActions.signout());
    // history.push('/')
  };

  return (
    <div className="active">
      <NavLink className="uploadCloud" to="/images/new">
          <img
            className='cloud'
            alt="upload-cloud"
            src={
              "https://res.cloudinary.com/dd9qejhag/image/upload/v1642111799/Adventr/flickr-cloud_f4tovr.png"
            }
          />
      </NavLink>
      <button onClick={openMenu}>
        <i className="fas fa-globe-americas" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>

              <button onClick={signout}>Log Out</button>




          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
