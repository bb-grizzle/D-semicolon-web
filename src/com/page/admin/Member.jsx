import React, { useState, useEffect } from "react";
import SectionTitle from "../../component/SectionTitle";
import AdminFLoatingBtn from "../../component/admin/AdminFLoatingBtn";
import AdminForm from "../../component/admin/AdminForm";
import useInput from "../../../Hooks/useInput";
import useKeyevalueInput from "../../../Hooks/useKeyevalueInput";
import useFileInput from "../../../Hooks/useFileInput";
import { LINK_KEY_INITIAL, MEMBER_INIT, useMember } from "../../../Data/member";
import { useNowAction, useSetNowAction } from "../../context/AdminProvider";
import { fbUpdateData, fbUploadData, fbUploadStorage, fbDeleteStorage, fbDeleteData, fbUpdateStorage } from "../../../Firebase/firebase";
import ListAdmin from "../../component/admin/ListAdmin";
import SubTitle from "../../component/SubTitle";
import { makeCount, checkObjectContain } from "../../../fn/default";
import useCheckInput from "../../../Hooks/useCheckInput";
const COL = "member";

const Member = () => {
	const firstNameInput = useInput("");
	const lastNameInput = useInput("");
	const emailInput = useInput("");
	const tellInput = useInput("", (value) => {
		return value
			.replace(/[^0-9]/g, "")
			.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1.$2.$3")
			.replace("..", ".");
	});
	const isContactInput = useCheckInput(false);
	const linkInput = useKeyevalueInput({ initialKey: LINK_KEY_INITIAL[0], keys: LINK_KEY_INITIAL });
	const profileInput = useFileInput();
	const gradeInput = useInput(1);
	const [contact, setContact] = useState([]);
	const [form, setForm] = useState(MEMBER_INIT);
	const [nowData, setNowData] = useState(null);

	const nowAction = useNowAction();
	const setNowAction = useSetNowAction();
	const { data, setData } = useMember();

	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data]);

	useEffect(() => {
		setForm({
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
			email: emailInput.value,
			tell: tellInput.value,
			grade: +gradeInput.value,
			contact,
			isContact: isContactInput.value
		});
	}, [isContactInput.value, contact, emailInput.value, firstNameInput.value, gradeInput.value, lastNameInput.value, tellInput.value]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !tellInput.value || !profileInput.value.fileName || !gradeInput.value) {
			alert("양식을 모두 채워주세요. 🤥");
			return;
		}

		try {
			// UPLOAD
			if (nowAction === "ADD") {
				const id = await fbUploadData(COL, form);
				const profile = await fbUploadStorage(COL, id, profileInput.value.file);
				await fbUpdateData(COL, id, {
					profile
				});
				// setData((n) => [{ ...form, profile, id }, ...n]);
				const newData = { ...form, profile, id };

				setData((n) =>
					checkObjectContain(n, { grade: `${form.grade}` })
						? n.map((d) => {
								return {
									...d,
									data: [newData, ...d.data]
								};
						  })
						: n.concat({
								grade: `${form.grade}`,
								data: [newData]
						  })
				);

				alert("성공적으로 업로드 했어요 😆");
			} else if (nowAction === "EDIT") {
				if (!profileInput.value.file) {
					await fbUpdateData(COL, nowData.id, form);
					setData((n) => n.map((el) => (el.grade === `${nowData.grade}` ? { ...el, data: el.data.map((d) => (d.id === nowData.id ? { ...d, ...form } : d)) } : el)));
				} else {
					const profile = await fbUpdateStorage(nowData.profile.prevUrl, `${COL}`, nowData.id, profileInput.value.file);

					await fbUpdateData(COL, nowData.id, {
						...form,
						profile
					});
					setData((n) => n.map((el) => (el.grade === `${nowData.grade}` ? { ...el, data: el.data.map((d) => (d.id === nowData.id ? { ...d, ...form, profile } : d)) } : el)));
				}
				alert("성공적으로 수정 했어요 😆");
			}
		} catch (err) {
			console.log(err);
		}
		initForm();
	};
	const handleLinkAddClick = () => {
		if (!linkInput.value) return;
		setContact((n) => [...n, { name: linkInput.inputKey, link: linkInput.value }]);
		linkInput.init();
	};

	const formContents = [
		{ ...firstNameInput, label: "first name" },
		{ ...lastNameInput, label: "last name" },
		{ ...emailInput, label: "email", inputType: "email" },
		{ ...tellInput, label: "tell", maxLength: 13 },
		{ ...linkInput, label: "link", type: "key-value", onClick: handleLinkAddClick },
		{ value: contact, type: "text-array" },
		{ ...profileInput, label: "profile", type: "file", thumbnail: true },
		{ ...gradeInput, label: "grade", inputType: "number" },
		{ ...isContactInput, label: "isContact", type: "check", text: "Contact에 포함시킬거라면 체크하세요." }
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
		setNowAction(null);
		setNowData(null);
	};

	const handleListClick = (data) => {
		setNowData(data);

		profileInput.setValue((n) => ({
			...n,
			fileName: data.profile.fileName,
			url: data.profile.url,
			prevUrl: data.profile.prevUrl
		}));
		firstNameInput.setValue(data.firstName);
		lastNameInput.setValue(data.lastName);
		emailInput.setValue(data.email);
		tellInput.setValue(data.tell);
		gradeInput.setValue(data.grade);
		data.contact.forEach((el) => {
			setContact((n) => [
				...n,
				{
					name: el.name,
					link: el.link
				}
			]);
		});
		isContactInput.setValue(data.isContact);
	};
	const handleDeleteClick = async (e, id) => {
		e.stopPropagation();

		if (!window.confirm("정말 삭제할건가요? 😩🗑")) {
			return;
		}

		try {
			await fbDeleteStorage(`${COL}/${id}`);
			await fbDeleteData(COL, id);
			setData((n) =>
				n
					.map((el) => {
						const newData = el.data.filter((d) => d.id !== id);
						return newData.length > 0
							? {
									...el,
									data: newData
							  }
							: null;
					})
					.filter((el) => el !== null)
			);
			alert("삭제 되었어요...");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<SectionTitle title="Member" />

			{data &&
				data.map((el) => {
					return (
						el !== null && (
							<div className="filter-wrapper" key={el.grade}>
								<SubTitle title={makeCount(+el.grade)} />
								<ul className="ListAdmin-wrapper">
									{el.data &&
										el.data.map((d) => {
											return (
												<ListAdmin
													id={d.id}
													onClick={() => handleListClick(d)}
													onDeleteClick={handleDeleteClick}
													key={d.id}
													title={`${d.firstName}, ${d.lastName}`}
													contents={[{ keyValue: "grade", value: d.grade }]}
													image={d.profile.url}
												/>
											);
										})}
								</ul>
							</div>
						)
					);
				})}

			<AdminFLoatingBtn />
			<AdminForm title={"Add Member"} onSubmit={handleSubmit} contents={formContents} initForm={initForm} />
		</div>
	);
};

export default Member;
