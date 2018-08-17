import React, { Component } from "react";
import MissingPersonCardFeatured from './MissingPersonCardFeatured';
import './css/MissingPersons.css';
import face1 from './img/faces/11.png';
import face2 from './img/faces/12.png';
import face3 from './img/faces/17.png';
import face4 from './img/faces/14.png';



class MissingPersonsFeatured extends Component {
  render() {
    return (
      <div className="mt-5 mb-5 d-flex flex-row flex-wrap ml-3 mr-3">
        <MissingPersonCardFeatured image={face1} name="Adekunle Gold" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCardFeatured image={face2} name="Bimola Obi" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCardFeatured image={face3} name="Adesanya Nkiru" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
        <MissingPersonCardFeatured image={face4} name="Umezuroke Victor" record="Missing Since: 12, Mar 2015" lastSeen="Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos" />
      </div>
    )
  }
}

export default MissingPersonsFeatured;