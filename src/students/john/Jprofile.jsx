

/****Main imports*****/
import React from 'react';
import { useState } from 'react';
import './Main.css'

/*****Bootstrap imports*****/
import {Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';

/*********React icons imports*********/
import {FaBars, FaHome, FaHorse, FaLinkedin, FaServicestack} from 'react-icons/fa';
import {RxDashboard} from 'react-icons/rx';
import {HiFire} from 'react-icons/hi';

/*****Body imports*****/
import LinkedinNavbar from './LinkedinNavbar.jsx'
import LinkedinBody from './pages/LinkedinBody.jsx'



function Jprofile(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container fluid className='main-container'>
          {/* <Sidebar/> */}

        <div className={`row sidebar ${isOpen ? 'open' : ''}`}>
            <Navbar.Brand onClick={toggleSidebar} className='brand'><HiFire className='custom-icon mt-2' size={45} /></Navbar.Brand>
            <ul className="nav-list">
              <li className ='list' href="#home"><span><RxDashboard  className= 'custom-icon' size={35}/> </span>
              {isOpen? <h3 className='ml-10' style={{color: 'white'}}>RxDashboard</h3>: null}</li>
              <li className ='list' href="#about"><FaServicestack className= 'custom-icon' size={35}/>
              {isOpen?<h3 className='ml-10' style={{color: 'white'}}>FaService</h3>:null}</li>
              <li className ='list' href="#services"><FaHorse className= 'custom-icon' size={35}/>
              {isOpen?<h3 className='ml-10' style={{color: 'white'}}>FaHorse</h3>:null}</li>
              <li className ='list' href="#contact"><FaBars className= 'custom-icon' size={35}/>
              {isOpen?<h3 className='ml-10' style={{color: 'white'}}>FaBars</h3>:null}</li>
            </ul>
        </div>
        <div className='main-content pl-10'>
            <LinkedinNavbar/>
            <LinkedinBody/> 
        </div>
      </Container>
         
        
    </>
  );
}

export default Jprofile