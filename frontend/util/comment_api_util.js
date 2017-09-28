export const commentPOST = (comment) => (
  $.ajax({
    method: 'POST',
    url: `api/comments/`,
    data: {comment: comment}
  })
);

export const commentDELETE = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);


export const commentINDEX = (annotationId) => (
  $.ajax({
    method: 'GET',
    url: `api/annotations/${annotationId}/comments`
  })
);
