import React, { useContext, useEffect } from "react";
import Login from "./login";
import Admin from "./Admin";
import { AdminContext, IsUserLogin } from "../../context/AdminProvider";
import { fbAuthListener } from "../../../Firebase/firebase";
import { useHistory } from "react-router-dom";

const Index = () => {
	const { setIsLogin } = useContext(AdminContext);
	const islogin = IsUserLogin();
	const { push } = useHistory();

	useEffect(() => {
		fbAuthListener(setIsLogin);
	}, [islogin, setIsLogin]);

	useEffect(() => {
		if (!islogin) {
			push("/_admin");
		}
	}, [islogin, push]);

	return islogin ? <Admin /> : <Login />;
};

export default Index;
