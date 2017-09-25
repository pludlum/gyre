import React from 'react';
import { Link } from 'react-router-dom';


const TopPoemItem = ({poem}) => {

  return (
  <li className="poem-index-item">
    <Link className="poem-item-link" to={`/poets/${poem.author_id}/poems/${poem.id}`}>
      <div className="poem-item-container">
        <span className="poem-item-span" >{poem.title}</span>
      </div>
    </Link>
  </li>
);};


export default TopPoemItem;
