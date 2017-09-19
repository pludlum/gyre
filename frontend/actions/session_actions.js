import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const usersPOST = newUser => dispatch => (
  SessionAPIUtil.signUp(newUser).then( user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const sessionPOST = newUser => dispatch => (
  SessionAPIUtil.signIn(newUser).then( user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const sessionDELETE = () => dispatch => (
  SessionAPIUtil.signOut().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
