import React from 'react';
import { connect } from 'react-redux';
import {fetchPoets} from '../../actions/poet_actions';
import PoetIndex from './poet_index';


const mapStateToProps = (state, ownProps) => ({
  poets: Object.values(state.poets)
});


const mapDispatchToProps = (dispatch) => ({
  fetchPoets: () =>  dispatch(fetchPoets()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoetIndex);
