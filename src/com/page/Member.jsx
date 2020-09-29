import React, { useContext, useEffect } from "react";
import MemberList from "../section/MemberList";
import { useMember } from "../../Data/member";
import { AppContext } from "../../shared/App";
import PageAnimation from "../component/PageAnimation";

const Member = () => {
	const { data, setData } = useMember();
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);
	useEffect(() => {
		return () => {
			setData(null);
		};
	}, [setData]);

	return (
		<section className="Member paddingDefualt ">
			<PageAnimation>
				<div className="ListGroupWrapper">
					{data &&
						data.map((el, index) => {
							return <MemberList data={el} key={index} />;
						})}
				</div>
			</PageAnimation>
		</section>
	);
};

export default Member;
