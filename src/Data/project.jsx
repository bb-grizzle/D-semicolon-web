import { useEffect, useState } from "react";
import { fbDeleteData, fbDeleteStorage, fbGetData, fbGetDataById, fbUpdateData, fbUpdateStorage, fbUploadData, fbUploadDataWithDoc, fbUploadStorage } from "../Firebase/firebase";
import { useMember } from "./member";

const COL = "project";
const TAGS = "tags";

export const useProject = (order, desc) => {
	const [data, setData] = useState();
	const [tags, setTags] = useState();
	const { origin } = useMember();

	useEffect(() => {
		getTag();
	}, []);

	useEffect(() => {
		if (origin) {
			getProject();
		}
	}, [origin]);

	const getTag = async () => {
		const res = await fbGetDataById(COL, TAGS);
		setTags(res.tag);
	};

	const getProject = async () => {
		const res = await fbGetData(COL, order || "timeStamp", desc || "desc");
		const filteredData = res.filter((el) => el.id !== "tags").map((el) => ({ ...el, user: origin.find((user) => user.id === el.userId) }));
		setData(filteredData);
	};

	const checkTag = async (tag) => {
		const uploadTag = tags ? tag.filter((el) => !tags.includes(el)) : tag;
		const newTag = [...(tags || []), ...uploadTag];
		await fbUploadDataWithDoc(COL, TAGS, { tag: newTag });
		setTags(newTag);
	};

	const findeUserById = (id) => {
		return origin.find((el) => el.id === id);
	};

	const uploadProject = async (data, image) => {
		try {
			// 01. check tag
			checkTag(data.tag);

			// 02. get id with upload
			const id = await fbUploadData(COL, data);

			// 03. upload image and get url
			const fileUPload = await fbUploadStorage(`${COL}`, id, image.file);

			// 04. update firebase
			await fbUpdateData(COL, id, { ...data, thumbnail: fileUPload });

			// 05. update state
			const newProject = { ...data, thumbnail: fileUPload, user: findeUserById(data.userId), id };
			setData((prev) => [newProject, ...(prev || [])]);

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const updateProject = async (prevData, data, image) => {
		try {
			// 01. check tag
			checkTag(data.tag);

			// 02. change image
			let newData = { ...data, thumbnail: prevData.thumbnail };

			// 03. change data
			// : when image change
			if (image.file) {
				const newImage = await fbUploadStorage(COL, prevData.id, image.file);
				newData = {
					...data,
					thumbnail: newImage,
				};
			}
			await fbUpdateData(COL, prevData.id, newData);

			// 04. change local state
			const stateData = { ...newData, user: findeUserById(data.userId), id: prevData.id };
			setData((prev) => prev.map((el) => (el.id === prevData.id ? stateData : el)));

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const deleteProject = async (id) => {
		try {
			await fbDeleteStorage(`${COL}/${id}`);
			await fbDeleteData(COL, id);
			setData((prev) => prev.filter((el) => el.id !== id));
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	};

	return { data, setData, uploadProject, deleteProject, updateProject, tags };
};
