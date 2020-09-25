import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../shared/App";
import { MENU_DEFAULT, MENU_ADMIN } from "../../Data/menu";
import { IsUserLogin } from "../context/AdminProvider";
import { fbSignout } from "../../Firebase/firebase";

const Menu = () => {
	const { isMenu, setIsMenu } = useContext(AppContext);
	const [menu, setMenu] = useState(MENU_DEFAULT);
	const location = useLocation();
	const [isAdmin, setIsAdmin] = useState(false);
	const islogin = IsUserLogin();

	useEffect(() => {
		if (location.pathname.split("/")[1] === "_admin") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [location]);

	useEffect(() => {
		if (isAdmin && islogin) {
			setMenu(MENU_ADMIN);
		} else {
			setMenu(MENU_DEFAULT);
		}
	}, [islogin, isAdmin]);

	const handleNavClick = () => {
		setIsMenu(false);
	};

	const handleLogoutClick = () => {
		fbSignout();
	};

	return (
		<div className={`Menu ${isMenu ? "active" : "default"}`}>
			<div className="con">
				<ul className="gnb-mobile">
					{menu.map((el) => {
						return (
							<li key={el.name}>
								<NavLink exact to={el.href} activeClassName="active" onClick={handleNavClick}>
									{el.name}
								</NavLink>
							</li>
						);
					})}

					{isAdmin && islogin && (
						<p onClick={handleLogoutClick} className="btn-logout">
							logout
						</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Menu;
