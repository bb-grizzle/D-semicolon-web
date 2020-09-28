import React from "react";
// component
import { SectionTitle, ListMember } from "com/component";
// field
import { makeCount } from "../../fn/default";

const HomeMember = ({ data }) => {
	const renderData = (data) => {
		return (
			<div className="wrap-members">
				<div key={data.id} className="wrap-nth">
					<h2 className="title-nth div">{makeCount(data.grade)}</h2>
					<ul className="wrap-member">
						{data.data.map((item, i) => {
							if (i % 2 === 0) {
								return (
									<div className="wrap-col" key={`col-${i}`}>
										<ListMember data={item} />
										{i + 1 < data.data.length ? <ListMember data={data.data[i + 1]} /> : ""}
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

	return (
		<div className="HomeMember">
			<div className="con">
				<SectionTitle title="Who -" link="/member" />

				{data && renderData(data)}
			</div>
		</div>
	);
};

export default HomeMember;
