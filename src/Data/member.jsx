import { useState, useEffect } from "react";
import { fbGetData } from "../Firebase/firebase";
import { arrayReverseObj } from "../fn/default";
const COL = "member";
export const LINK_KEY_INITIAL = ["web", "behance", "instagram", "facebook", "github"];

export const useMember = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "grade", "desc");
			let filtered = {};
			res.forEach((el) => {
				filtered[el.grade] = filtered[el.grade] ? [...filtered[el.grade], el] : [el];
			});
			setData(arrayReverseObj(filtered));
		};
		get();
	}, []);

	return { data, setData };
};

export const useContactMember = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "grade", "desc");
			const filter = res.filter((el) => el.isContact === true);
			setData(filter);
		};
		get();
	}, []);

	return { data, setData };
};

export const contactMember = (data) => {
	return data.filter((el) => el.isContact === true);
};

export const MEMBER_INIT = {
	firstName: "",
	lastName: "",
	profile: null,
	email: "",
	tell: "",
	contact: null
};
