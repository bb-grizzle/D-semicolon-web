import React from "react";
import { SectionTitle, MemberDefault } from "com/component";

const HomeContact = ({ data }) => {
	return (
		<div className="HomeContact">
			<div className="con">
				<SectionTitle title="Contact -" link="/contact" />

				<ul className="contact">
					{data &&
						data.map((el, index) => {
							return <MemberDefault key={index} data={el} type={"info"} />;
						})}
				</ul>
			</div>
		</div>
	);
};

export default HomeContact;
