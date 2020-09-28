import React from "react";
import MemberList from "../section/MemberList";
import { useMember } from "../../Data/member";

const Member = () => {
	const { data } = useMember();
	return (
		<section className="Member paddingDefualt ">
			<div className="ListGroupWrapper">
				{data &&
					data.map((el, index) => {
						return <MemberList data={el} key={index} />;
					})}
			</div>
		</section>
	);
};

export default Member;
