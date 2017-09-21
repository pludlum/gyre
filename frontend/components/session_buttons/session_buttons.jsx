import React from 'react';
import { Link } from 'react-router-dom';
import TitleSmall from '../title/title_small';



const signedOutButtons = (clearErrors) => (
  <nav className="signup-signin-nav out">
    <div className="nav-bar left out"></div>
    <div className="nav-bar center out">
      <TitleSmall />
    </div>
    <div className="nav-bar right out">
      <Link className="session-link-button" onClick={clearErrors} to="/login">
          Sign In
      </Link>
      <Link className="session-link-button" onClick={clearErrors} to="/signup">
          Sign Up
      </Link>
    </div>
  </nav>
);

const signedIn = (currentUser, sessionDELETE) => (
  <nav className="signup-signin-nav">
    <div className="nav-bar left"></div>

    <div className="nav-bar center">
      <TitleSmall />
    </div>

    <div className="nav-bar right">
      <div className="avatar-container">
        <button className="sesssion-sign-out-button"
        onClick={sessionDELETE}
        ><img className="avatar" src={currentUser.img_url} title="Sign Out"></img>
        </button>
      </div>
    </div>
  </nav>
);


const SessionButtons = ({currentUser, sessionDELETE, clearErrors}) => {
  if (currentUser) {
    return signedIn(currentUser, sessionDELETE);
  } else {
    return signedOutButtons(clearErrors);
  }
};

export default SessionButtons;
