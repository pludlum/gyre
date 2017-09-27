import React from 'react';
import { connect } from 'react-redux';
import {voteDELETE, votePOST, votePATCH} from '../../util/vote_api_util';
import VoteButtons from './vote_buttons';



const mapStateToProps = (state, ownProps) => {
  let votes = state.currentAnno[0].votes;
  let currentValue = 0;
  let currentVote = null;

  for (var i = 0; i < votes.length; i++) {
    if (votes[i].user_id === state.session.currentUser.id) {
      currentValue = votes[i].value;
      currentVote = votes[i];
    }
  }

  return {
    annotationId: state.currentAnno[0].id,
    currentUserId: state.session.currentUser.id,
    annotationRating: state.currentAnno[0].rating,
    voteDELETE: (id) => voteDELETE(id),
    votePOST: (vote) => votePOST(vote),
    votePATCH: (vote) => votePATCH(vote),
    currentValue: currentValue,
    currentVote: currentVote
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAnnotation: (id) => dispatch(fetchAnnotation(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteButtons);
