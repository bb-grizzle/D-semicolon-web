import React from "react";
import SectionDevider from "../component/SectionDevider";
import { makeCount } from "../../fn/default";
import MemberDefault from "../component/MemberDefault";

const MemberList = ({ data }) => {
	console.log(data);
	return (
		<div className="MemberList ListWrapperDefault">
			<div className="con">
				<SectionDevider title={`${data.date}_${makeCount(data.id)}`} />
				<ul className="list">
					{data.member.map((el, index) => {
						return <MemberDefault key={index} data={el} type="contact" className="item" />;
					})}{" "}
				</ul>
			</div>
		</div>
	);
};

export default MemberList;
