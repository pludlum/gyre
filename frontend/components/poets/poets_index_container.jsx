import React from 'react';
import { connect } from 'react-redux';
import {fetchPoets, fetchPoet} from '../../actions/poet_actions';
import PoetIndex from './poet_index';


const mapStateToProps = (state, ownProps) => ({
  poets: Object.values(state.poets)
});


const mapDispatchToProps = (dispatch) => ({
  fetchPoets: () =>  dispatch(fetchPoets()),
  fetchPoet: (id) => dispatch(fetchPoet(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoetIndex);
