import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({links}) {

  const [hoveredIndex, setHoveredIndex] = useState(null);


  const isActive = (href) => {
    return window.location.pathname === href;
  };

  const navBar = {
    backgroundColor: '#202A44',
    color: 'black',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold'
  }

  function onMouseEnter(e) {
    e.target.style.color = 'white';
  }

  function onMouseLeave(e) {
    e.target.style.color = '#7BC0E3';
  }

  return (
    <Navbar expand="lg" style={navBar}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:'#f3ef0cff',  fontSize:'24px'}}>Codedex Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {links.map((link, index) => (
                <Nav.Link
                    key={index}
                    href={link.href}
                    active={isActive(link.href)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{color: hoveredIndex === index ? 'white' : '#60E1CB'}}
                >
                    {link.text}
                </Nav.Link>
            ))}
            <Nav.Link>
              <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{color: '#7BC0E3'}}>Login
              </span><span style={{color: '#7BC0E3'}}>/</span>
              <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{color: '#7BC0E3'}}>SignUp</span></Nav.Link>
            {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;