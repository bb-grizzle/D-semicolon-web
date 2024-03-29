import React, { useContext, useEffect } from "react";
import { useContactMember } from "../../Data/member";
import ContactList from "../section/ContactList";
import { AppContext } from "../../shared/App";
import PageAnimation from "../component/PageAnimation";
const Contact = () => {
	const { data } = useContactMember();
	const { setLoading } = useContext(AppContext);
	useEffect(() => {
		if (data) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [data, setLoading]);
	return (
		<section className="Contact paddingDefualt">
			<PageAnimation>
				<div className="ListGroupWrapper ">{data && <ContactList data={data} />}</div>
			</PageAnimation>
		</section>
	);
};

export default Contact;
