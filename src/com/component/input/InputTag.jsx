import InputDefault from "./InputDefault";
import React, { useEffect, useState } from "react";

const InputTag = ({ value, onChange, label, placeholder, type, onClick, maxLength, onTagClick, tags }) => {
	const [relativeTags, setRalativeTags] = useState();

	useEffect(() => {
		if (tags && value) {
			const result = tags.filter((el) => el.includes(value));
			setRalativeTags(result);
		} else {
			setRalativeTags(null);
		}
	}, [tags, value]);

	return (
		<>
			<InputDefault value={value} onChange={onChange} label={label} placeholder={label} type={type} onClick={onClick} maxLength={maxLength} />
			{relativeTags && (
				<ul className="tag-wrapper">
					{relativeTags.map((el) => (
						<li key={el} className="tag" onClick={() => onTagClick(el)}>
							{el}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default InputTag;
