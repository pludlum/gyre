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
        <div className="leftside">
          <div className="poet-portrait-container">
            <div className="poet-portrait-frame smaller">
              <img className="poet-portait" src={poem.poet.img_url} ></img>
            </div>
          </div>
          <div className="poem-title-container">
            <span className="poem-item-span" >{poem.title}</span>
          </div>
        </div>
        <div className="rightside">
          <span className="poem-item-author">{poem.author}</span>
        </div>
      </div>
    </Link>
  </li>
);};


export default TopPoemItem;
