import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchPoem, fetchPoems } from './actions/poem_actions';
import {poemsGET, poemGET} from './util/poetry_api_util';


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

window.poemsGET = poemsGET;
window.poemGET = poemGET;
window.fetchPoem = fetchPoem;
window.fetchPoems = fetchPoems;
