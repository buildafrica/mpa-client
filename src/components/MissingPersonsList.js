import React, { Component } from "react";
import MissingPersonCard from './MissingPersonCard';
import './css/MissingPersons.css';


class MissingPersonsList extends Component{
  render(){
    return(
      <div className="mt-5 mb-5 d-flex flex-row flex-wrap ml-3 mr-3">
      <MissingPersonCard />
      <MissingPersonCard />
      <MissingPersonCard />
      <MissingPersonCard />
      <MissingPersonCard />
      <MissingPersonCard />
      </div>
    )
  }
}

export default MissingPersonsList;