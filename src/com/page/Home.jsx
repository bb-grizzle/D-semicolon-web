import React from "react";

// section
import { HomeCover, HomeOverview, HomeMember, HomeContact } from "com/section";

const Home = () => {
	return (
		<div className="Home">
			<HomeCover />
			<HomeOverview />
			<HomeMember />
			<HomeContact />
		</div>
	);
};

export default Home;
