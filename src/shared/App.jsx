import React from 'react';
import {Switch, Route} from 'react-router-dom';

// page
import {Home, Study, Member, Contact, Notfound} from 'page';

// component
import {Header} from 'component';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/about" component = {Home} />
        <Route path = "/study" component = {Study} />
        <Route path = "/member" component = {Member} />
        <Route path = "/contact" component = {Contact} />
        <Route component = {Notfound} />
      </Switch>
    </div>
  );
}

export default App;
