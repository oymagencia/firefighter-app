import React, { Component } from "react";
import titleHome from "../assets/img/title-home.png";

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__box d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-6">
                <img src={titleHome} alt="Logo" className="img-fluid d-block" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
