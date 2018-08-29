import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.airplane
    };
  }

  render() {
    return (
      <Jumbotron>
        <h1>Hola, Bienvenido !</h1>
        <p>
          Sabemos que quieres viajar en un{" "}
          <strong>{this.props.airplane}</strong>, por favor diligencia el
          siguiente formulario.
        </p>
        <p>
          <Link to="/register" className="btn btn-primary">
            go to Form
          </Link>
        </p>
      </Jumbotron>
    );
  }
}

Welcome.propTypes = {
  airplane: PropTypes.string
};

Welcome.defaultProps = {
  airplane: " "
};

export default Welcome;
