import React from "react";
import { useContactMember } from "../../Data/member";
import ContactList from "../section/ContactList";
const Contact = () => {
	const {data} = useContactMember();
	return (
		<section className="Contact paddingDefualt">
			<div className="ListGroupWrapper ">
				{data && <ContactList data={data} />}
			</div>
		</section>
	);
};

export default Contact;
