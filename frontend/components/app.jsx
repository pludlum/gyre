import React from 'react';
import SessionButtonsContainer from './session_buttons/session_buttons_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import Title from './title/title';

const App = () => (
  <div>
    <header>
      <SessionButtonsContainer />
    </header>

    <div className="session-page">
      <Route path="/login" component={Title} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={Title} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>

  </div>
);

export default App;
