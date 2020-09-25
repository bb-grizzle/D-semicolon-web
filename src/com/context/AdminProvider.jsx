import React, { useState, createContext, useContext, useEffect } from "react";
import { preventScroll, activeScroll } from "../../fn/default";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [nowAction, setNowAction] = useState("ADD");

	useEffect(() => {
		if (nowAction !== null) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [nowAction]);

	return <AdminContext.Provider value={{ isLogin, setIsLogin, nowAction, setNowAction }}>{children}</AdminContext.Provider>;
};

export const IsUserLogin = () => {
	const { isLogin } = useContext(AdminContext);
	return isLogin;
};

export const useNowAction = () => {
	const { nowAction } = useContext(AdminContext);
	return nowAction;
};

export const useSetNowAction = () => {
	const { setNowAction } = useContext(AdminContext);
	return setNowAction;
};

export default AdminProvider;
