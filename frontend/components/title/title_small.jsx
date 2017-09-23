import React from 'react';
import { Link } from 'react-router-dom';


const TitleSmall = () => (
  <Link className="title-link" to="/">
    <div className='title-container small'>
      <p className="notAwesome small">the  </p>
      <div className='gyre-container small'>
        <p className="title first small">G</p>
        <p className="title second small">y</p>
        <p className="title third small">r</p>
        <p className="title fourth small">e</p>
      </div>
    </div>
  </Link>
);


export default TitleSmall;
