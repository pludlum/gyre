import {RECEIVE_POET} from "../actions/poet_actions";
import merge from 'lodash/merge';



const PoetsReducer = (poetState = {}, action) => {
  Object.freeze(poetState);
  switch(action.type) {
    case RECEIVE_POET:
      let newState = merge({}, poetState);
      newState[action.poet.id] = action.poet;
  }
};
