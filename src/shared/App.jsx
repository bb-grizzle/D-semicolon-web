import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";

// page
import { Home, Study, Member, Contact, Notfound } from "com/page";

// component
import { Header, Menu } from "com/section";

// fn
import { useWindowSize } from "fn/default";
import { useScrollDirection } from "../Hooks";

// context
export const AppContext = createContext();

function App() {
	const [isMenu, setIsMenu] = useState(false);

	const scrollDir = useScrollDirection({ initialDirection: 0, thresholdPixels: 0, off: false });
	const size = useWindowSize();
	const [screenType, setScreenType] = useState(null);

	useEffect(() => {
		if (size[0] <= 992) {
			// md
			setScreenType("md");
		} else {
			// pc
			setScreenType(null);
		}
	}, [size]);

	return (
		<div className="App">
			<AppContext.Provider value={{ screenType, isMenu, setIsMenu, scrollDir }}>
				<Header hide={scrollDir === "down" ? true : false} />
				<Menu />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={Home} />
					<Route path="/study" component={Study} />
					<Route path="/member" component={Member} />
					<Route path="/contact" component={Contact} />
					<Route component={Notfound} />
				</Switch>
			</AppContext.Provider>
		</div>
	);
}

export default App;
