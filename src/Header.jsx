

import './Header.css'

/******* Bootstrap imports *********/
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
} from 'react-bootstrap';

/*********React Icon import*************/
import {FaCodepen} from 'react-icons/fa';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id='custom-shadow'>
          <Container fluid>
            <Navbar.Brand href="/"><FaCodepen size={40} className='me-5 ml-5'/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/students">STUDENTS</Nav.Link>
              <Nav.Link href="/assignments">ASSIGNMENTS</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  );
}

export default Header;