import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS, REMOVE_ANNOTATION} from "../actions/annotation_actions";
import merge from 'lodash/merge';



const AnnotationsReducer = (annoState = [], action) => {
  Object.freeze(annoState);
  let newState;
  switch(action.type) {
    case RECEIVE_ANNOTATIONS:
      newState = merge({}, annoState, action.annotations);
      return newState;
    default:
      return annoState;
  }
};

export default AnnotationsReducer;
