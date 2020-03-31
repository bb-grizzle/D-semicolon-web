import React from 'react';
import {Link} from 'react-router-dom';

const SectionTitle = ({title, link}) => {
  return (
    <div className="SectionTitle">
      <h1 className="title">{title}</h1>
      <Link to = {link} className="more">- more</Link>
    </div>
  );
}

export default SectionTitle;