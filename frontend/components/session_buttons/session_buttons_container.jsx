import { connect } from 'react-redux';
import { sessionDELETE } from '../../actions/session_actions';
import SessionButtons from './session_buttons';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sessionDELETE: () => dispatch(sessionDELETE())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
