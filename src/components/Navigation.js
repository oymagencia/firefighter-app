import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Location
} from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark header__info">
          <a className="navbar-brand title-hello d-none" href="#">
            Fixed navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse header__info--items "
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a data-toggle="modal" href="#myModal" class="nav-link">
                  Iniciativa
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="modal" href="#myModalCredit" class="nav-link">
                  Creditos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
