import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Navbar, Home, Details} from "./";


class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route  path= "/" exact component= {Home}/>
            <Route path= "/detail" component= {Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
