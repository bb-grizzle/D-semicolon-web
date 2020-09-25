import React, { useState, useEffect } from "react";
import SectionTitle from "../../component/SectionTitle";
import AdminFLoatingBtn from "../../component/admin/AdminFLoatingBtn";
import AdminForm from "../../component/admin/AdminForm";
import useInput from "../../../Hooks/useInput";
import useKeyevalueInput from "../../../Hooks/useKeyevalueInput";
import useFileInput from "../../../Hooks/useFileInput";
import { LINK_KEY_INITIAL, MEMBER_INIT } from "../../../Data/member";

const Member = () => {
	const firstNameInput = useInput("");
	const lastNameInput = useInput("");
	const emailInput = useInput("");
	const tellInput = useInput("");
	const linkInput = useKeyevalueInput({ initialKey: LINK_KEY_INITIAL[0], keys: LINK_KEY_INITIAL });
	const profileInput = useFileInput();
	const gradeInput = useInput("");
	const [contact, setContact] = useState([]);
	const [form, setForm] = useState(MEMBER_INIT);

	useEffect(() => {
		setForm({
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
			email: emailInput.value,
			tell: tellInput.value,
			contact
		});
	}, [contact, emailInput.value, firstNameInput.value, lastNameInput.value, tellInput.value]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};
	const handleLinkAddClick = () => {
		setContact((n) => [...n, { name: linkInput.inputKey, link: linkInput.value }]);
		linkInput.init();
	};

	const formContents = [
		{ ...firstNameInput, label: "first name" },
		{ ...lastNameInput, label: "last name" },
		{ ...emailInput, label: "email", inputType: "email" },
		{ ...tellInput, label: "tell" },
		{ ...linkInput, label: "link", type: "key-value", onClick: handleLinkAddClick },
		{ value: contact, type: "text-array" },
		{ ...profileInput, label: "profile", type: "file", thumbnail: true },
		{ ...gradeInput, label: "grade" }
	];
	const initForm = () => {
		firstNameInput.setValue("");
		lastNameInput.setValue("");
		emailInput.setValue("");
		tellInput.setValue("");
		linkInput.init();
		profileInput.initFile();
		gradeInput.setValue("");
		setContact([]);
	};
	return (
		<div>
			<SectionTitle title="Member" />

			{/* <div className="filter-wrapper" key={key}>
				<SubTitle title={key} />
				<ul className="ListAdmin-wrapper">
					{data[key].map((el) => {
						return <ListAdmin id={el.id} onClick={handleListClick} onDeleteClick={handleDeleteClick} key={el.id} title={el.title} contents={[{ keyValue: "category", value: el.category }]} />;
					})}
				</ul>
			</div> */}

			<AdminFLoatingBtn />
			<AdminForm title={"Add Member"} onSubmit={handleSubmit} contents={formContents} initForm={initForm} />
		</div>
	);
};

export default Member;
