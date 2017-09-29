import {RECEIVE_RESULTS, CLEAR_RESULTS} from "../actions/search_actions";
import merge from 'lodash/merge';



const SearchReducer = (searchState = {}, action) => {
  Object.freeze(searchState);
  let newState;
  switch(action.type) {
    case RECEIVE_RESULTS:
      newState = merge({}, action.poems);
      return newState;
    case CLEAR_RESULTS:
      newState = {};
      return newState;
    default:
      return searchState;
  }
};

export default SearchReducer;
