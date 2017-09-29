import React from 'react';
import SessionButtonsContainer from './session_buttons/session_buttons_container';
import SessionFormContainer from './session_form/session_form_container';
import PoetIndexContainer from './poets/poets_index_container';
import PoetDetailContainer from './poets/poet_detail_container';
import PoemDetailContainer from './poems/poem_detail_container';
import AllPoemsContainer from './poets/all_poems_by_poet_container';
import HomepageContainer from './home/homepage_container';
import {AuthRoute, ProtectRoute} from '../util/route_util';


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
        <ProtectRoute exact path="/" component={HomepageContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectRoute exact path="/poets" component={PoetIndexContainer} />
        <ProtectRoute exact path="/poets/:poetId" component={PoetDetailContainer} key={`${Date.now()}`} />
        <ProtectRoute exact path="/poets/:poetId/poems" component={AllPoemsContainer} />
        <ProtectRoute path="/poets/:poetId/poems/:poemId" component={PoemDetailContainer} key={`${Date.now()}`} />
      </Switch>
    </div>

  </div>
);

export default App;
