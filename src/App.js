import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Initiative from "./components/Initiative";
import Credit from "./components/Credits";
import Loader from "./views/Loader";
import Home from "./views/Home";
import Form from "./views/Form";

export default function BasicExample() {
  return (
    <Router>
      <div>
        {Location.pathname !== "/preload" ? "" : <Navigation />}
        <Redirect from="/" to="/preload" />
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
          <Route path="/preload">
            <Loader />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
        <Initiative />
        <Credit />
      </div>
    </Router>
  );
}
