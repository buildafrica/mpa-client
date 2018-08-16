import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import HeroForm from './HeroForm';
import './css/Home.css';




class Home extends Component{
  render() {
    return (
     <div>  
      <Jumbotron className="bg-default" style={Hero}>
        <Container>
          <Row>
          <Col sm="6" className="mt-5">
            <h1 className="display-5 color-alice">Help us build a Database of Missing Persons</h1>
            <p className="text-white">Collectively we can create a collaborative platform that will help in the investigation
              of missing and unidentified person cases</p>
          </Col>

          {/* Hero Form Column */}
          <Col sm="4" className="offset-md-2">
          <HeroForm />
          </Col> 
          </Row>
        </Container>
      </Jumbotron>
    </div>

    


    )
  }
}

const Hero = {
  borderRadius: 0,
  minHeight: '60vh',
}




export default Home;