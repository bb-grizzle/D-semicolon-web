import { useState } from "react";
import { getThumbnail } from "../Firebase/firebase";

const useFileInput = () => {
	const [value, setValue] = useState({
		fileName: "",
		url: "",
		prevUrl: "",
		file: undefined,
		domValue: ""
	});

	const onChange = (e) => {
		const file = e.target.files[0];
		getThumbnail(e.target, changUrl);
		const domValue = e.target.value;

		setValue((n) => ({
			...n,
			file,
			domValue
		}));
	};

	const initFile = () => {
		setValue({
			fileName: "",
			url: "",
			prevUrl: "",
			file: undefined,
			domValue: ""
		});
	};

	const changUrl = (fileName, url) => {
		setValue((n) => ({ ...n, fileName, url }));
	};

	return { value, setValue, onChange, initFile };
};

export default useFileInput;
