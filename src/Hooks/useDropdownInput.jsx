import { useState, useEffect } from "react";
import PropTypes from "prop-types";
const useDropdownInput = (initialOptions) => {
	const [option, setOption] = useState(initialOptions ? initialOptions : []);
	const [value, setValue] = useState(initialOptions ? initialOptions[0] : "");
	const [isAddClick, setIsAddClick] = useState(false);

	useEffect(() => {
		if (option.length !== 0) {
			setValue(option[0]);
		}
	}, [option]);

	const onChange = (text) => {
		setValue(text);
	};

	return { value, setValue, onChange, option, setOption, isAddClick, setIsAddClick };
};

useDropdownInput.PropTypes = {
	initialOptions: PropTypes.array.isRequired
};

export default useDropdownInput;
