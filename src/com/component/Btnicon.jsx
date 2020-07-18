import React from "react";

const Btnicon = (props) => {
	return (
		<div className={`Btnicon ${props.className}`} onClick={props.onClick}>
			{props.href ? (
				<a href={props.href} download={props.download}>
					<img src={props.img} alt={props.className} />
				</a>
			) : (
				<img src={props.img} alt={props.className} />
			)}
		</div>
	);
};

export default Btnicon;
