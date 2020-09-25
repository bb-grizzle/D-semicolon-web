import React, { useState, useEffect } from "react";
import SectionTitle from "../../component/SectionTitle";
import ListAdmin from "../../component/admin/ListAdmin";
import AdminForm from "../../component/admin/AdminForm";
import AdminFLoatingBtn from "../../component/admin/AdminFLoatingBtn";
import useInput from "../../../Hooks/useInput";
import useFileInput from "../../../Hooks/useFileInput";
import { fbUploadStorage, fbUploadData, fbUpdateData, fbGetData, fbDeleteStorage, fbDeleteData, fbUpdateStorage, fbGetDataById } from "../../../Firebase/firebase";
import { useNowAction, useSetNowAction } from "../../context/AdminProvider";
import useDropdownInput from "../../../Hooks/useDropdownInput";
import SubTitle from "../../component/SubTitle";
const COL = "study";
const BASIC_CATEGORY = ["html", "css", "js"];

const Study = () => {
	const [data, setData] = useState();
	const [filteredData, setFilteredData] = useState();
	const titleInput = useInput("");
	const fileInput = useFileInput();
	const contentsInput = useInput("");
	const [options, setOptions] = useState();
	const categoryInput = useDropdownInput(options);
	const [contentsArr, setContentsArr] = useState([]);
	const nowAction = useNowAction();
	const setNowAction = useSetNowAction();
	const [nowData, setNowData] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fbGetData(COL, "timeStamp", "desc");
				setData(data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		const getOptions = async () => {
			try {
				const res = await fbGetDataById(COL, "init");
				setOptions(res.option);
			} catch (err) {
				console.log(err);
			}
		};
		getOptions();
	}, []);

	useEffect(() => {
		if (data && options) {
			let filtered = {};
			data.forEach((el) => {
				filtered = {
					...filtered,
					[el.category]: filtered[el.category] ? [...filtered[el.category], el] : [el]
				};
			});

			setFilteredData(filtered);
		}
	}, [data, options]);

	useEffect(() => {
		if (options) {
			categoryInput.setOption(options);
		}
	}, [categoryInput, options]);

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
				console.log("add new category");
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
				// 데이터 업데이트
				await fbUpdateData(COL, id, newData);
				setData((n) => [{ ...newData, id }, ...n]);
				alert("성공적으로 업로드 했어요 😆");
			} else if (nowAction === "EDIT") {
				console.log(fileInput);
				if (!fileInput.value.file) {
					console.log("file no");
					await fbUpdateData(COL, nowData.id, uploadData);

					setData((n) => {
						return n.map((el) =>
							el.id === nowData.id
								? {
										...el,
										...uploadData
								  }
								: el
						);
					});
				} else {
					const file = await fbUpdateStorage(nowData.file.prevUrl, `${COL}`, nowData.id, fileInput.value.file);

					await fbUpdateData(COL, nowData.id, {
						...uploadData,
						file
					});
					setData((n) => n.map((el) => (el.id === nowData.id ? { ...el, ...uploadData, file } : el)));
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

		if (!window.confirm("정말 삭제할건가요? 😩🗑")) {
			return;
		}

		try {
			await fbDeleteStorage(`${COL}/${id}`);
			await fbDeleteData(COL, id);
			setData((n) => n.filter((el) => el.id !== id));
			alert("삭제 되었어요...");
		} catch (err) {
			console.log(err);
		}
	};
	const handleListClick = (id) => {
		data.forEach((el) => {
			if (id === el.id) {
				setNowData(el);
				titleInput.setValue(el.title);
				fileInput.setValue((n) => ({
					...n,
					fileName: el.file.fileName,
					url: el.file.url,
					prevUrl: el.file.prevUrl
				}));
				categoryInput.setValue(el.category);
				setContentsArr(el.contents);
			}
		});
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
		setNowData("");
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
					filteredData &&
					filteredData[el] && (
						<div className="filter-wrapper" key={el}>
							<SubTitle title={el} />
							<ul className="ListAdmin-wrapper">
								{filteredData[el].map((el) => {
									return <ListAdmin id={el.id} onClick={handleListClick} onDeleteClick={handleDeleteClick} key={el.id} title={el.title} contents={[{ keyValue: "category", value: el.category }]} />;
								})}
							</ul>
						</div>
					)
				);
			})}

			{filteredData &&
				Object.keys(filteredData).map((key) => {
					if (BASIC_CATEGORY.includes(key)) return null;
					return (
						<div className="filter-wrapper" key={key}>
							<SubTitle title={key} />
							<ul className="ListAdmin-wrapper">
								{filteredData[key].map((el) => {
									return <ListAdmin id={el.id} onClick={handleListClick} onDeleteClick={handleDeleteClick} key={el.id} title={el.title} contents={[{ keyValue: "category", value: el.category }]} />;
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
