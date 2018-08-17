import React, { Component } from "react";
import './css/Header.css';
// import navigation dependant reactstrap components
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,   DropdownMenu,
  DropdownItem } from "reactstrap";

// import Navlink from react Router, while renaming component reference
  import { NavLink as RRNavLink } from 'react-router-dom';
  import HeaderSearch from "./HeaderSearch";


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
            <Navbar  expand="md" className="defaultNav">
              <NavbarBrand tag={RRNavLink} to="/" className="logo">MPA</NavbarBrand>
              <NavbarToggler onClick={this.toggle} className="mobileToggle"/>
              <Collapse isOpen={this.state.isOpen} navbar className="toggleButton">
                
              <Nav navbar className="mr-auto">
                <ul className="navbar-nav ml-5 mt-2 mt-md-0 CenterNav">
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/" className="text-white">Home</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/about" className="text-white">About</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/explore" className="text-white">Explore</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={RRNavLink} to="/report-case" className="text-white">Report a Case</NavLink>
                  </NavItem>
                </ul>
              </Nav>
                  

                    {/* // create another navigation section for the Search and Contribute Nav */}
                <Nav className="mr-5 ml-5">
                  <ul className="navbar-nav">
                  {/* Create Seperate Component for Header Search Bar */}
                    <HeaderSearch />

                    {/* Contribution Dropdown on Header */}
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-white mt-2 ml-3">
                      Contribute
                      </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag={RRNavLink} to="/report-sighting">
                            Report a Sighting
                        </DropdownItem>
                          <DropdownItem tag={RRNavLink} to="/create-account">
                            Create an Account
                        </DropdownItem>
                          <DropdownItem tag={RRNavLink} to="/social-alerts">
                            Social Responsibility
                        </DropdownItem>

                          <DropdownItem divider />
                          <DropdownItem tag={RRNavLink} to="/login">
                            Login
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
