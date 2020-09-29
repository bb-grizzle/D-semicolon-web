import React from "react";
import PropTypes from "prop-types";

const FormTag = ({ text, onClick }) => {
	return (
		<div className="FormTag">
			<div className="wrapper-contents">
				{typeof text === "string" ? (
					<p>{text}</p>
				) : (
					Object.keys(text).map((key, index) => {
						return (
							<p key={index} className="option">
								{text[key]}
							</p>
						);
					})
				)}
			</div>

			<p onClick={onClick} className="btn-delete">
				DELETE
			</p>
		</div>
	);
};

FormTag.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onClick: PropTypes.func.isRequired
};

export default FormTag;
