import React from 'react';
import SessionButtonsContainer from './session_buttons/session_buttons_container';
import SessionFormContainer from './session_form/session_form_container';
import PoetIndexContainer from './poets/poets_index_container';
import PoetDetailContainer from './poets/poet_detail_container';
import AuthRoute from '../util/route_util';


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="app">
    <div className="nav-bar-div">
      <header className="nav-header">
        <SessionButtonsContainer />
      </header>
    </div>

    <div className="component-container">
      <Switch>
        <Route exact path="/" component={PoetIndexContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/poets/:poetId" component={PoetDetailContainer} />
      </Switch>
    </div>

  </div>
);

export default App;
