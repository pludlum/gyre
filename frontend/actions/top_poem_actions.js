import { topPoemsGET} from '../util/poetry_api_util';


export const RECEIVE_TOP_POEMS = 'RECEIVE_TOP_POEMS';


export const receiveTopPoems = (poems) => ({
  type: RECEIVE_TOP_POEMS,
  poems
});


export const fetchTopPoems = () => dispatch => (
  topPoemsGET().then( poems => (
    dispatch(receiveTopPoems(poems))
  ))
);
