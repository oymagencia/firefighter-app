import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loader from "./views/Loader";
import Home from "./views/Home";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <ul className="fix d-none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/prehome">
            <Loader />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </div>
    </Router>
  );
}
