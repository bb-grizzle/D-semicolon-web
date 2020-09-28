import React from "react";
import MemberList from "../section/MemberList";
import { useMember } from "../../Data/member";
import Loading from "../component/Loading";

const Member = () => {
	const { data } = useMember();
	return (
		<section className="Member paddingDefualt ">
			<Loading active={!data ? true : false} />
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
