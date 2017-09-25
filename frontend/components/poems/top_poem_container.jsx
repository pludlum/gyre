import React from 'react';
import { connect } from 'react-redux';
import { fetchTopPoems } from '../../actions/top_poem_actions';
import TopPoemIndex from './top_poem_index';


const mapStateToProps = (state, ownProps) => ({
  topPoems: Object.values(state.topPoems) || []
});


const mapDispatchToProps = (dispatch) => ({
  fetchTopPoems: () =>  dispatch(fetchTopPoems()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPoemIndex);
