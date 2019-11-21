import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import contentCredit from "../assets/img/content-credit.png";
import buttonCredit from "../assets/img/button-credit.jpg";
import buttonClose from "../assets/img/button-close.svg";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    $("#myModalCredit").modal("hide");
  }
  render() {
    return (
      <div
        className="modal fade initiative"
        id="myModalCredit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-full initiative__box">
          <div className="modal-content initiative__box--content">
            <div className="modal-header initiative__box--content--header">
              <button type="button" className="close" data-dismiss="modal">
                <img src={buttonClose} alt="" width="100%" />
              </button>
            </div>
            <div className="modal-body initiative__box--content--body  d-flex align-items-center justify-content-center modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 offset-md-4">
                    <img
                      src={contentCredit}
                      alt=""
                      className="img-fluid d-block m-auto"
                    />
                  </div>
                  <div className="col-12 col-md-2 offset-5">
                    <button type="submit" class="btn mt-md-4">
                      <Link to="/form" onClick={this.handleClick}>
                        <img src={buttonCredit} alt="" width="100%" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer initiative__box--content--footer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Credit;
