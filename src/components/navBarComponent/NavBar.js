import React from "react";
import Navbar from "react-bootstrap/Navbar";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Yankee Kraft Golf League
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavigationBar;
