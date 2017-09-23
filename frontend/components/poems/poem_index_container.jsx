import React from 'react';
import { connect } from 'react-redux';
import { fetchPoems } from '../../actions/poem_actions';
import PoemIndex from './poem_index';


const mapStateToProps = (state, ownProps) => {

  console.log(
    );

  return ({
    poetId: ownProps.poetId,
    // FIND ONLY THE POEMS BELONGING TO THIS AUTHOR
    poems: Object.values(state.poems).filter( (poem) => {
      if (poem.author_id === parseInt(ownProps.poetId)) {
        return poem;
      }
    })
  });
};


const mapDispatchToProps = (dispatch) => ({
  fetchPoems: (id) =>  dispatch(fetchPoems(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemIndex);
