import React, { Component } from "react";
import Header from "../Header/Header";
import DashbaordWrapper from "./../../dashboardwrapper/dashboardWrapper";
import Message from "./Component/Welcome";

class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plane: this.props.airplane
    };
  }

  render() {
    console.log(this.state.plane);
    return (
      <div>
        <Header />
        <DashbaordWrapper>
          <Message ref="header" airplane={this.state.plane} />
        </DashbaordWrapper>
      </div>
    );
  }
}

export default Dashbaord;
