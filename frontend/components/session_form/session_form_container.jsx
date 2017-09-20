import { connect } from 'react-redux';
import { sessionPOST, usersPOST, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';



const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});


const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = "signup";
  let action = usersPOST;

  if (ownProps.location.pathname === "/login") {
    formType = "signin";
    action = sessionPOST;
  }
  return {
    submitForm: user => dispatch(action(user)),
    sessionPOST: user => dispatch(sessionPOST(user)),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
