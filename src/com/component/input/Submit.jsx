import React from "react";
import PropTypes from "prop-types";
const Submit = ({ value }) => {
	return (
		<div className="Submit">
			<input type="submit" value={value} />
		</div>
	);
};

Submit.propsTypes = {
	value: PropTypes.string
};

export default Submit;
