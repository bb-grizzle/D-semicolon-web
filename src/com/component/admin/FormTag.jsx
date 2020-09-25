import React from "react";
import PropTypes from "prop-types";

const FormTag = ({ text, onClick }) => {
	return (
		<div className="FormTag inputItem">
			<p>{text}</p>
			<p onClick={onClick} className="btn-delete">
				DELETE
			</p>
		</div>
	);
};

FormTag.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default FormTag;
