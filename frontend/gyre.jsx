import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import * as SessionAPIUtil from './util/session_api_util';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});

window.SessionAPIUtil = SessionAPIUtil;
