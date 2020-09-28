import React from "react";
import { useNowAction, useSetNowAction } from "../../context/AdminProvider";
import Submit from "../input/Submit";
import FormTitle from "./FormTitle";
import PropTypes from "prop-types";
import InputDefault from "../input/InputDefault";
import InputFile from "../input/InputFile";
import FormTag from "./FormTag";
import InputDropdown from "../input/InputDropdown";
import InputKeyValue from "../input/InputKeyValue";
import InputCheck from "../input/InputCheck";

const AdminForm = ({ title, onSubmit, contents, initForm }) => {
	const nowAction = useNowAction();
	const setNowAction = useSetNowAction();

	const handleCancelClick = () => {
		setNowAction(null);
		initForm();
	};

	return (
		<div className={`AdminForm ${nowAction !== null && "active"}`}>
			<div className="con-small">
				<FormTitle title={title} onClick={handleCancelClick} />

				<form onSubmit={onSubmit}>
					{contents.map((el, index) => {
						switch (el.type) {
							case "text-with-btn":
								return <InputDefault {...el} key={index} onClick={el.onClick} placeholder={el.label} />;
							case "dropdown":
								return <InputDropdown {...el} key={index} placeholder={el.label} />;
							case "text-array":
								return (
									<div className="wrapper-formTag inputItem" key={index}>
										{el.value.map((text, i) => (
											<FormTag key={i} text={text} onClick={() => el.onClick(index)} />
										))}
									</div>
								);
							case "file":
								return <InputFile {...el} key={index} thumbnail={el.thumbnail} />;
							case "check":
								return <InputCheck {...el} key={index} label={el.label} text={el.text} />;
							case "key-value":
								return <InputKeyValue {...el} key={index} />;
							default:
								return <InputDefault {...el} key={index} placeholder={el.label} type={el.inputType} maxLength={el.maxLength} />;
						}
					})}
					<Submit value="추가" />
				</form>
			</div>
		</div>
	);
};

AdminForm.propTypes = {
	title: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	contents: PropTypes.array.isRequired,
	initForm: PropTypes.func.isRequired
};

export default AdminForm;
