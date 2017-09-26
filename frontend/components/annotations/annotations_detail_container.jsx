import React from 'react';
import { connect } from 'react-redux';
import AnnotationDetail from './annotations_detail';
import {deleteAnnotation, removeAnnotation} from '../../actions/annotation_actions';


const mapStateToProps = (state, ownProps) => ({
  annotation: state.currentAnno[0]
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
  removeAnnotation: () => dispatch(removeAnnotation())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationDetail);
