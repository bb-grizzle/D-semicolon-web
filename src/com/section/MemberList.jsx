import React, { useContext } from "react";
import SectionDevider from "../component/SectionDevider";
import { makeCount } from "../../fn/default";
import MemberDefault from "../component/MemberDefault";
import { AppContext } from "../../shared/App";

const MemberList = ({ data }) => {
	const { scrollDir } = useContext(AppContext);
	return (
		<div className="MemberList ListWrapperDefault">
			<div className={`con ListDividerWrapper ${scrollDir === "up" ? "down" : ""}`}>
				<SectionDevider title={`${data.date}_${makeCount(data.id)}`} />
			</div>
			<div className="con">
				<ul className="list">
					{data.member.map((el, index) => {
						return <MemberDefault key={index} data={el} type="contact" className="item" />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default MemberList;
