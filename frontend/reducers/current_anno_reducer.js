import {RECEIVE_ANNOTATION, REMOVE_ANNOTATION} from "../actions/annotation_actions";
import merge from 'lodash/merge';


const CurrentAnnoReducer = (currentAnnoState = [], action) => {
  Object.freeze(currentAnnoState);
  let newState;
  switch(action.type) {
    case RECEIVE_ANNOTATION:
      let anno = merge({}, action.annotation);
      newState = [anno];
      return newState;
    case REMOVE_ANNOTATION:
      newState = {};
      return newState;
    default:
      return currentAnnoState;
  }
};

export default CurrentAnnoReducer;
