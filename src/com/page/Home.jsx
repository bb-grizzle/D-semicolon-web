import React, { createContext, useState, useEffect } from "react";

// section
import { HomeCover, HomeOverview, HomeMember, HomeContact } from "com/section";
import Loading from "../component/Loading";
import { useMember, useContactMember } from "../../Data/member";
export const HomeContext = createContext();

const Home = () => {
	const [loading, setLoading] = useState(true);
	const { data } = useMember();
	const { data: contactData } = useContactMember();

	useEffect(() => {
		if (data && contactData) {
			setLoading(false);
		}
	}, [contactData, data]);

	return (
		<div className="Home">
			<Loading active={loading} />
			{data && contactData && (
				<HomeContext.Provider value={{ setLoading }}>
					<HomeCover />
					<HomeOverview />
					<HomeMember data={data[0]} />
					<HomeContact data={contactData} />
				</HomeContext.Provider>
			)}
		</div>
	);
};

export default Home;
