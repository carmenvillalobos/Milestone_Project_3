import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded ? false : true);
  };

  return (
    <Navbar  className="sticky-top transparent" collapseOnSelect expand="lg" variant="dark">
       <Navbar.Brand href="/">
            <img
              alt=""
              src="https://image.similarpng.com/very-thumbnail/2021/08/Illustration-of-Travel-agency-logo-design-template-on-transparent-background-PNG.png"
              width="30"
              height="30"
              className="d-inline-block align-top left"
            />{' '}
          </Navbar.Brand>
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
