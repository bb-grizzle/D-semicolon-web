import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";

// page
import { Home, Study, Member, Contact, Notfound } from "com/page";

// component
import { Header, Menu } from "com/section";

// fn
import { useWindowSize } from "fn/default";

// context
export const AppContext = createContext();

function App() {
  const [isMenu, setIsMenu] = useState(false);
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
      <AppContext.Provider value={{ screenType, isMenu, setIsMenu }}>
        <Header />
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
