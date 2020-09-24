import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Study from "./Study";
import Member from "./Member";
import Contact from "./Contact";
import { IsUserLogin } from "../../context/AdminProvider";
const Admin = () => {
	const {
		push,
		location: { pathname }
	} = useHistory();
	const islogin = IsUserLogin();
	useEffect(() => {
		console.log(pathname);
		if (pathname === "/_admin" || pathname === "/_admin/") {
			push("/_admin/study");
		}
	}, [pathname, push]);

	useEffect(() => {
		console.log(islogin);
		if (!islogin) {
			push("/_admin");
		}
	}, [islogin, push]);

	return (
		<div className="pageWrapper">
			<div className="con-small">
				<Route path="/_admin/study" component={Study} />
				<Route path="/_admin/member" component={Member} />
				<Route path="/_admin/contact" component={Contact} />
			</div>
		</div>
	);
};

export default Admin;
