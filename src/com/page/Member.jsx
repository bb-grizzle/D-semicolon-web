import React from "react";
import data from "Data/member.js";
import MemberList from "../section/MemberList";

const Member = () => {
	return (
		<section className="Member paddingDefualt ">
			<div className="ListGroupWrapper">
				{data.map((el, index) => {
					return <MemberList data={el} key={index} />;
				})}
			</div>
		</section>
	);
};

export default Member;
