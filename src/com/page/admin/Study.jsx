import React, { useState, useEffect, useContext } from "react";
import SectionTitle from "../../component/SectionTitle";
import ListAdmin from "../../component/admin/ListAdmin";
import AdminForm from "../../component/admin/AdminForm";
import AdminFLoatingBtn from "../../component/admin/AdminFLoatingBtn";
import useInput from "../../../Hooks/useInput";
import useFileInput from "../../../Hooks/useFileInput";
import { fbUploadStorage, fbUploadData, fbUpdateData, fbDeleteStorage, fbDeleteData, fbUpdateStorage } from "../../../Firebase/firebase";
import { useNowAction, useSetNowAction } from "../../context/AdminProvider";
import useDropdownInput from "../../../Hooks/useDropdownInput";
import SubTitle from "../../component/SubTitle";
import { BASIC_CATEGORY, useStudy } from "../../../Data/study";
import { AppContext } from "../../../shared/App";
const COL = "study";

const Study = () => {
	const { data, setData, options, setOptions } = useStudy();
	const titleInput = useInput("");
	const fileInput = useFileInput();
	const contentsInput = useInput("");
	const categoryInput = useDropdownInput(options);
	const [contentsArr, setContentsArr] = useState([]);
	const nowAction = useNowAction();
	const setNowAction = useSetNowAction();
	const [nowData, setNowData] = useState();
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		if (options) {
			categoryInput.setOption(options);
		}
	}, [categoryInput, options]);

	useEffect(() => {
		if (data && options) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, options, setLoading]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!titleInput.value || !fileInput.value.fileName || contentsArr.length === 0 || !categoryInput.value) {
			alert("양식을 모두 채워주세요. 🤥");
			return;
		}

		try {
			const uploadData = {
				title: titleInput.value,
				category: categoryInput.value,
				contents: contentsArr
			};

			if (!options.includes(categoryInput.value)) {
				await fbUpdateData(COL, "init", {
					option: [...options, categoryInput.value]
				});
				setOptions((n) => [...n, categoryInput.value]);
			}

			if (nowAction === "ADD") {
				// 데이터 업로드
				const id = await fbUploadData(COL, uploadData);

				// 파일 업로드
				const file = await fbUploadStorage(`${COL}`, id, fileInput.value.file);

				const newData = {
					...uploadData,
					file
				};
				// 데이터 업로드
				await fbUpdateData(COL, id, newData);
				// uploadData.category
				setData((n) =>
					n[uploadData.category]
						? {
								...n,
								[uploadData.category]: [{ ...newData, id }, ...n[uploadData.category]]
						  }
						: {
								...n,
								[uploadData.category]: [{ ...newData, id }]
						  }
				);
				alert("성공적으로 업로드 했어요 😆");
			} else if (nowAction === "EDIT") {
				if (!fileInput.value.file) {
					await fbUpdateData(COL, nowData.id, uploadData);

					setData((n) => ({
						...n,
						[nowData.category]: n[nowData.category].map((el) =>
							el.id === nowData.id
								? {
										...el,
										...uploadData
								  }
								: el
						)
					}));
				} else {
					const file = await fbUpdateStorage(nowData.file.prevUrl, `${COL}`, nowData.id, fileInput.value.file);

					await fbUpdateData(COL, nowData.id, {
						...uploadData,
						file
					});
					setData((n) => ({
						...n,
						[nowData.category]: n[nowData.category].map((el) => (el.id === nowData.id ? { ...el, ...uploadData, file } : el))
					}));
				}
				alert("성공적으로 수정 했어요 😆");
			}
		} catch (err) {
			console.log(err);
		}

		initAdmin();
	};
	const handleContentsClick = () => {
		if (!contentsInput.value) return;
		setContentsArr((n) => n.concat(contentsInput.value));
		contentsInput.setValue("");
	};
	const handleContentsCancleClick = (index) => {
		setContentsArr((n) => n.filter((el, i) => i !== index));
	};
	const handleDeleteClick = async (e, id) => {
		e.stopPropagation();

		let category;
		Object.keys(data).forEach((key) => {
			data[key].forEach((d) => {
				if (d.id === id) {
					category = d.category;
				}
			});
		});

		if (!window.confirm("정말 삭제할건가요? 😩🗑")) {
			return;
		}

		try {
			await fbDeleteStorage(`${COL}/${id}`);
			await fbDeleteData(COL, id);
			setData((n) => ({
				...n,
				[category]: n[category].filter((el) => el.id !== id)
			}));
			alert("삭제 되었어요...");
		} catch (err) {
			console.log(err);
		}
	};
	const handleListClick = (data) => {
		setNowData(data);

		titleInput.setValue(data.title);
		fileInput.setValue((n) => ({
			...n,
			fileName: data.file.fileName,
			url: data.file.url,
			prevUrl: data.file.prevUrl
		}));
		categoryInput.setValue(data.category);
		setContentsArr(data.contents);
	};

	const initForm = () => {
		titleInput.setValue("");
		fileInput.initFile();
		contentsInput.setValue("");
		categoryInput.setIsAddClick(false);
		setContentsArr([]);
	};
	const initAdmin = () => {
		initForm();
		setNowData(null);
		setNowAction(null);
	};

	const formContents = [
		{ ...titleInput, label: "title" },
		{ ...categoryInput, label: "category", type: "dropdown" },
		{ ...fileInput, label: "file", type: "file" },
		{ ...contentsInput, label: "contents", type: "text-with-btn", onClick: handleContentsClick },
		{ value: contentsArr, type: "text-array", onClick: handleContentsCancleClick }
	];

	return (
		<div>
			<SectionTitle title="Study" />

			{BASIC_CATEGORY.map((el) => {
				return (
					data &&
					data[el] && (
						<div className="filter-wrapper" key={el}>
							<SubTitle title={el} />
							<ul className="ListAdmin-wrapper">
								{data[el].map((d) => {
									return (
										<ListAdmin id={d.id} onClick={() => handleListClick(d)} onDeleteClick={handleDeleteClick} key={d.id} title={d.title} contents={[{ keyValue: "category", value: d.category }]} />
									);
								})}
							</ul>
						</div>
					)
				);
			})}

			{data &&
				Object.keys(data).map((key) => {
					if (BASIC_CATEGORY.includes(key)) return null;
					return (
						<div className="filter-wrapper" key={key}>
							<SubTitle title={key} />
							<ul className="ListAdmin-wrapper">
								{data[key].map((el) => {
									return (
										<ListAdmin
											id={el.id}
											onClick={() => handleListClick(el)}
											onDeleteClick={handleDeleteClick}
											key={el.id}
											title={el.title}
											contents={[{ keyValue: "category", value: el.category }]}
										/>
									);
								})}
							</ul>
						</div>
					);
				})}

			<AdminFLoatingBtn />

			<AdminForm title={"Add Study"} onSubmit={handleSubmit} contents={formContents} initForm={initForm} />
		</div>
	);
};

export default Study;
