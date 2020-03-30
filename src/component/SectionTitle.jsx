import React from 'react';
import {Link} from 'react-router-dom';

const SectionTitle = ({title, link}) => {
  console.log(title);
  console.log(link);
  return (
    <div className="SectionTitle">
      <h1>{title}</h1>
      <Link to = {link}>- more</Link>
    </div>
  );
}

export default SectionTitle;