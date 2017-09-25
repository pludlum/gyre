import {RECEIVE_TOP_POEMS} from "../actions/top_poem_actions";
import merge from 'lodash/merge';


const TopPoemsReducer = (topPoemState = {}, action) => {
  Object.freeze(topPoemState);
  let newState;
  switch(action.type) {
    case RECEIVE_TOP_POEMS:
      newState = merge({}, action.poems);
      return newState;
    default:
      return topPoemState;
  }
};

export default TopPoemsReducer;
