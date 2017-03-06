import React from 'react';
import {connect} from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-dom';

const mapStateToAppProps = (state) => ({location: state.location})

let Menu = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

        <NavItem eventKey={1} href="#">Link</NavItem>

        <NavItem eventKey={2} href="#">Link</NavItem>

        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">

          <MenuItem eventKey={3.1}>Action</MenuItem>

          <MenuItem eventKey={3.2}>Another Action</MenuItem>

          <MenuItem eventKey={3.3}>Last Action</MenuItem>

          <MenuItem divider/>

          <MenuItem eventKey={3.3}>Other</MenuItem>

        </NavDropdown>

      </Nav>

    </Navbar.Collapse>
  </Navbar>
);

Menu = connect(mapStateToAppProps)(Menu)
export default Menu;