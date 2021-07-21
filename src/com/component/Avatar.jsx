import React, { useState, useEffect } from "react";
import { PlaceholderProfile } from "../../image/svg";
let img = null;
const Avatar = ({ url, className }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		return () => {
			setActive(false);
			img.onload = null;
		};
	}, []);

	useEffect(() => {
		if (url) {
			img = new Image();
			img.src = url;

			img.onload = () => {
				setActive(true);
			};
		} else {
			setActive(true);
		}
	}, [url]);

	return (
		<div className={`Avatar avatar ${className} ${active ? "active " : ""}`} style={{ backgroundImage: `url('${url ? url : "initial"}')` }}>
			{!url && <PlaceholderProfile className={"placeholder"} />}
		</div>
	);
};

export default Avatar;
