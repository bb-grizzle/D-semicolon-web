import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Study from "./Study";
import Member from "./Member";
import { IsUserLogin } from "../../context/AdminProvider";
const Admin = () => {
	const {
		push,
		location: { pathname }
	} = useHistory();
	const islogin = IsUserLogin();

	useEffect(() => {
		if (pathname === "/_admin" || pathname === "/_admin/") {
			push("/_admin/study");
		}
	}, [pathname, push]);

	useEffect(() => {
		if (!islogin) {
			push("/_admin");
		}
	}, [islogin, push]);

	return (
		<div className="pageWrapper">
			<div className="con-small">
				<Route path="/_admin/study" component={Study} />
				<Route path="/_admin/member" component={Member} />
			</div>
		</div>
	);
};

export default Admin;
