import React from "react";
// component
import { SectionTitle, ListMember } from "com/component";
// field
import member from "Data/member.js";
const data = member[member.length - 1];

const HomeMember = () => {
	const renderData = (data) => {
		return (
			<div className="wrap-members">
				<div key={data.id} className="wrap-nth">
					<h2 className="title-nth div">{makeCount(data.id)}</h2>
					<ul className="wrap-member">
						{data.member.map((item, i) => {
							if (i % 2 === 0) {
								return (
									<div className="wrap-col" key={`col-${i}`}>
										<ListMember data={item} />
										{i + 1 < data.member.length ? <ListMember data={data.member[i + 1]} /> : ""}
									</div>
								);
							} else {
								return "";
							}
						})}
					</ul>
				</div>
			</div>
		);
	};
	const makeCount = (count) => {
		if (count === 1) {
			return "1st";
		} else if (count === 2) {
			return "2nd";
		} else if (count === 3) {
			return "3rd";
		} else {
			return `${count}th`;
		}
	};
	return (
		<div className="HomeMember">
			<div className="con">
				<SectionTitle title="Who -" link="/member" />

				{renderData(data)}
			</div>
		</div>
	);
};

export default HomeMember;
