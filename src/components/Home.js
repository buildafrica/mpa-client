import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row, Button } from 'reactstrap';
import HeroForm from './HeroForm';
import MissingPersonsList from './MissingPersonsList';
import MissingPersonFeatured from './MissingPersonFeatured';
import Footer from './Footer';
import './css/Home.css';




class Home extends Component{
  render() {
    return (
     <section>  
       <div>
        <Jumbotron className="bg-default" style={Hero}>
          <Container>
            <Row>
            <Col sm="6" className="mt-5">
              <h1 className="display-5 mpa__color-alice">Help us build a Database of Missing Persons</h1>
              <p className="text-white">Collectively we can create a collaborative platform that will help in the investigation
                of missing and unidentified person cases</p>
            </Col>

            {/* Hero Form Component Column */}
            <Col sm="4" className="offset-md-2">
            <HeroForm />
            </Col> 

            </Row>
          </Container>
        </Jumbotron>
      </div>

      {/* Missing Persons Featured Entries  */}
      <MissingPersonFeatured />


      {/* Header and Subtitle Center Section */}
      <Container className="mt-5 mb-5 pt-5 pb-5">
        <div className="offset-md-1">
        <h2 className="text-center display-4 font-weight-bold mpa__color-dark">Let's Bring Them Back</h2>
        <p className="text-center"> Some missing people you will have heard of, but many more you won’t. For their families, life can feel like a desperate and unbearable struggle as they wait for days or even years.That’s why we are here for missing persons and their families, 24 hours a day, 365 days a year, to provide free and confidential support, help us report a sighting, search our database, cross check information, query the database.</p>
        </div>
      </Container>
  
  
      {/* Missing Persons Card List Component  */}
      <div>
        <MissingPersonsList />
      </div>


      {/* Load More Button  */}
      <div className="text-center mb-5 pb-md-5">
      <Button size="lg" className="rounded-0  mpa__bg-accent">Load More</Button>
      </div>


     

      {/* Import Footer Component in Home */}
      <Footer />

    </section>
    )
  }
}

const Hero = {
  borderRadius: 0,
  minHeight: '60vh',
}




export default Home;