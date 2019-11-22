import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Location
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__box">
          <div className="container-fluid footer__box--items">
            <div className="row">
              <div className="col-md-3">
                <p className="mb-0 text-left">
                  <a
                    data-toggle="modal"
                    href="#myModalCredit"
                    className="link-modal"
                  >
                    <i class="far fa-file-alt mr-1"></i>Creditos
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-0 text-center">
                  <span>Cuartel General </span>
                  <span className="mb-0 point">•</span>
                  <a href="mailto:contacto@cbs.cl">contacto@cbs.cl</a>
                  <span className="mb-0 point">•</span>
                  <a href="tel:+56223061500">+56 2 2306-1500</a>
                  <span className="mb-0 point">•</span>
                  <a href="https://www.google.com/maps/place/Santo+Domingo+978,+Santiago,+Regi%C3%B3n+Metropolitana/data=!4m2!3m1!1s0x9662c5a35ec13cd9:0xdb4c1dcd4f91f27e?sa=X&ved=2ahUKEwjbg9Gozf7lAhXMl54KHXHdCu0Q8gEwAHoECAwQAQ">
                    Santo Domingo 978
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <p className="mb-0 text-right">
                  <a href="tel:+56223061500">
                    <i class="fas fa-phone-alt mr-1"></i>
                    132
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
