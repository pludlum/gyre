import { poemsGET, poemGET} from '../util/poetry_api_util';

export const RECEIVE_POEM = 'RECEIVE_POEM';
export const RECEIVE_POEMS = 'RECEIVE_POEMS';


export const receivePoem = (poem) => ({
  type: RECEIVE_POEM,
  poem
});

export const receivePoems = (poems) => ({
  type: RECEIVE_POEMS,
  poems
});

export const fetchPoem = id => dispatch => (
  poemGET(id).then( (poem) => dispatch(receivePoem(poem)) )
);

export const fetchPoems = (id) => dispatch => (
  poemsGET(id).then( poems => (
    dispatch(receivePoems(poems))
  ))
);
