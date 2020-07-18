import React from "react";
// component
import { SectionTitle } from "com/component";

const HomeOverview = () => {
	return (
		<div className="HomeOverview">
			<div className="con">
				<SectionTitle type={"text"} title="We Are - " link={"/study"} />
				<div className="wrap-text">
					<p className="text">
						It is hard to access UI/UX design field think without programming technology. In addition, it is difficult to realization our own design. However, the output that designers can make by
						stepping into programming are incredible. Create your own design works, from simple webpage deployments to interactive graphics. <br />
						<br />
						Join us!
					</p>
				</div>
				<div className="wrap-img"></div>
			</div>
		</div>
	);
};

export default HomeOverview;
