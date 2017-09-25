import React from 'react';
import { connect } from 'react-redux';
import {fetchPoem} from '../../actions/poem_actions';
import {fetchPoet} from '../../actions/poet_actions';
import {fetchAnnotations} from '../../actions/annotation_actions';
import PoemDetail from './poem_detail';


const mapStateToProps = (state, ownProps) => ({
  poetId: ownProps.match.params.poetId,
  poet: state.poets[ownProps.match.params.poetId],
  poemId: ownProps.match.params.poemId,
  poem: state.poems[ownProps.match.params.poemId],
  annotations: Object.values(state.annotations) || []

});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPoet: (id) => dispatch(fetchPoet(id)),
  fetchPoem: (id) => dispatch(fetchPoem(id)),
  fetchAnnotations: (poetId, poemId) => dispatch(fetchAnnotations(poetId, poemId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemDetail);
