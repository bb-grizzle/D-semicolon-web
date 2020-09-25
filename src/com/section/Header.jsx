import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../shared/App";

// iamge
import ic_menu_b from "image/icon/ic-menu-b.svg";
import ic_menu_w from "image/icon/ic-menu-w.svg";
import logo_b from "image/logo/D_logo_b.svg";
import logo_w from "image/logo/D_logo_w.svg";
import { IsUserLogin, useNowAction } from "../context/AdminProvider";
import { fbSignout } from "../../Firebase/firebase";
import { MENU_DEFAULT, MENU_ADMIN } from "../../Data/menu";

const Header = ({ hide }) => {
	const { isMenu, setIsMenu } = useContext(AppContext);
	const [menu, setMenu] = useState(MENU_DEFAULT);
	const location = useLocation();
	const [isAdmin, setIsAdmin] = useState(false);
	const islogin = IsUserLogin();
	const nowAction = useNowAction();
	const handleMenuClick = () => {
		setIsMenu(!isMenu);
	};

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

	const handleLogoutClick = () => {
		fbSignout();
	};

	return (
		<header className={`type-default ${isMenu ? "menu" : ""} ${hide ? "hide" : ""} ${nowAction !== null ? "isAddClick" : ""}`}>
			<div className="con div">
				<Link to="/" className="header-logo">
					<img className="logo logo-b" src={logo_b} alt="logo black" />
					<img className="logo logo-w" src={logo_w} alt="logo white" />
				</Link>

				<nav className="nav-pc media-pc navigation">
					<ul className="gnb">
						{location.pathname !== "/_admin" &&
							menu.map((el) => {
								return (
									<li className="gnb" key={el.name}>
										<NavLink activeClassName="active" exact to={el.href}>
											{el.name}
										</NavLink>
									</li>
								);
							})}
					</ul>
					{isAdmin && islogin && (
						<p onClick={handleLogoutClick} className="btn-logout">
							logout
						</p>
					)}
				</nav>

				<div className={`Btnicon btn-menu media-mobile`} onClick={handleMenuClick}>
					<img className="ic-menu ic-menu-b" src={ic_menu_b} alt={`icon menu`} />
					<img className="ic-menu ic-menu-w" src={ic_menu_w} alt={`icon menu`} />
					<img className="ic-menu ic-menu-w rotate" src={ic_menu_w} alt={`icon menu`} />
				</div>
			</div>
		</header>
	);
};

export default Header;
