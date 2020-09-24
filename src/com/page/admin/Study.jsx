import React from "react";
import SectionTitle from "../../component/SectionTitle";
import ListAdmin from "../../component/admin/ListAdmin";
import FloatingBtn from "../../component/admin/FloatingBtn";

const Study = () => {
	const handleBtnClick = () => {
		console.log("handleBtnClick");
	};
	return (
		<div>
			<SectionTitle title="Study" />

			<ul className="list-wrapper">
				<ListAdmin title="title" contents={[{ keyValue: "keyValue", value: "test" }]} />
			</ul>

			<FloatingBtn onClick={handleBtnClick} />
		</div>
	);
};

export default Study;
