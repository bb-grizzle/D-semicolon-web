import { useState } from "react";

const useInput = (initial, changeFn) => {
	const [value, setValue] = useState(initial);
	const onChange = (e) => {
		if (changeFn) {
			setValue(changeFn(e.target.value));
		} else {
			setValue(e.target.value);
		}
	};
	return { value, setValue, onChange };
};

export default useInput;
