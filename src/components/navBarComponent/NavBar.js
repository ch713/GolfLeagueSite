import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Yankee Kraft Golf League
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Membership</Nav.Link>
          <Nav.Link href="#home">Schedule</Nav.Link>
          <Nav.Link href="#home">Course</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
