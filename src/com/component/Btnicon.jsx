import React from 'react';

const Btnicon = (props) => {
  return (
    <div className={`Btnicon ${props.className}`} onClick = {props.onClick}>
      <img src={props.img} alt={props.className}/>
    </div>
  );
}

export default Btnicon;