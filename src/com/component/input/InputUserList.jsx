import React, { useEffect, useState } from "react";
import { useMember } from "../../../Data/member";
import Avatar from "../Avatar";

const InputUserList = ({ label, value, setValue }) => {
	const { origin } = useMember();
	const [isDropdownClicked, setIsDropdownClicked] = useState(false);
	const [nowUser, setNowUser] = useState(null);

	useEffect(() => {
		if (origin && value) {
			setNowUser(origin.find((el) => el.id === value));
		} else {
			setNowUser(null);
		}
	}, [value, origin]);

	const onUserClicked = (id) => {
		setValue(id);
		setIsDropdownClicked(false);
	};

	return (
		<div className="InputDefault InputUserList inputItem">
			<div className="row">
				<label className="label">{label}</label>
			</div>

			{origin && (
				<div className="row userSelector">
					<div className="userWrapper" onClick={() => setIsDropdownClicked((prev) => !prev)}>
						{!nowUser ? (
							<p className={"placeholder"}>select user</p>
						) : (
							<div className="user-list">
								<div className="user-info">
									<Avatar url={nowUser.profile.url} />
									<p>
										{nowUser.firstName}, {nowUser.lastName}
									</p>
								</div>
							</div>
						)}
					</div>
					{isDropdownClicked && (
						<ul className="userListWrapper">
							{origin.map((el) => {
								return (
									<div className={`user-list`} key={el.id} onClick={() => onUserClicked(el.id)}>
										<div className={`user-info ${!value ? "active" : el.id === value ? "active" : ""}`}>
											<Avatar url={el.profile.url} />
											<p>
												{el.firstName}, {el.lastName}
											</p>
										</div>
										{el.id === value && <p>SELECTED</p>}
									</div>
								);
							})}
						</ul>
					)}
				</div>
			)}
		</div>
	);
};

export default InputUserList;
