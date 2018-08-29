import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "./../Header/Header";
import SweetAlert from "react-bootstrap-sweetalert";
import DashboardWrapper from "./../../dashboardwrapper/dashboardWrapper";
import config from "./../../services/config";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      created: false,
      name: "",
      email: "",
      cellphone: "",
      age: "18",
      show: false,
      modalTitle: "Operacion",
      historyPush: ""
    };
    this.submitted = false;
  }

  _handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  _handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  _handleChangeCellPhone = e => {
    this.setState({
      cellphone: e.target.value
    });
  };

  _handleChangeAge = e => {
    this.setState({
      age: e.target.value
    });
  };

  _handleSubmitForm = e => {
    e.preventDefault();
    this._postForm();
  };

  _postForm = () => {
    this.setState({
      loading: true
    });
    fetch(config.defaultUrl + "users", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        cellphone: this.state.cellphone,
        age: this.state.age
      })
    }).then(response =>
      response.json().then(data => {
        if (response.ok) {
          this.setState({
            created: true,
            loading: false,
            show: true
          });
        } else if (response.status === 422) {
          this.setState({
            clicked: false,
            errors: data,
            loading: false
          });
        }
      })
    );
  };

  closeSweet() {
    this.props.history.push(this.state.historyPush);
    this.setState({ show: false });
    // <Redirect to="/" />;
  }

  clearForm() {}
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div>
        <Header />
        <DashboardWrapper>
          <SweetAlert
            success
            show={this.state.show}
            title="Demo"
            text="SweetAlert in React"
            onConfirm={() => {
              this.closeSweet();
            }}
          />
          <div className="container-fluid">
            <div className="row col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title"> Formulario de registro </h4>
                </div>
                <form
                  className="form"
                  role="form"
                  onSubmit={this._handleSubmitForm}
                >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="form-control"
                            aria-label="..."
                            placeholder={"Nombre completo"}
                            onChange={this._handleChangeName}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope" />
                          </span>
                          <input
                            type="email"
                            name={"email"}
                            className="form-control"
                            aria-label="..."
                            value={this.state.email}
                            placeholder={"Email"}
                            onChange={this._handleChangeEmail}
                            required={true}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-phone" />
                          </span>
                          <input
                            type="tel"
                            name="cellphone"
                            className="form-control"
                            value={this.state.cellphone}
                            aria-label="..."
                            onChange={this._handleChangeCellPhone}
                            placeholder="311-3844-409"
                            pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i
                              className="glyphicon glyphicon-thumbs-up
                        "
                            />
                          </span>
                          <input
                            type="number"
                            name="age"
                            className="form-control"
                            value={this.state.age}
                            aria-label="..."
                            placeholder={"Edad"}
                            onChange={this._handleChangeAge}
                            required
                            pattern="[0-99]"
                            min={18}
                            max={99}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                    >
                      {" "}
                      Registrarse{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={() => {
                        this.props.history.push(this.state.historyPush);
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DashboardWrapper>
      </div>
    );
  }
}

export default Register;
