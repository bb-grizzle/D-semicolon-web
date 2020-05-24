import React from "react";
const ListMember = props => {
  const infoKey = text => {
    switch (text) {
      case "instagram": {
        return "insta";
      }
      default: {
        return text;
      }
    }
  };
  return (
    <li className="ListMember">
      <div className="wrap-name">
        <p className="firstName">{props.data.firstName}</p>
        <p className="lastName">{props.data.lastName},</p>
      </div>
      <ul className="wrap-info">
        {props.data.contact.map((el, index) => {
          return (
            <li className="list" key={index}>
              <a className="key" href={el.link}>
                {infoKey(el.name)} -
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ListMember;
