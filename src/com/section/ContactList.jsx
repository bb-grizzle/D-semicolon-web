import React from "react";
import SectionDevider from "../component/SectionDevider";
import { MemberDefault } from "com/component";

const ContactList = ({ data }) => {
	return (
		<div className="ContactList ListWrapperDefault">
			<div className={`con ListDividerWrapper`}>
				<SectionDevider title={"contact"} />
			</div>
			<div className="con">
				<ul className="list">
					{data.map((el, index) => {
						return <MemberDefault className="contact-list" key={index} data={el} type={"info"} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ContactList;
