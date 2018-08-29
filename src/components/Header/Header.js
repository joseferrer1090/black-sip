import React, { Component } from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import config from "./../../services/config";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBrands: [],
      airplane: ""
    };
  }
  componentDidMount() {
    console.log(".....Data.....");
    this.getData();
  }

  getData() {
    fetch(config.defaultUrl + "brands", {
      method: "GET"
    }).then(response =>
      response.json().then(data => {
        if (response.ok) {
          this.setState({
            dataBrands: data.data
          });
        }
        console.log(this.state.dataBrands);
      })
    );
  }

  render() {
    let hits = this.state.dataBrands.map((hit, index) => {
      return (
        <MenuItem
          key={index}
          onClick={() => {
            this.setState({ airplane: hit.name });
          }}
        >
          {hit.name}
        </MenuItem>
      );
    });

    console.log(this.state.airplane);
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Test BlackSip</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            {hits}
          </NavDropdown>
        </Nav>
        <Navbar.Text pullRight>
          <a href="https://github.com/joseferrer1090" target={"_blank"}>
            {" "}
            Jose Carlos Ferrer{" "}
          </a>
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default Header;
