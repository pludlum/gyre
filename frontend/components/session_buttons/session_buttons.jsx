import React from 'react';
import { Link } from 'react-router-dom';


const signedOutButtons = () => (
  <nav className="signUp-signIn-nav">
    <div >
    <Link className="sessionLinkButton" to="/login">
        Sign In
    </Link>
  </div>
  <div>
    <Link className="sessionLinkButton" to="/signup">
        Sign Up
    </Link>
  </div>
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
