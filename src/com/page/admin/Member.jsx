import React, { useState, useEffect, useContext } from "react";
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
import { makeCount } from "../../../fn/default";
import useCheckInput from "../../../Hooks/useCheckInput";
import { AppContext } from "../../../shared/App";
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
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);

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
		if (!firstNameInput.value || !lastNameInput.value || !gradeInput.value) {
			alert("양식을 모두 채워주세요. 🤥");
			return;
		}

		try {
			setLoading(true);
			// UPLOAD
			if (nowAction === "ADD") {
				const id = await fbUploadData(COL, form);

				const profile = profileInput.value.file
					? await fbUploadStorage(COL, id, profileInput.value.file)
					: {
							url: "",
							prevUrl: "",
							file: null
					  };

				await fbUpdateData(COL, id, {
					profile
				});

				const newData = { ...form, profile, id };

				setData((n) =>
					n.map((el) => {
						return +el.grade === form.grade ? { ...el, data: [newData, ...el.data] } : el;
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

	const handleLinkDeleteClick = (i) => {
		setContact((prev) => prev.filter((contact, index) => index !== i));
	};

	const formContents = [
		{ ...firstNameInput, label: "first name" },
		{ ...lastNameInput, label: "last name" },
		{ ...emailInput, label: "email", inputType: "email" },
		{ ...tellInput, label: "tell", maxLength: 13 },
		{ ...linkInput, label: "link", type: "key-value", onClick: handleLinkAddClick, placeholder: "https:// -- 까지 모두 입력해주세요 :)" },
		{ value: contact, type: "text-array", onClick: handleLinkDeleteClick },
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
		isContactInput.setValue(false);
		setContact([]);
		setNowAction(null);
		setNowData(null);
		setLoading(false);
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
			let path = "";
			data.forEach((el) => {
				if (el.id === id) {
					if (el.url) {
						path = `${COL}/${id}`;
					}
				}
			});

			if (path) {
				await fbDeleteStorage(path);
			}

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
													image={d.profile.url ? d.profile.url : "placeholder"}
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
