


export const votePOST = (vote) => (
  $.ajax({
    method: 'POST',
    url: `api/votes/`,
    data: {vote: vote}
  })
);

export const votePATCH = (vote) => (
  $.ajax({
    method: 'POST',
    url: `api/votes/`,
    data: {vote: vote}
  })
);


export const voteDELETE = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/votes/${id}`
  })
);
