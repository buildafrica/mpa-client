import React, { Component } from "react";
import MissingPersonCard from './MissingPersonCard';
import './css/MissingPersons.css';
import face1 from './img/faces/1.jpg';
import face2 from './img/faces/2.jpg';
import face3 from './img/faces/3.jpg';
import face4 from './img/faces/4.jpg';
import face5 from './img/faces/5.jpg';
import face6 from './img/faces/6.jpg';
import face7 from './img/faces/7.jpg';
import face8 from './img/faces/8.jpg';


class MissingPersonsList extends Component{
  render(){
    return(
      <div className="mt-5 mb-5 d-flex flex-row flex-wrap ml-3 mr-3">
        <MissingPersonCard image={face1} name="Kunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos"/>
        <MissingPersonCard image={face2} name="Funke Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face3} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face4} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face5} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face6} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face7} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCard image={face8} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
      </div>
    )
  }
}

export default MissingPersonsList;