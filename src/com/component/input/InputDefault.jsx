import React from "react";
import PropTypes from "prop-types";
import Btnicon from "../Btnicon";
const InputDefault = ({ value, onChange, label, placeholder, type, onClick, maxLength }) => {
	const handleKeyDown = (e) => {
		if (!onClick) return;
		if (e.key === "Enter") {
			e.preventDefault();
			onClick();
		}
	};
	return (
		<div className="InputDefault inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<div className="text-wrapper">
					<input value={value} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} onKeyPress={handleKeyDown} maxLength={maxLength} />
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
	type: PropTypes.string,
	maxLength: PropTypes.number
};

export default InputDefault;
