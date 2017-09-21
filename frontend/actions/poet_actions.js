import { poetsGET, poetGET } from '../util/poetry_api_util';

export const RECEIVE_POET = 'RECEIVE_POET';
export const RECEIVE_POETS = 'RECEIVE_POETS';


export const receivePoet = (poet) => ({
  type: RECEIVE_POET,
  poet
});

export const receivePoets = (poets) => ({
  type: RECEIVE_POETS,
  poets
});

export const fetchPoet = id => dispatch => (
  poetGET(id).then( (poet) => dispatch(receivePoet(poet)) )
);

export const fetchPoets = () => dispatch => (
  poetsGET().then( poets => (
    dispatch(receivePoets(poets))
  ))
);
