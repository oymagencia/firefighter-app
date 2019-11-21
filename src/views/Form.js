import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import titleForm from "../assets/img/title-form.png";
import returnForm from "../assets/img/return-form.png";
import buttonForm from "../assets/img/button-form.jpg";

class Form extends Component {
  render() {
    return (
      <section className="form">
        <div className="form__box">
          <div className="form__box--mask d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 offset-md-8">
                  <img
                    src={titleForm}
                    alt=""
                    className="img-fluid d-block m-auto"
                  />
                </div>

                <div className="col-12 col-md-4 offset-md-8">
                  <form className="mt-md-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputNombre"
                        aria-describedby=""
                        placeholder="NOMBRE"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputApellido"
                        aria-describedby=""
                        placeholder="APELLIDO"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="inputCorreo"
                        aria-describedby=""
                        placeholder="EMAIL"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        id="inputTelefono"
                        aria-describedby=""
                        placeholder="TELÉFONO"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control"
                        id="inputMonto"
                        aria-describedby=""
                        placeholder="MONTO"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputMedioPago"
                        aria-describedby=""
                        placeholder="MEDIO DE PAGO"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-4 offset-md-8">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <button type="submit" class="btn">
                        <Link to="#">
                          <img src={buttonForm} alt="" width="100%" />
                        </Link>
                      </button>
                    </div>
                    <div className="col-12 col-md-4 offset-md-2">
                      <button type="submit" class="btn">
                        <Link to="/home">
                          <img src={returnForm} alt="" width="100%" />
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
