import { annoGET, annoDELETE, annoPOST, annoPATCH, annosGET } from '../util/annotations_api_util';



export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';
export const DESTROY_ANNOTATION = 'DESTROY_ANNOTATION';



export const receiveAnnotations = (annotations) => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});

export const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const removeAnnotation = () => ({
  type: REMOVE_ANNOTATION,
});

export const destroyAnnotation = (annotation) => ({
  type: DESTROY_ANNOTATION,
  annotation
});


export const fetchAnnotations = (poetId, poemId) => dispatch => (
  annosGET(poetId, poemId).then( annotations => dispatch(receiveAnnotations(annotations)) )
);

export const fetchAnnotation = (id) => dispatch => (
  annoGET(id).then( annotation => dispatch(receiveAnnotation(annotation)) )
);

export const deleteAnnotation = (id) => dispatch => (
  annoDELETE(id).then( annotation => dispatch(destroyAnnotation(annotation)) )
);

export const updateAnnotation = (newAnnotation) => dispatch => (
  annoPATCH(newAnnotation).then( annotation => dispatch(receiveAnnotation(annotation)) )
);

export const createAnnotation = (newAnnotation) => dispatch => (
  annoPOST(newAnnotation).then( annotation => dispatch(receiveAnnotation(annotation)) )
);
