import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const SessionErrorsReducer = (errorsState = [], action) => {
  Object.freeze(errorsState);
  let newState = [];

  switch(action.type) {
    case RECEIVE_ERRORS:
      if (action.errors === undefined) {
        newState = ["Username already taken."];
      } else {
        newState = action.errors;
      }
      return newState;
    default:
      return errorsState;
  }
};

export default SessionErrorsReducer;
