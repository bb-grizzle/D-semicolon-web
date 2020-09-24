import React, { useState, createContext, useContext } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);

	return <AdminContext.Provider value={{ isLogin, setIsLogin }}>{children}</AdminContext.Provider>;
};

export const IsUserLogin = () => {
	const { isLogin } = useContext(AdminContext);
	return isLogin;
};

export default AdminProvider;
