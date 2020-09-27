import React from "react";

const MemberDefault = ({ data, type, className }) => {
	const { firstName, lastName, tell, profile, email, contact } = data;
	return (
		<li className={`MemberDefault ${type} ${className}`}>
			<div className="col">
				<div className="avatar" style={{ backgroundImage: `url('${profile.url}')` }}></div>
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
					<ul>
						{contact.map((contact, index) => {
							return (
								<li className="item contact" key={index}>
									<p className="value">
										<a href={contact.link} target="_blank" rel="noopener noreferrer">
											{contact.name}
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
