import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import titleHome from "../assets/img/title-home.png";
import loremHome from "../assets/img/lorem-home.png";
import buttonHome from "../assets/img/button-home.jpg";

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__box">
          <div className="home__box--mask d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 offset-md-8">
                  <img
                    src={titleHome}
                    alt=""
                    className="img-fluid d-block m-auto"
                  />
                </div>
                <div className="col-12 col-md-4 offset-md-8">
                  <img
                    src={loremHome}
                    alt=""
                    className="img-fluid d-block m-auto mt-md-4"
                  />
                </div>
                <div className="col-12 col-md-2 offset-9">
                  <button type="submit" class="btn mt-md-4">
                    <Link to="/form">
                      <img src={buttonHome} alt="" width="100%" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
