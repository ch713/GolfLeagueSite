import React from "react";
import Button from 'react-bootstrap/Button'

class Test extends React.Component {
  render() {
      return (
        <div>
            <button>
                  Test Button
            </button>
            <Button variant="primary">Primary</Button>{' '}
        </div>
    );
  }
}

export default Test;