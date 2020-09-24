import React from "react";
import PropTypes from "prop-types";
const InputDefault = ({ value, onChange, label, placeholder, type }) => {
	return (
		<div>
			<label>{label}</label>
			<input value={value} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} />
		</div>
	);
};

InputDefault.propsTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string
};

export default InputDefault;
