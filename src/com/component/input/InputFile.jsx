import React from "react";
import PropTypes from "prop-types";

const InputFile = ({ label, onChange, value, thumbnail }) => {
	
	return (
		<div className="InputDefault InputFile inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<label className={`btn-file ${thumbnail && value.url ? "active" : ""}`} style={{ backgroundImage: `url('${thumbnail && value.url ? value.url : "initial"}')` }}>
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
	fileName: PropTypes.string,
	thumbnail: PropTypes.bool
};

export default InputFile;
