import React from "react";
import { SectionTitle, ListContact } from "com/component";
import { contactMember } from "Data/member.js";

const HomeContact = () => {
	return (
		<div className="HomeContact">
			<div className="con">
				<SectionTitle title="Contact -" link="/contact" />

				<ul className="contact">
					{contactMember.map((el, index) => {
						return <ListContact key={index} data={el} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default HomeContact;
