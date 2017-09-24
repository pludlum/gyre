
export const annosGET = (poetId, poemId) => (
  $.ajax({
    method: 'GET',
    url: `api/poets/${poetId}/poems/${poemId}/annotations`
  })
);

export const annoGET = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/annotations/${id}`
  })
);

export const annoDELETE = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/annotations/${id}`
  })
);

export const annoPOST = (annotation) => (
  $.ajax({
    method: 'POST',
    url: `api/annotations/`,
    data: {annotation: annotation}
  })
);

export const annoPATCH = (annotation) => (
  $.ajax({
    method: 'PATCH',
    url: `api/annotations/${annotation.id}`,
    data: {annotation: annotation}
  })
);
