import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PreFooter from './PreFooter';
import Footer from './Footer';
import HeaderLite from './HeaderLite';

//import svg components
import document from './img/svg/document.svg';
import report from "./img/svg/report.svg";
import give from './img/svg/hands.svg'




class About extends Component {
  render() {
    return (
      <section>
        <HeaderLite />
        
      <div className="App">
        <header className="App-header pt-2 p-5">
          <h1 className="App-title text-white pt-5">About the Missing Person's Project</h1>
            <p className="pl-md-5 pr-md-5">This platform will maintain an archive of all information which is published within its domain,
  users can query the database to search for current cases, un-resolved and resolved cases, and see if there is a law enforcement handler on any of the cases.</p>
        </header>
        </div>

        {/* Pre Footer Component */}
        <Container>
          <div className="mt-5 mb-4 d-flex flex-wrap flex-row offset-md-1 text-center">
            <PreFooter image={document} alt="learn how we work" heading="Who we Are" />
            <PreFooter image={report} alt="report a case" heading="Report a Sighting" />
            <PreFooter image={give} alt="donate and contribute" heading="Support Us" />
          </div>
        </Container>





        {/* Import Footer Component in Home */}
        <Footer />
      </section>
    );
  }
}

export default About;
