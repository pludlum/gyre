
export const poetGET = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/poets/${id}`
  })
);

export const poetsGET = () => (
  $.ajax({
    method: 'GET',
    url: `api/poets`
  })
);
