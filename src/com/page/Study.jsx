import React from "react";
import dataStudy from "Data/study.js";
import StudyList from "../section/StudyList";

const Study = () => {
	return (
		<section className="Study paddingDefualt">
			<div className="ListGroupWrapper">
				{dataStudy.map((el, index) => {
					return <StudyList data={el} key={index} />;
				})}
			</div>
		</section>
	);
};

export default Study;
