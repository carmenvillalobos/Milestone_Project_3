import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded ? false : true);
  };

  return (
    <Navbar  className="sticky-top transparent" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand className="left" href="/">PlanRight</Navbar.Brand>
      <Navbar.Toggle className="right text" aria-controls="responsive-navbar-nav" onClick={handleToggle}>
        {expanded ? <MdClose /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>
        <Nav className="text left">
          <Nav.Link className='text' href='/Bookings'>My Trips</Nav.Link>
          <Nav.Link className='text' href='/Destinations'>All Destinations</Nav.Link>
          <Nav.Link className='text' href='/Login'>Login</Nav.Link>
          <Nav.Link className='text' href='/SignUp'>Sign-up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar
