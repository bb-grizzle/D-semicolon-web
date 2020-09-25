import React from "react";
import Propstypes from "prop-types";
import Btnicon from "../Btnicon";

const InputKeyValue = ({ label, inputKey, value, onKeyChange, onValueChange, onClick, placeholder, keys }) => {
	const handleKeyPress = (e) => {
		if (!onClick) return;
		if (e.key === "Enter") {
			e.preventDefault();
			onClick();
		}
	};
	return (
		<div className="InputDefault InputKeyValue inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>
			<div className="row">
				<div className="dropdown-wrapper">
					<select className="key" onChange={onKeyChange} value={inputKey}>
						{keys.map((el) => {
							return (
								<option key={el} name={el} id={el}>
									{el}
								</option>
							);
						})}
					</select>

					<div className="text-wrapper">
						<input type="text" className="value" onChange={onValueChange} value={value} placeholder={placeholder} onKeyPress={handleKeyPress} />
						{onClick && <Btnicon img="add" onClick={onClick} />}
					</div>
				</div>
			</div>
		</div>
	);
};

InputKeyValue.propsTypes = {
	value: Propstypes.string.isRequired,
	label: Propstypes.string.isRequired,
	placeholder: Propstypes.string.isRequired,
	inputKey: Propstypes.string.isRequired,
	onKeyChange: Propstypes.func.isRequired,
	onValueChange: Propstypes.func.isRequired,
	onClick: Propstypes.string,
	keys: Propstypes.string.isRequired
};

export default InputKeyValue;
