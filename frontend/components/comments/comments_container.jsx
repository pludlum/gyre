import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, createComment, removeComment } from '../../actions/comment_actions';
import Comments from './comments';


const mapStateToProps = (state, ownProps) => ({
  annotationId: state.currentAnno[0].id,
  comments: Object.values(state.comments) || [],

});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: (annotationId) => dispatch(fetchComments(annotationId)),
  createComment: (annotationId, comment) => dispatch(fetchComments(annotationId, comment)),
  removeComment: id => dispatch(removeComment(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
