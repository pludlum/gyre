import {RECEIVE_COMMENTS, REMOVE_COMMENT, RECEIVE_COMMENT} from "../actions/comment_actions";
import merge from 'lodash/merge';



const CommentsReducer = (commentState = [], action) => {
  Object.freeze(commentState);
  let newState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState = merge({}, action.comments);
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, commentState);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, commentState);
      delete newState[action.comment.id];
      return newState;
    default:
      return commentState;
  }
};

export default CommentsReducer;
