import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PoetsReducer from './poets_reducer';
import PoemsReducer from './poems_reducer';
import AnnotationsReducer from './annotations_reducer.js';
import TopPoemReducer from './top_poem_reducer';
import CurrentAnnoReducer from './current_anno_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  poets: PoetsReducer,
  poems: PoemsReducer,
  topPoems: TopPoemReducer,
  annotations: AnnotationsReducer,
  currentAnno: CurrentAnnoReducer
});

export default RootReducer;
