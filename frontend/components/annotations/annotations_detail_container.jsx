import React from 'react';
import { connect } from 'react-redux';
import AnnotationDetail from './annotations_detail';


const mapStateToProps = (state, ownProps) => ({
  annotation: state.currentAnno[0]
});


const mapDispatchToProps = (dispatch, ownProps) => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationDetail);
