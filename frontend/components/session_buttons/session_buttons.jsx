import React from 'react';
import { Link } from 'react-router-dom';


const signedOutButtons = () => (
  <nav className="signUp-signIn-nav">
    <Link to="/login">
      <div className="sessionLinkButton">
        Sign In
      </div>
    </Link>
    <Link to="/signup">
      <div className="sessionLinkButton">
        Sign Up
      </div>
    </Link>
  </nav>
);

const signedIn = (currentUser, sessionDELETE) => (
  <hgroup>
    <p>Image goes here</p>
    <button className="sesssionSignOutButton"
            onClick={sessionDELETE}
            >Sign Out</button>
  </hgroup>
);


const SessionButtons = ({currentUser, sessionDELETE}) => {
  if (currentUser) {
    return signedIn(currentUser, sessionDELETE);
  } else {
    return signedOutButtons();
  }
};

export default SessionButtons;
