import React from "react";
import ic_pluse from "../../../image/icon/ic-pluse.svg";
const FloatingBtn = ({ onClick }) => {
	return (
		<div className="FloatingBtn" onClick={onClick}>
			<img src={ic_pluse} alt="pluse" />
		</div>
	);
};

export default FloatingBtn;
