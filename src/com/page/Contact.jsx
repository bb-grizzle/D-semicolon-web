import React from "react";
import { contactMember } from "Data/member.js";
import ContactList from "../section/ContactList";
const Contact = () => {
	return (
		<section className="Contact paddingDefualt">
			<div className="ListGroupWrapper ">
				<ContactList data={contactMember} />
			</div>
		</section>
	);
};

export default Contact;
