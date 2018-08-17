import React from 'react';
import { Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


// using the props namespace
class MissingPersonCardFeatured extends React.Component {
  render() {
    return (

      <Col sm="3" className="mb-3 mt-3">
        <Card>
          <CardImg className="card__person-image" top width="100%" src={this.props.image} alt="Person-Card-Image" />
          <CardBody className="card__featured-body">
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.record}</CardSubtitle>
            <CardText>{this.props.lastSeen}</CardText>
            <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default MissingPersonCardFeatured;