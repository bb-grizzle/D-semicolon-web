import React from "react";
import FloatingBtn from "./FloatingBtn";
import { useSetNowAction } from "../../context/AdminProvider";

const AdminFLoatingBtn = () => {
	const setNowAction = useSetNowAction();
	const handleClick = () => {
		setNowAction("ADD");
	};

	return <FloatingBtn onClick={handleClick} />;
};

export default AdminFLoatingBtn;
