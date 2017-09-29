import { poemsSEARCH} from '../util/poetry_api_util';


export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';


export const receiveResults = (poems) => ({
  type: RECEIVE_RESULTS,
  poems
});

export const clearResults = () => ({
  type: CLEAR_RESULTS,
});


export const fetchResults = (query) => dispatch => (
  poemsSEARCH(query).then( poems => (
    dispatch(receiveResults(poems))
  ))
);
