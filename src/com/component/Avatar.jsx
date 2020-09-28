import React, { useState, useEffect } from "react";
import { PlaceholderProfile } from "../../image/svg";

const Avatar = ({ url, className }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (url) {
			const dom = document.createElement("img");
			dom.src = url;
			dom.onload = () => {
				setActive(true);
			};
		} else {
			setActive(true);
		}
	}, [url]);

	return (
		<div className={`Avatar avatar ${className} ${active ? "active " : ""}`} style={{ backgroundImage: `url('${url ? url : "initial"}')` }}>
			{!url && <PlaceholderProfile />}
		</div>
	);
};

export default Avatar;
