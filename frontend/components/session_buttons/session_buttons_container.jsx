import { connect } from 'react-redux';
import { sessionDELETE, clearErrors } from '../../actions/session_actions';
import SessionButtons from './session_buttons';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sessionDELETE: () => dispatch(sessionDELETE()),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
