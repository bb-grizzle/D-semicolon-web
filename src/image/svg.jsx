import React from "react";
import PropTypes from "prop-types";
export const PlaceholderProfile = ({ color = "black", className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
			<g transform="translate(-335 -1277)">
				<circle cx="36" cy="36" r="36" transform="translate(335 1277)" fill="none" />
				<path
					d="M-1.869-43.7A10.111,10.111,0,0,0,4-52.85,10.059,10.059,0,0,0-6.061-62.907,10.059,10.059,0,0,0-16.118-52.85a10.111,10.111,0,0,0,5.864,9.15,16.062,16.062,0,0,0-11.9,15.524h1.473A14.581,14.581,0,0,1-6.061-42.794,14.581,14.581,0,0,1,8.556-28.176h1.473A16.062,16.062,0,0,0-1.869-43.7Zm-12.776-9.15a8.56,8.56,0,0,1,8.584-8.584A8.56,8.56,0,0,1,2.522-52.85a8.6,8.6,0,0,1-8.584,8.584A8.6,8.6,0,0,1-14.645-52.85Z"
					transform="translate(377.061 1356.542)"
				/>
			</g>
		</svg>
	);
};

PlaceholderProfile.propTypes = {
	color: PropTypes.string,
	className: PropTypes.string
};