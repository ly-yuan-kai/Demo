import React, { Component } from "react";
import {
  NavLink,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Demo from "./Demo";
import Clock from "./Clock";

class Main extends Component {
  render() {
    return(
      <HashRouter>
        <div className="margin">
          <h1>React Demo</h1>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/demo">Demo</NavLink></li>
            <li><NavLink to="/clock">Timer</NavLink></li>
          </ul>
          <Route path="/home" component={Home}/>
          <Route path="/demo" component={Demo}/>
          <Route path="/clock" component={Clock}/>
        </div>
      </HashRouter>
    )
  }
}
 
export default Main;
