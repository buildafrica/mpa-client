import React, { Component } from 'react';
import { Col } from 'reactstrap';


class PreFooter extends Component {
  render() {
    return (
      <Col sm="4" className="text=center mb-3">
        <img src={this.props.image} alt={this.props.alt} className="prefooter__image mb-3" />
        <h4>{this.props.heading}</h4>
      </Col>
    )
  }
};

export default PreFooter;