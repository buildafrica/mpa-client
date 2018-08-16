import React, { Component } from "react";
// import navigation dependant reactstrap components
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,   DropdownMenu,
  DropdownItem } from "reactstrap";

// import Navlink from react Router, while renaming component reference
  import { NavLink as RRNavLink } from 'react-router-dom';


class Header extends Component {
      constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar color="dark" expand="md">
              <NavbarBrand tag={RRNavLink} to="/">MPA</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                
              <Nav navbar className="mr-auto">
                <ul className="navbar-nav ml-5 mt-2 mt-md-0">
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/">Home</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/about">About</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/explore">Explore</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={RRNavLink} to="/report-case">Report a Case</NavLink>
                  </NavItem>
                </ul>
              </Nav>
                  

                    {/* // create another navigation section for the Search and Contribute Nav */}
                <Nav className="mr-5">
                  <ul className="navbar-nav">
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Contribute
                      </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag={RRNavLink} to="/report-sighting">
                            Report a Sighting
                        </DropdownItem>
                          <DropdownItem tag={RRNavLink} to="/report">
                            File a report
                        </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag={RRNavLink} to="/social-alerts">
                            Social Responsibility
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ul>
                </Nav>

              </Collapse>
            </Navbar>
          </div>
        );
      }
    }


export default Header;
