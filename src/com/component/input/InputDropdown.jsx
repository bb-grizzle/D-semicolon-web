import React from "react";
import PropTypes from "prop-types";
import Btnicon from "../Btnicon";
const InputDropdown = ({ label, option, onChange, value, placeholder, isAddClick, setIsAddClick }) => {
	const handleAddClick = () => {
		setIsAddClick(true);
		onChange("");
	};

	const handleCancleCLick = () => {
		setIsAddClick(false);
		onChange(option[0]);
	};

	return (
		<div className="InputDefault InputDropdown inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>

			<div className="row">
				{!isAddClick ? (
					<div className="dropdown-wrapper">
						<select className="dropdown" onChange={(e) => onChange(e.target.value)} value={value}>
							{option.map((el) => {
								return (
									<option key={el} name={el} id={el}>
										{el}
									</option>
								);
							})}
						</select>
						<Btnicon img="add" onClick={handleAddClick} />
					</div>
				) : (
					<div className="text-wrapper">
						<input value={value} onChange={(e) => onChange(e.target.value)} type={"text"} placeholder={placeholder} />
						<Btnicon img="CANCLE" onClick={handleCancleCLick} />
					</div>
				)}
			</div>
		</div>
	);
};

InputDropdown.propTypes = {
	label: PropTypes.string.isRequired,
	option: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default InputDropdown;
