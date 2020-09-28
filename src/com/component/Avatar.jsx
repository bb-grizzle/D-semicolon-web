import React from "react";
import { PlaceholderProfile } from "../../image/svg";

const Avatar = ({ url, className }) => {
	console.log(url);
	return (
		<div className={`avatar ${className}`} style={{ backgroundImage: `url('${url ? url : "initial"}')` }}>
			{!url && <PlaceholderProfile />}
		</div>
	);
};

export default Avatar;