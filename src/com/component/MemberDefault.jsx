import React from "react";
import Avatar from "./Avatar";

const MemberDefault = ({ data, type, className }) => {
	const { firstName, lastName, tell, profile, email, contact } = data;
	return (
		<li className={`MemberDefault ${type} ${className}`}>
			<div className="col">
				<Avatar url={profile.url} />
			</div>
			<div className="col">
				<p className="name">
					{firstName}, {lastName}
				</p>
				{type === "info" ? (
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
				) : (
					<ul className="wrap-contact">
						{contact.map((contact, index) => {
							return (
								<li className="item contact" key={index}>
									<p className="value">
										<a href={contact.link} target="_blank" rel="noopener noreferrer">
											{`_ ${contact.name}`}
										</a>
									</p>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</li>
	);
};

export default MemberDefault;
