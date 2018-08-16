import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';

class HeroForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="HeroForm">
        <h4 className="text-white heading-6 text-center">Search our Database</h4>
        <Nav tabs className="HeroFormNav mt-3 mb-4">
          <NavItem>
            {/* Tab Navigation Link */}
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' }, 'HeroFormNavLink')}
              onClick={() => { this.toggle('1'); }}>
              Male
            </NavLink>
          </NavItem>


          <NavItem>
            {/* Second Tab Navigation Link */}
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' }, 'HeroFormNavLink')}
              onClick={() => { this.toggle('2'); }}>
              Female
            </NavLink>
          </NavItem>


          <NavItem>
          {/* Second Tab Navigation Link */}
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' }, 'HeroFormNavLink')}
              onClick={() => { this.toggle('3'); }}>
              Unknown
            </NavLink>
          </NavItem>

        </Nav>{/* End Tab Navigation */}




        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Name">
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Location">
                  </Input>
                </FormGroup>
                <Button className="btn-block HeroFormButton mt-4" color="danger">Submit</Button>

              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Name">
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Location">
                  </Input>
                </FormGroup>
                <Button className="btn-block HeroFormButton mt-4" color="danger">Submit</Button>

              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Name">
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Input className="rounded-0 bg-transparent" type="text" placeholder="Location">
                  </Input>
                </FormGroup>
                <Button className="btn-block HeroFormButton mt-4" color="danger">Submit</Button>

              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

export default HeroForm;