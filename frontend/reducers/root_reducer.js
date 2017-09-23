import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PoetsReducer from './poets_reducer';
import PoemsReducer from './poems_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  poets: PoetsReducer,
  poems: PoemsReducer
});

export default RootReducer;
