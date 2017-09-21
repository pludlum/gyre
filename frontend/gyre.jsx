import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchPoet, fetchPoets } from './actions/poet_actions';
import {poetsGET} from './util/poetry_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {

    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});

window.poetsGET = poetsGET;
window.fetchPoet = fetchPoet;
window.fetchPoets = fetchPoets;
