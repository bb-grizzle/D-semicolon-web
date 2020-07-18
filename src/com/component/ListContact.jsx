import React from "react";

const ListContact = ({ data }) => {
	const { firstName, lastName, tell, profile, email } = data;
	return (
		<li className="ListContact">
			<div className="col">
				<div className="avatar" style={{ backgroundImage: `url('${profile}')` }}></div>
			</div>
			<div className="col">
				<p className="name">
					{firstName}, {lastName}
				</p>
				<ul className="contact">
					<li className="item email">
						<p className="key">email</p>
						<p className="value">{email}</p>
					</li>
					<li className="item tell">
						<p className="key">tell</p>
						<p className="value">{tell}</p>
					</li>
				</ul>
			</div>
		</li>
	);
};

export default ListContact;
