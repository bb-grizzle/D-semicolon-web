import React, { useEffect, useContext } from "react";

import StudyList from "../section/StudyList";
import { useStudy, BASIC_CATEGORY } from "../../Data/study";
import { AppContext } from "../../shared/App";

const Study = () => {
	const { data } = useStudy();
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		console.log("Study");
		console.log(data);
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);
	return (
		<section className="Study paddingDefualt">
			<div className="ListGroupWrapper">
				{data && BASIC_CATEGORY.map((el) => data[el] && <StudyList data={data[el]} key={el} title={el} />)}

				{data &&
					Object.keys(data).map((key) => {
						if (BASIC_CATEGORY.includes(key)) return null;
						return data[key] && <StudyList data={data[key]} key={key} title={key} />;
					})}
			</div>
		</section>
	);
};

export default Study;
