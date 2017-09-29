import React from 'react';
import { Link } from 'react-router-dom';


const SearchItem = ({poem}) => {
  let poemTitle;
  if (poem.title.length > 20) {
    poemTitle = poem.title.slice(0,17) + '...';
  } else {
    poemTitle = poem.title;
  }

  return (
  <li className="poem-index-item search">
    <Link className="poem-item-link search" to={`/poets/${poem.author_id}/poems/${poem.id}`}>
      <div className="poem-item-container search">
        <span className="poem-item-span search" >{poem.title}</span>
        <span className="poem-item-author search">{poem.author}</span>
      </div>
    </Link>
  </li>
);};


export default SearchItem;
