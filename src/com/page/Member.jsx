import React from "react";
import data from "Data/member.js";
import MemberList from "../section/MemberList";

const Member = () => {
	return (
		<section className="Member paddingDefualt ">
			{data.map((el, index) => {
				return <MemberList data={el} key={index} />;
			})}
		</section>
	);
};

export default Member;
