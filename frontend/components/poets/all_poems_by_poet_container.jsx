import React from 'react';
import { connect } from 'react-redux';
import {fetchPoet} from '../../actions/poet_actions';
import allPoems from './all_poem_by_poet';


const mapStateToProps = (state, ownProps) => ({
  poetId: ownProps.match.params.poetId,
  poet: state.poets[ownProps.match.params.poetId],
  poems: state.poems
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPoet: (id) => dispatch(fetchPoet(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(allPoems);
