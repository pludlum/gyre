import {combineReducers} from 'redux';
import SessionReducer from './sesion_reducer';
import ErrorsReducer from './errors_reducer';

const root_reducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default ErrorsReducer;
