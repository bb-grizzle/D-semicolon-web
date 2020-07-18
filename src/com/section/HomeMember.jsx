import React, { useState, useEffect, useRef } from "react";
// component
import { SectionTitle, ListMember } from "com/component";
// fn
import { useWindowSize } from "fn/default";
// field
import member from "Data/member.js";
const data = member[member.length - 1];

const HomeMember = () => {
	const [widthCon, setWidthCon] = useState(0);
	const [colWidth, setColWidth] = useState(0);
	const size = useWindowSize();
	const refCon = useRef();

	useEffect(() => {
		setWidthCon(refCon.current.getBoundingClientRect().width);
	}, [refCon]);
	useEffect(() => {
		setColWidth(widthCon / 6);
	}, [widthCon]);
	useEffect(() => {
		setWidthCon(refCon.current.getBoundingClientRect().width);
	}, [size]);

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
			<div className="con" ref={refCon}>
				<SectionTitle title="Who -" link="/member" />

				{renderData(data)}
			</div>
		</div>
	);
};

export default HomeMember;
