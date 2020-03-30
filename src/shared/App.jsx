import React, {useState, useEffect, createContext} from 'react';
import {Switch, Route} from 'react-router-dom';

// page
import {Home, Study, Member, Contact, Notfound} from 'com/page';

// component
import {Header, Menu} from 'com/section';

// context
export const AppContext = createContext();


function App() {
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    handleWinSize();
  }, [])

  const handleWinSize = () => {
    window.addEventListener('resize', () => {
      if(window.innerWidth>992){
        setIsMenu(false);
      }
    })
  }

  return (
    <div className="App">
      <AppContext.Provider value = {{isMenu, setIsMenu}}>
        <Header />
        <Menu />

        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/about" component = {Home} />
          <Route path = "/study" component = {Study} />
          <Route path = "/member" component = {Member} />
          <Route path = "/contact" component = {Contact} />
          <Route component = {Notfound} />
        </Switch>
      </AppContext.Provider>
    </div>
  );
}

export default App;
