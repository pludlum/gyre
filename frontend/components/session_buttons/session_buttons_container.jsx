import { connect } from 'react-redux';
import { sessionDELETE, clearErrors } from '../../actions/session_actions';
import SessionButtons from './session_buttons';
import {clearResults } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sessionDELETE: () => dispatch(sessionDELETE()),
  clearErrors: () => dispatch(clearErrors()),
  clearResults: () => dispatch(clearResults())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
