import { commentPOST, commentDELETE, commentINDEX } from '../util/comment_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});


export const fetchComments = (annotationId) => dispatch => {
  commentINDEX(annotationId).then(
    (comments) => dispatch(receiveComments(comments))
  );

};

export const deleteComment = id => dispatch => {
  commentDELETE(id).then(
    comment => dispatch(removeComment(comment))
  );
};

export const createComment = (newComment) => dispatch => {
  commentPOST(newComment).then(
    (comment) => dispatch(receiveComment(comment))
  );
};
