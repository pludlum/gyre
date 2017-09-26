import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS, DESTROY_ANNOTATION} from "../actions/annotation_actions";
import merge from 'lodash/merge';



const AnnotationsReducer = (annoState = [], action) => {
  Object.freeze(annoState);
  let newState;
  switch(action.type) {
    case RECEIVE_ANNOTATIONS:
      newState = merge({}, action.annotations);
      return newState;
    case RECEIVE_ANNOTATION:
      newState = merge({}, annoState);
      newState[action.annotation.id] = action.annotation;
      return newState;
    case DESTROY_ANNOTATION:
      newState = merge({}, annoState);
      delete newState[action.annotation.id];
      return newState;
    default:
      return annoState;
  }
};

export default AnnotationsReducer;
