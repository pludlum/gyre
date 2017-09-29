import React from 'react';
import { Link } from 'react-router-dom';


const TopPoemItem = ({poem}) => {
  // let poemTitle;
  // if (poem.title.length > 35) {
  //   poemTitle = poem.title.slice(0,32) + '...';
  // } else {
  //   poemTitle = poem.title;
  // }

  return (
  <li className="poem-index-item">
    <Link className="poem-item-link" to={`/poets/${poem.author_id}/poems/${poem.id}`}>
      <div className="poem-item-container">
        <span className="poem-item-span" >{poem.title}</span>
        <span className="poem-item-author">{poem.author}</span>
      </div>
    </Link>
  </li>
);};


export default TopPoemItem;
