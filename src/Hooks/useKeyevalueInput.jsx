import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useKeyevalueInput = ({ initialKey, keys }) => {
	const [inputKey, setKey] = useState(initialKey);
	const [value, setValue] = useState("");
	const onKeyChange = (e) => {
		setKey(e.target.value);
	};
	const onValueChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {}, [inputKey, value]);
	return { inputKey, value, onKeyChange, onValueChange, keys };
};

useKeyevalueInput.proptypes = {
	initialKey: PropTypes.string.isRequired,
	initialValue: PropTypes.string
};

export default useKeyevalueInput;
