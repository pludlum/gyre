import React from 'react';
import { Link } from 'react-router-dom';


const TitleSmall = () => (
  <Link className="title-link" to="/">
    <div className='title-container small'>
      <p className="notAwesome small">the  </p>
      <div className='gyre-container small'>
        <p className="title first awesome small">G</p>
        <p className="title second awesome small">y</p>
        <p className="title third awesome small">r</p>
        <p className="title fourth awesome small">e</p>
      </div>
    </div>
  </Link>
);


export default TitleSmall;
