import React from "react";
import SectionTitle from "../SectionTitle";
import PropTypes from "prop-types";
const FormTitle = ({ title, onClick, btnText = "취소" }) => {
	return (
		<div className="wrapper-title">
			<SectionTitle title={title} />
			<div className="btn-cancle" onClick={onClick}>
				<p>{btnText}</p>
			</div>
		</div>
	);
};

FormTitle.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	btnText: PropTypes.string
};

export default FormTitle;
