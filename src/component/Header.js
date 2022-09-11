import React from "react";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
//import "../style/Footer.css"


class Header extends React.Component{
    render(){
        return(
            <>
            <div>
            <Navbar collapseOnSelect expand="lg"   style={{background:"ghostwhite"}}>
                
            <Navbar.Brand style={{padding:'10px 20px'}}>Life News</Navbar.Brand>
            <div style={{display:'flex',flexDirection:'space-between', gap:'15px'}}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavItem style={{color:'white'}}><Link to="/" className="nav-link" style={{color:'blue'}}><Badge bg="primary">Home</Badge>{' '}</Link></NavItem>
           <NavItem style={{color:'white'}}><Link to="/profile" className="nav-link" style={{color:'blue'}}><Badge bg="primary">About Us</Badge>{' '}</Link></NavItem>
           <NavItem style={{color:'white'}}><Link to="/contact" className="nav-link" style={{color:'blue'}}><Badge bg="primary">Contact Us</Badge>{' '}</Link></NavItem>
           <NavItem style={{color:'white'}}><Link to="/contact" className="nav-link" style={{color:'blue'}}><Badge bg="primary">Login</Badge>{' '}</Link></NavItem>

           </Nav>
            
            
            </div>
          </Navbar>
          </div>
            </>
        )
    }
}

export default Header;