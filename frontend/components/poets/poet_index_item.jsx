import React from 'react';
import { Link } from 'react-router-dom';


const PoetItem = ({poet}) => {

  return (
  <li className="poet-index-item">
    <Link className="poet-item-link" to={`/poets/${poet.id}`}>
      <div className="index-img-container">
        <img className="poet-index-img" src={poet.img_url} />
      </div>
      <span className="divider" ></span>
      <span className="poet-index-name">{poet.name}</span>
    </Link>
  </li>
);};


export default PoetItem;
