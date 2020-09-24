import React from "react";
import PropTypes from "prop-types";
import Btnicon from "../Btnicon";
const InputDefault = ({ value, onChange, label, placeholder, type, onClick }) => {
	return (
		<div className="InputDefault">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<div className="text-wrapper">
					<input value={value} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} />
					{onClick && <Btnicon img="add" onClick={onClick} />}
				</div>
			</div>
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
