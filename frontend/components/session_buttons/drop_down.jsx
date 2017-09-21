//
// NOT IN USE --- SESSION BUTTONS NEED
//      REFACTOR TO IMPLEMENT


import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="dropdown-container" >
      <ul className="dropdown">
        <li>
          {this.props.currentUser}
        </li>
        <li><button onClick={this.sessionDELETE}>
          Sign Out</button>
        </li>
      </ul>
    </div>
  );
  }

}

export default DropDown;
