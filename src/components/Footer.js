import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <footer className="bg-default">
        <Container>
          <Row>
            <Col sm="5" className="mt-5 mb-5"> 
            <h2 className="display-4 text-white font-weight-bold">MPA</h2>
              <p className="text-white">The Missing Persons Project supports with the investigation and resolution of unidentified person cases while holding an exchange of information and maintaining a national/continental database of missing persons and unidentified records</p>
            </Col>

            <Col sm="7" className="text-white mt-5">
              <Row>
                <Col sm="4" className="pl-md-5 mt-md-5 mt-4 pl-4">
                  <h5 className="mb-4">Quick Links</h5>
                  <Link className="text-white footer__link" to="/"><h6>FAQs</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>About Us</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Privacy Policy</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Legal</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Donate</h6></Link>
                </Col>

                <Col sm="4" className="pl-md-5 mt-md-5 mt-4 pl-4">
                  <h5 className="mb-4">Help</h5>
                  <Link className="text-white footer__link" to="/"><h6>FAQs</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>About Us</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Privacy Policy</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Legal</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Donate</h6></Link>
                </Col>

                <Col sm="4" className="pl-md-5 mt-md-5 mt-4 pl-4">
                  <h5 className="mb-4">Social</h5>
                  <Link className="text-white footer__link" to="/"><h6>Facebook</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Twitter</h6></Link>
                  <Link className="text-white footer__link" to="/"><h6>Instagram</h6></Link>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>

      </footer>

    )
  }
}


export default Footer;