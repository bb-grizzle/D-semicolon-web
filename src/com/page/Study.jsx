import React from "react";

import StudyList from "../section/StudyList";
import { useStudy, BASIC_CATEGORY } from "../../Data/study";

const Study = () => {
	const { data } = useStudy();
	return (
		<section className="Study paddingDefualt">
			<div className="ListGroupWrapper">
				{data &&
					BASIC_CATEGORY.map((el) => {
						return <StudyList data={data[el]} key={el} title={el} />;
					})}

				{data &&
					Object.keys(data).map((key) => {
						if (BASIC_CATEGORY.includes(key)) return null;
						return <StudyList data={data[key]} key={key} title={key} />;
					})}
			</div>
		</section>
	);
};

export default Study;
