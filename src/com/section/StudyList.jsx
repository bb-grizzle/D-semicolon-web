import React, { useContext } from "react";
import { AppContext } from "../../shared/App";
import SectionDevider from "../component/SectionDevider";
import StudylistDefault from "../component/StudylistDefault";

const StudyList = ({ data, title }) => {
	const { scrollDir } = useContext(AppContext);
	return (
		<div className="MemberList ListWrapperDefault">
			<div className={`con ListDividerWrapper ${scrollDir === "up" ? "down" : ""}`}>
				<SectionDevider title={title} />
			</div>

			<div className="con">
				<ul className="list">
					{data.map((el, index) => {
						return <StudylistDefault key={index} data={el} className="item" />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default StudyList;
