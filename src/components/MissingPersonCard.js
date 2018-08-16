import React from 'react';
// import { Container, Card, CardFooter, Button, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Row, Col } from 'reactstrap';
import { Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import face from './img/faces/1.jpg';


// using the props namespace

class MissingPersonCard extends React.Component {
  render(){
    return (

      <Col sm="3">
        <Card>
          <CardImg top src={face} alt="Person-Card-Image" />
          <CardBody>
            <CardTitle>Adekunle Obi</CardTitle>
            <CardSubtitle>Missing Since: 12, Mar 2015</CardSubtitle>
            <CardText>Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos</CardText>
            <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}







// const MissingPersonCard = (props) => {
//   return (
//     <Container>
//     <Row>
//       <Col sm="3">
//         <Card>
//           <CardImg top src={face} alt="Person-Card-Image" />
//             <CardBody>
//               <CardTitle>Adekunle Obi<span>23yrs</span></CardTitle>
//               <CardSubtitle>Missing Since: 12, Mar 2015</CardSubtitle>
//               <CardText>Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos</CardText>
//               <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
//             </CardBody>
//             {/* <CardFooter>
//               Investigated by the NGP
//             </CardFooter> */}
//         </Card>
//       </Col>

//       <Col sm="3">
//         <Card>
//           <CardImg top src={face} alt="Person-Card-Image" />
//             <CardBody>
//               <CardTitle>Adekunle Obi</CardTitle>
//               <CardSubtitle>Missing Since: 12, Mar 2015</CardSubtitle>
//               <CardText>Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos</CardText>
//               <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
//             </CardBody>
//             {/* <CardFooter>
//               Investigated by the NGP
//             </CardFooter> */}
//         </Card>
//       </Col>

//       <Col sm="3">
//         <Card>
//           <CardImg top src={face} alt="Person-Card-Image" />
//             <CardBody>
//               <CardTitle>Adekunle Obi</CardTitle>
//               <CardSubtitle>Missing Since: 12, Mar 2015</CardSubtitle>
//               <CardText>Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos</CardText>
//               <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
//             </CardBody>
//             {/* <CardFooter>
//               Investigated by the NGP
//             </CardFooter> */}
//         </Card>
//       </Col>

//       <Col sm="3">
//         <Card>
//           <CardImg top src={face} alt="Person-Card-Image" />
//             <CardBody>
//               <CardTitle>Adekunle Obi</CardTitle>
//               <CardSubtitle>Missing Since: 12, Mar 2015</CardSubtitle>
//               <CardText>Last Seen: 98 Ademola Street, Ketu Ikeja, Lagos</CardText>
//               <Button className="card__tag-button btn-danger rounded-0 position-absolute">NEWEST</Button>
//             </CardBody>
//             {/* <CardFooter>
//               Investigated by the NGP
//             </CardFooter> */}
//         </Card>
//       </Col>




//     </Row>
//     </Container>
//   );
// };

export default MissingPersonCard;