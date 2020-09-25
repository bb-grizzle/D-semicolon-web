import React from "react";
import { SectionTitle, MemberDefault } from "com/component";
import { contactMember } from "Data/member";

const HomeContact = () => {
	return (
		<div className="HomeContact">
			<div className="con">
				<SectionTitle title="Contact -" link="/contact" />

				<ul className="contact">
					{contactMember.map((el, index) => {
						return <MemberDefault key={index} data={el} type={"info"} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default HomeContact;
