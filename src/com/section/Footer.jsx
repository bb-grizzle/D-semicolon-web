import React from "react";
import logo from "image/logo/D_logo_w.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="con">
				<div className="col">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<nav>
						<ul>
							<li>
								<NavLink to={"/"}>about</NavLink>
							</li>
							<li>
								<NavLink to={"/study"}>study</NavLink>
							</li>
							<li>
								<NavLink to={"/member"}>member</NavLink>
							</li>
							<li>
								<NavLink to={"/contact"}>contact</NavLink>
							</li>
						</ul>
					</nav>
					<p className="copyright">Copyright © 2019 Kunkok University _ D-semicolon</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
