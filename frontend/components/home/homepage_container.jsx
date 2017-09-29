import React from 'react';
import { connect } from 'react-redux';
import {fetchPoets} from '../../actions/poet_actions';
import Home from './home';


const mapStateToProps = (state, ownProps) => ({
  poets: Object.values(state.poets)
});


const mapDispatchToProps = (dispatch) => ({
  fetchPoets: () =>  dispatch(fetchPoets()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
