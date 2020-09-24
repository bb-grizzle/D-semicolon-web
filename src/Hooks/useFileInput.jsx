import { useState } from "react";

const useFileInput = () => {
	const { value, setValue } = useState();
	const [fileName, setFileName] = useState("파일 선택");
	const [file, setFile] = useState();
	const onChange = (e) => {
		setFileName(e.target.files[0].name);
		setFile(e.target.files[0]);
	};
	return { value, setValue, onChange, fileName, file };
};

export default useFileInput;
