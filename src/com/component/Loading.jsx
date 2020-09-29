import React, { useState, useEffect, useContext } from "react";
import { preventScroll, activeScroll } from "../../fn/default";
import { Semicolon } from "../../image/svg";
import { useInterval } from "../../Hooks/useInterval";
import { AppContext } from "../../shared/App";
import { useLocation } from "react-router-dom";

const Loading = () => {
	const [count, setCount] = useState(1);
	const [isAdmin, setIsAdmin] = useState(false);
	const { loading } = useContext(AppContext);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.split("/")[1] === "_admin") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [pathname]);

	useInterval(() => {
		if (loading) {
			setCount((n) => n + 1);
		} else {
			setTimeout(() => {
				setCount(1);
			}, 1000);
		}
	}, 500);

	useEffect(() => {
		if (loading) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [loading]);

	return (
		<div className={`Loading ${loading ? "active" : ""} ${isAdmin ? "isAdmin" : ""}`}>
			<div className="con">
				{Array.from(Array(count)).map((x, index) => (
					<Semicolon key={index} className={"semicolon"} />
				))}
			</div>
		</div>
	);
};

export default Loading;
