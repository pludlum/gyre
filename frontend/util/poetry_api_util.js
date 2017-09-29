
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

export const poemGET = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/poems/${id}`
  })
);

export const poemsGET = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/poets/${id}/poems`
  })
);

export const topPoemsGET = () => (
  $.ajax({
    method: 'GET',
    url: `api/top_poems`
  })
);

export const poemsSEARCH = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/poems/search/${query}`
  })
);
