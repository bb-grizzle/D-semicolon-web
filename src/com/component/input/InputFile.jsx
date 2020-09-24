import React from "react";
import PropTypes from "prop-types";

const InputFile = ({ label, onChange, value, fileName }) => {
	return (
		<div className="InputDefault InputFile">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<label className="btn-file">
					<p>{fileName}</p>
					<input value={value} onChange={onChange} type={"file"} />
				</label>
			</div>
		</div>
	);
};

InputFile.propsTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired
};

export default InputFile;
