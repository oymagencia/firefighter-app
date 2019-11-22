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
import Footer from "./components/Footer";
import Credit from "./components/Credits";
import Loader from "./views/Loader";
import Home from "./views/Home";
import Form from "./views/Form";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Redirect from="/" to="/preload" />
        {<Navigation />}
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
        <Footer />
        <Initiative />
        <Credit />
      </div>
    </Router>
  );
}
