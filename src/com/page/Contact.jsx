import React from "react";
import { useContactMember } from "../../Data/member";
import ContactList from "../section/ContactList";
import Loading from "../component/Loading";
const Contact = () => {
	const { data } = useContactMember();
	return (
		<section className="Contact paddingDefualt">
			<Loading active={!data ? true : false} />
			<div className="ListGroupWrapper ">{data && <ContactList data={data} />}</div>
		</section>
	);
};

export default Contact;
