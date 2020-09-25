import React from "react";
import PropTypes from "prop-types";

const InputFile = ({ label, onChange, value }) => {
	return (
		<div className="InputDefault InputFile inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<label className="btn-file">
					<p>{value.fileName ? value.fileName : "파일 찾기"}</p>
					<input value={value.domValue} onChange={onChange} type={"file"} />
				</label>
			</div>
		</div>
	);
};

InputFile.propsTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	fileName: PropTypes.string
};

export default InputFile;
