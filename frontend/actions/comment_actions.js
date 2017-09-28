import { commentPOST, commentDELETE, commentINDEX } from '../util/comment_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});


export const fetchComments = (annotationId) => dispatch => {
  commentINDEX(annotationId).then(
    (comments) => dispatch(receiveComments(comments))
  );

};

export const deleteComments = id => dispatch => {
  commentDELETE(id).then(
    comment => dispatch(removeComment(comment))
  );
};

export const createComment = (annotationId, comment) => dispatch => {
  commentPOST(comment).then(
    fetchComments(annotationId)
  );
};
