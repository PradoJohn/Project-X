

import { useState } from 'react';
/*****Navbar imports*****/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/*******Icon imports *******/
import {FaSearch, FaHome} from 'react-icons/fa';
import {FaPeopleGroup, FaBagShopping, FaBell} from 'react-icons/fa6'
import {AiFillMessage} from 'react-icons/ai'


function LinkedinNavbar(){

  return (
    <>
        {/* <Navbar>
            <Nav className='me-3'>
              <Nav.Link href="#"><FaSearch className='custom-icon' size={24}/></Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#"><FaHome className='custom-icon'size={25}/></Nav.Link>
              <Nav.Link href="#"><FaPeopleGroup className='custom-icon' size={25}/></Nav.Link>
              <Nav.Link href="#"><FaBagShopping className='custom-icon' size={25}/></Nav.Link>
              <Nav.Link href="#"><AiFillMessage className='custom-icon' size={25}/></Nav.Link>
              <Nav.Link href="#"><FaBell className='custom-icon' size={25}/></Nav.Link>
            </Nav>
        </Navbar> */}
        <Navbar expand="lg" className="bg-transparent mb-4">
        <Container fluid>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="bg-transparent"><FaSearch className='custom-icon' size={24}/></Button>
            </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><FaPeopleGroup className='custom-icon' size={25}/></Nav.Link>
              <Nav.Link href="#action2"><FaBagShopping className='custom-icon' size={25}/></Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    </>

  );
}

export default LinkedinNavbar

