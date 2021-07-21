import { useState, useEffect } from "react";
import { fbGetData } from "../Firebase/firebase";
import { arrayReverseObj } from "../fn/default";
const COL = "member";
export const LINK_KEY_INITIAL = ["web", "behance", "instagram", "facebook", "github"];

export const useMember = (order, desc) => {
	const [origin, setOrigin] = useState();
	const [data, setData] = useState();

	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, order || "grade", desc || "desc");
			setOrigin(res);
			let filtered = {};
			res.forEach((el) => {
				filtered[el.grade] = filtered[el.grade] ? [...filtered[el.grade], el] : [el];
			});
			setData(arrayReverseObj(filtered));
		};

		let mounted = true;
		if (mounted) {
			get();
		}
		return () => {
			mounted = false;
		};
	}, []);

	return { data, setData, origin };
};

export const useContactMember = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const res = await fbGetData(COL, "grade", "desc");
			const filter = res.filter((el) => el.isContact === true);
			setData(filter);
		};

		let mounted = true;
		if (mounted) {
			get();
		}
		return () => (mounted = false);
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
	contact: null,
};
