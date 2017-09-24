import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PoetsReducer from './poets_reducer';
import PoemsReducer from './poems_reducer';
import AnnotationsReducer from './annotations_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  poets: PoetsReducer,
  poems: PoemsReducer,
  annotations: AnnotationsReducer
});

export default RootReducer;
