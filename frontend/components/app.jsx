import React from 'react';
import SessionButtonsContainer from './session_buttons/session_buttons_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <SessionButtonsContainer />
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
