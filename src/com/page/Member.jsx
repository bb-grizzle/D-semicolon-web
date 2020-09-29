import React, { useContext, useEffect } from "react";
import MemberList from "../section/MemberList";
import { useMember } from "../../Data/member";
import { AppContext } from "../../shared/App";

const Member = () => {
	const { data } = useMember();
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);
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
