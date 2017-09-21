import { poemsGET } from '../util/poetry_api_util';


export const RECEIVE_POET = 'RECEIVE_POET';


export const receivePoet = (poet) => ({
  type: RECEIVE_POET,
  poet
});

export const fetchPoet = id => dispatch => {
  poemsGET(id).then( (poet) => receivePoet(poet) );
};
