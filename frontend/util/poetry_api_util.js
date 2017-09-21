
export const poemsGET = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/poets/${id}`
  })
);
