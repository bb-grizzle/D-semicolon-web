import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../shared/App";

// iamge
import ic_menu_b from "image/icon/ic-menu-b.svg";
import ic_menu_w from "image/icon/ic-menu-w.svg";
import logo_b from "image/logo/D_logo_b.svg";
import logo_w from "image/logo/D_logo_w.svg";

const Header = ({ hide }) => {
	const { isMenu, setIsMenu } = useContext(AppContext);
	const handleMenuClick = () => {
		setIsMenu(!isMenu);
	};

	return (
		<header className={`type-default ${isMenu ? "menu" : ""} ${hide ? "hide" : ""}`}>
			<div className="con div">
				<Link to="/" className="header-logo">
					<img className="logo logo-b" src={logo_b} alt="logo black" />
					<img className="logo logo-w" src={logo_w} alt="logo white" />
				</Link>

				<nav className="nav-pc media-pc">
					<ul className="gnb">
						<li className="gnb">
							<NavLink activeClassName="active" exact to="/">
								about
							</NavLink>
						</li>
						<li className="gnb">
							<NavLink activeClassName="active" to="/study">
								study
							</NavLink>
						</li>
						<li className="gnb">
							<NavLink activeClassName="active" to="/member">
								member
							</NavLink>
						</li>
						<li className="gnb">
							<NavLink activeClassName="active" to="/contact">
								contact
							</NavLink>
						</li>
					</ul>
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
