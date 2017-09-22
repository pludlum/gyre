import React from 'react';
import { connect } from 'react-redux';
import {fetchPoet} from '../../actions/poet_actions';
import PoetDetail from './poet_detail';


const mapStateToProps = (state, ownProps) => ({
  poetId: ownProps.match.params.poetId,
  poet: state.poets[ownProps.match.params.poetId]
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPoet: (id) => dispatch(fetchPoet(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoetDetail);
