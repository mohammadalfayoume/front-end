import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Navbar,NavItem} from "react-bootstrap";
import  "../style/Header.css";
import logo from '../assets/logo3.png';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function Header() {


  return (
    <div>
      <Navbar bg="dark" expand="lg" >
        <Container>


          <Navbar.Brand 
          style={{color:'white'}}
            className="d-flex gap-3 align-items-center fs-2 text-uppercase" href="/">
            <img className="logo-img" src={logo} alt="logo"/>
            NEWS LIVE
          </Navbar.Brand>
          
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="ml-auto justify-content-end"
          >
            <Nav>
              <Nav.Link  className="fs-5 text-uppercase px-3 fw-bold" href="/">
                Home
              </Nav.Link>

              <Nav.Link
                className="fs-5 text-uppercase px-3 fw-bold" href="/profile">
                Profile
              </Nav.Link>
              <Nav.Link
                className="fs-5 text-uppercase px-3 fw-bold" href="/about" >
                About Us
              </Nav.Link>

              <Nav.Link
                className="fs-5 text-uppercase px-3 fw-bold" href="/contact">
                Contact Us
              </Nav.Link>


              <Nav.Link >
              <LoginButton/>
              </Nav.Link>

              <Nav.Link>
               <LogoutButton/>
              </Nav.Link>
             
              
          
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </div>
  );
}
export default Header;