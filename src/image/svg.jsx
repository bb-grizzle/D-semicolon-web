import React from "react";
import PropTypes from "prop-types";
export const PlaceholderProfile = ({ color = "black", className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" className={className}>
			<g transform="translate(-335 -1277)">
				<circle cx="36" cy="36" r="36" transform="translate(335 1277)" fill="none" />
				<path
					d="M-1.869-43.7A10.111,10.111,0,0,0,4-52.85,10.059,10.059,0,0,0-6.061-62.907,10.059,10.059,0,0,0-16.118-52.85a10.111,10.111,0,0,0,5.864,9.15,16.062,16.062,0,0,0-11.9,15.524h1.473A14.581,14.581,0,0,1-6.061-42.794,14.581,14.581,0,0,1,8.556-28.176h1.473A16.062,16.062,0,0,0-1.869-43.7Zm-12.776-9.15a8.56,8.56,0,0,1,8.584-8.584A8.56,8.56,0,0,1,2.522-52.85a8.6,8.6,0,0,1-8.584,8.584A8.6,8.6,0,0,1-14.645-52.85Z"
					transform="translate(377.061 1356.542)"
					fill={color}
				/>
			</g>
		</svg>
	);
};

export const Semicolon = ({ color = "black", className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.89 127.98" className={className}>
			<path
				d="M0,119.21a47,47,0,0,0,15.15-17.83Q20,91.11,20,76.52V72.45H41.6q-.87,18.76-8.84,32.21T8.79,128ZM19.92,25A14.09,14.09,0,0,0,30.29,29.2,14.09,14.09,0,0,0,40.66,25,14.09,14.09,0,0,0,44.89,14.6,14.17,14.17,0,0,0,40.66,4.28,14,14,0,0,0,30.29,0,14.09,14.09,0,0,0,19.92,4.23,14.13,14.13,0,0,0,15.69,14.6,14.13,14.13,0,0,0,19.92,25Z"
				fill={color}
			/>
		</svg>
	);
};

PlaceholderProfile.propTypes = {
	color: PropTypes.string,
	className: PropTypes.string
};
