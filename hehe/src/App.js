import React, { Component } from "react";
import Chips from "./Love";
import Sardines from "./Star";
import Soda from "./Tiger";
import Navbar from "./Navbar";
import VendingMachine from "./Machine";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/Tiger' render={() => <Soda />} />
          <Route exact path='/Star' render={() => <Sardines />} />
          <Route exact path='/Love' render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;