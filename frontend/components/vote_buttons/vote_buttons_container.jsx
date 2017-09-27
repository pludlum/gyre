import React from 'react';
import { connect } from 'react-redux';
import {voteDELETE, votePOST} from '../../util/vote_api_util';
import VoteButtons from './vote_buttons';


const mapStateToProps = (state, ownProps) => {
  let votes = state.currentAnno[0].votes;
  let currentValue = 0;
  let currentVote;

  for (var i = 0; i < votes.length; i++) {
    if (votes[i].user_id === state.session.currentUser.id) {
      currentValue = votes[i].value;
    }
  }
  return {
    annotationRating: state.currentAnno[0].rating,
    voteDELETE: () => voteDELETE(state.currentAnno[0].id),
    votePOST: (value) => votePOST({annotation_id: state.currentAnno[0].id, user_id: state.session.currentUser.id, value: value }),
    currentValue: currentValue
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteButtons);
