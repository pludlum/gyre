import React from 'react';
import { connect } from 'react-redux';
import {createAnnotation, updateAnnotation, fetchAnnotations} from '../../actions/annotation_actions';
import AnnotationForm from './annotations_form';


const mapStateToProps = (state, ownProps) => ({
  start: ownProps.start,
  end: ownProps.end,
  poemId: ownProps.poemId,
  poetId: ownProps.poetId,
  currentUser: state.session.currentUser.id,
  formType: 'Create'
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  createAnnotation: (newAnno) => dispatch(createAnnotation(newAnno)),
  updateAnnotation: (newAnno) => dispatch(updateAnnotation(newAnno)),
  fetchAnnotations: (poetId, poemId) => dispatch(fetchAnnotations(poetId, poemId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
