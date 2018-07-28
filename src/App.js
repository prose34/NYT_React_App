// import React, { Component } from 'react';
import React from "react";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route component={ NoMatch } />
      </Switch>
    </div>
  </Router>

);

export default App;
