import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// page
import { Home, Study, Member, Contact, Notfound, Project } from "com/page";
import Admin from "com/page/admin";

// component
import { Header, Menu, Footer } from "com/section";

// fn
import { useWindowSize } from "fn/default";
import { useScrollDirection } from "../Hooks";
import { fullHeight, preventScroll, activeScroll } from "../fn/default";
import AdminProvider from "../com/context/AdminProvider";
import MetaLayout from "../com/MetaLayout";
import Loading from "../com/component/Loading";
import { initAnalyticsFirebase } from "../Firebase/firebase";

// context
export const AppContext = createContext();

function App() {
	const [isMenu, setIsMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const { listen } = useHistory();

	const scrollDir = useScrollDirection({ initialDirection: 0, thresholdPixels: 0, off: false });
	const size = useWindowSize();
	const [screenType, setScreenType] = useState(null);

	useEffect(() => {
		fullHeight();
		initAnalyticsFirebase();
	}, []);

	useEffect(() => {
		listen(() => {
			window.scrollTo(0, 0);
		});
	}, [listen]);

	useEffect(() => {
		if (size[0] <= 992) {
			// md
			setScreenType("md");
		} else {
			// pc
			setScreenType(null);
		}
	}, [size]);

	useEffect(() => {
		if (isMenu) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [isMenu]);

	return (
		<div className="App">
			<MetaLayout
				headData={{
					description: "Designers Coding",
					title: "D-semicolon",
					url: "https://d-semicolon.web.app/",
				}}
			/>
			<AdminProvider>
				<AppContext.Provider value={{ screenType, isMenu, setIsMenu, scrollDir, loading, setLoading }}>
					<Header hide={scrollDir === "down" ? true : false} />
					<Menu />
					<Loading />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={Home} />
						<Route path="/study" component={Study} />
						<Route path="/project" component={Project} />
						<Route path="/member" component={Member} />
						<Route path="/contact" component={Contact} />
						<Route path="/_admin" component={Admin} />

						<Route component={Notfound} />
					</Switch>

					<Footer />
				</AppContext.Provider>
			</AdminProvider>
		</div>
	);
}

export default App;
