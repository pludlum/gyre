import {RECEIVE_POET, RECEIVE_POETS} from "../actions/poet_actions";
import merge from 'lodash/merge';



const PoetsReducer = (poetState = {}, action) => {
  Object.freeze(poetState);
  let newState;
  switch(action.type) {
    case RECEIVE_POET:
      newState = merge({}, poetState);
      newState[action.poet.id] = action.poet;
      return newState;
    case RECEIVE_POETS:
      newState = merge({}, poetState, action.poets);
      return newState;
    default:
      return poetState;
  }
};

export default PoetsReducer;
