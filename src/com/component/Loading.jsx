import React, { useState, useEffect } from "react";
import { preventScroll, activeScroll } from "../../fn/default";
import { Semicolon } from "../../image/svg";
import { useInterval } from "../../Hooks/useInterval";

const Loading = ({ active }) => {
	const [count, setCount] = useState(1);

	useInterval(() => {
		if (active) {
			setCount((n) => n + 1);
		} else {
			setTimeout(() => {
				setCount(1);
			}, 1000);
		}
	}, 500);

	useEffect(() => {
		if (active) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [active]);

	return (
		<div className={`Loading ${active ? "active" : ""}`}>
			{Array.from(Array(count)).map((x, index) => (
				<Semicolon key={index} className={"semicolon"} />
			))}
		</div>
	);
};

export default Loading;
