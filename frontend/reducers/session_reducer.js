import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (sessionState = _nullUser, action) => {

  Object.freeze(sessionState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, { currentUser });
    default:
      return sessionState;
  }
};

export default SessionReducer;
