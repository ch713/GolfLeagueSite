import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Welcome</h1>
          <p>This is some landing text to greet the user with.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Welcome;
