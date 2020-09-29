import { fbGetData, fbGetDataById } from "../Firebase/firebase";
import { useEffect, useState } from "react";

export const BASIC_CATEGORY = ["html/css", "js"];
const COL = "study";

export const useStudy = () => {
	const [originData, setOriginData] = useState();
	const [options, setOptions] = useState();
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fbGetData(COL, "timeStamp", "asc");
				setOriginData(data);
			} catch (err) {
				console.log(err);
			}
		};

		let mounted = true;
		if (mounted) {
			getData();
		}
		return () => (mounted = false);
	}, []);

	useEffect(() => {
		const getOptions = async () => {
			try {
				const res = await fbGetDataById(COL, "init");
				setOptions(res ? res.option : []);
			} catch (err) {
				console.log(err);
			}
		};

		let mounted = true;
		if (mounted) {
			getOptions();
		}
		return () => (mounted = false);
	}, []);

	useEffect(() => {
		if (originData && options) {
			let filtered = {};
			originData.forEach((el) => {
				filtered = {
					...filtered,
					[el.category]: filtered[el.category] ? [...filtered[el.category], el] : [el]
				};
			});

			setData(filtered);
		}
	}, [originData, options]);

	return { data, setData, options, setOptions };
};
