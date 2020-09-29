import React, { createContext, useContext, useEffect } from "react";

// section
import { HomeCover, HomeOverview, HomeMember, HomeContact } from "com/section";
import { useMember, useContactMember } from "../../Data/member";
import { AppContext } from "../../shared/App";
import PageAnimation from "../component/PageAnimation";
export const HomeContext = createContext();

const Home = () => {
	const { data } = useMember();
	const { data: contactData } = useContactMember();
	const { setLoading } = useContext(AppContext);

	useEffect(() => {
		if (data && contactData) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [contactData, data, setLoading]);

	return (
		<div className="Home">
			{data && contactData && (
				<PageAnimation>
					<HomeCover />
					<HomeOverview />
					<HomeMember data={data[0]} />
					<HomeContact data={contactData} />
				</PageAnimation>
			)}
		</div>
	);
};

export default Home;
