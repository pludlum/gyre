import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import Comments from './comments';


const mapStateToProps = (state, ownProps) => ({
  annotationId: state.currentAnno[0].id,
  comments: Object.values(state.comments) || [],
  currentUserId: state.session.currentUser.id

});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: (annotationId) => dispatch(fetchComments(annotationId)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
