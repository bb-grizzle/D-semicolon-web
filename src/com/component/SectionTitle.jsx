import React from "react";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, link, type }) => {
  return (
    <div className={`SectionTitle ${type}`}>
      <h1 className="title">{title}</h1>
      <Link to={link} className="more">
        - more
      </Link>
    </div>
  );
};

export default SectionTitle;
