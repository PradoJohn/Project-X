import './Header.css'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaCodepen } from 'react-icons/fa';

function Header() {
  return (
    <>
      <Navbar id='custom-nav'>
        <Navbar.Brand as={Link} to="/">
          <FaCodepen size={40} className='icon'/>
          <h2>
            VictorConnect
          </h2>
        </Navbar.Brand>
        <Nav className="nav-links">
          <Link className="nav-link text-white" to='/students/'>STUDENTS</Link>
          <Link className="nav-link text-white" to='/assignments/'>ASSIGNMENTS</Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
