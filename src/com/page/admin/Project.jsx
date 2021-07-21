import React, { useContext, useEffect, useState } from "react";
import { useProject } from "../../../Data/project";
import useFileInput from "../../../Hooks/useFileInput";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../shared/App";
import AdminFLoatingBtn from "../../component/admin/AdminFLoatingBtn";
import AdminForm from "../../component/admin/AdminForm";
import SectionTitle from "../../component/SectionTitle";
import { useNowAction, useSetNowAction } from "../../context/AdminProvider";
import ProjectList from "../../section/ProjectAdminList";
const Project = () => {
	const titleInput = useInput("");
	const tagInput = useInput("");
	const thumbnailInput = useFileInput();
	const urlInput = useInput("");
	const [tagArr, setTagArr] = useState([]);
	const userIdInput = useInput("");
	const textInput = useInput("");

	const [form, setForm] = useState();
	const nowAction = useNowAction();
	const setNowAction = useSetNowAction();
	const { setLoading } = useContext(AppContext);
	const { updateProject, uploadProject, tags, data, deleteProject } = useProject();
	const [nowData, setNowData] = useState();

	// STATE
	useEffect(() => {
		setForm({
			title: titleInput.value,
			url: urlInput.value,
			tag: tagArr,
			text: textInput.value,
			userId: userIdInput.value,
		});
	}, [titleInput.value, urlInput.value, tagArr, userIdInput.value, textInput.value]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!titleInput.value || !urlInput.value || !userIdInput.value) {
			alert("양식을 모두 채워주세요. 🤥");
			return;
		}
		// loading start
		setLoading(true);

		// upload start
		if (nowAction === "ADD") {
			const status = await uploadProject(form, thumbnailInput.value);
			if (status) {
				alert("성공적으로 업로드 했어요 😆");
			} else {
				alert("업로드를 실패했어요. 😡");
			}
		} else if (nowAction === "EDIT") {
			const status = await updateProject(nowData, form, thumbnailInput.value);
			if (status) {
				alert("성공적으로 업데이트 했어요 😆");
			} else {
				alert("업데이트를 실패했어요. 😡");
			}
		}

		initForm();
		setLoading(false);
		setNowAction(null);
	};

	const initForm = () => {
		titleInput.setValue("");
		tagInput.setValue("");
		thumbnailInput.initFile();
		textInput.setValue("");
		urlInput.setValue("");
		setTagArr([]);
		userIdInput.setValue("");
		setForm(null);
	};

	const handleContentsCancleClick = (index) => {
		setTagArr((n) => n.filter((el, i) => i !== index));
	};

	const handleContentsClick = () => {
		if (!tagInput.value) return;
		handleTagClick(tagInput.value);
	};

	const handleTagClick = (value) => {
		if (tagArr.includes(value)) return;
		setTagArr((n) => n.concat(value));
		tagInput.setValue("");
	};

	const onListClick = (data) => {
		setNowAction("EDIT");
		setNowData(data);
		const { tag, thumbnail, title, url, userId, text } = data;

		titleInput.setValue(title);
		urlInput.setValue(url);
		setTagArr(tag);
		textInput.setValue(text);
		userIdInput.setValue(userId);
		thumbnailInput.setValue((prev) => {
			return { ...prev, fileName: thumbnail.fileName, url: thumbnail.url, prevUrl: thumbnail.prevUrl };
		});
	};

	const onDeleteClick = async (e, id) => {
		e.stopPropagation();
		if (!window.confirm("정말 삭제할건가요? 😩🗑")) {
			return;
		}
		setLoading(true);
		const status = await deleteProject(id);
		if (status) {
			alert("삭제 되었어요...");
		} else {
			alert("삭제 실패하였어요...");
		}
		setLoading(false);
	};

	const formContents = [
		{ ...titleInput, label: "title", maxLength: 30 },
		{ ...textInput, label: "text", maxLength: 100 },
		{ ...urlInput, label: "url", type: "url" },
		{ ...thumbnailInput, label: "thumbnail", type: "file", thumbnail: true },
		{ ...tagInput, label: "tag", type: "tag", onClick: handleContentsClick, onTagClick: handleTagClick, tags },
		{ value: tagArr, type: "text-array", onClick: handleContentsCancleClick },
		{ ...userIdInput, label: "user", type: "userlist" },
	];

	return (
		<div>
			<SectionTitle title="Project" />

			{/* list */}
			<ProjectList data={data} onDeleteClick={onDeleteClick} onClick={onListClick} />

			{/* admin form */}
			<AdminFLoatingBtn />
			<AdminForm title={"Add Project"} onSubmit={handleSubmit} contents={formContents} initForm={initForm} />
		</div>
	);
};

export default Project;
