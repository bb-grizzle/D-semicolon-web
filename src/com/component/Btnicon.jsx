import React from "react";

const Btnicon = ({ className, onClick, href, download, img }) => {
	const renderIcon = () => {
		return img.split("/").length === 1 ? <p>{img}</p> : <img src={img} alt={className} />;
	};
	return (
		<div className={`Btnicon ${className}`} onClick={onClick}>
			{href ? (
				<a href={href} download={download} target="_blank" rel="noopener noreferrer">
					{renderIcon()}
				</a>
			) : (
				renderIcon()
			)}
		</div>
	);
};

export default Btnicon;
