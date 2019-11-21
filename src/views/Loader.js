import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import movieFirefighters from "../assets/video/firefighters.mp4";
import titleLoader from "../assets/img/title-loader.png";
import buttonLoader from "../assets/img/button-loader.jpg";

class Loader extends Component {
  render() {
    return (
      <section className="loader">
        <div class="embed-responsive embed-responsive-16by9 loader__box">
          <video autoplay="true" muted="true" id="myVideo">
            <source src={movieFirefighters} type="video/mp4" />
          </video>
          <div className="loader__box--mask  d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 offset-4">
                  <img
                    src={titleLoader}
                    alt="Logo"
                    className="img-fluid d-block"
                  />
                </div>
                <div className="col-12 col-md-2 offset-5">
                  <button type="submit" class="btn mt-3">
                    <Link to="/home">
                      <img src={buttonLoader} alt="" width="100%" />
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

export default Loader;
