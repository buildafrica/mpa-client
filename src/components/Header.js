import React, { Component } from "react";
// import navigation dependant reactstrap components
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,   DropdownMenu,
  DropdownItem } from "reactstrap";

// import Navlink from react Router, while renaming component reference
  import { BrowserRouter as router, NavLink as RRNavLink, Link  } from 'react-router-dom';


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
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                  </DropdownItem>
                      <DropdownItem>
                        Option 2
                  </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                  </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }


export default Header;
