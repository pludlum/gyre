import {RECEIVE_POEM, RECEIVE_POEMS} from "../actions/poem_actions";
import merge from 'lodash/merge';



const PoemsReducer = (poemState = {}, action) => {
  Object.freeze(poemState);
  let newState;
  switch(action.type) {
    case RECEIVE_POEM:
      newState = merge({}, poemState);
      newState[action.poem.id] = action.poem;
      return newState;
    case RECEIVE_POEMS:
      newState = merge({}, poemState, action.poems);
      return newState;
    default:
      return poemState;
  }
};

export default PoemsReducer;
