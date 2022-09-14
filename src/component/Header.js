import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavItem } from "react-bootstrap";
import "../style/Header.css";
import logo from "../assets/logo3.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand
              style={{ color: "white" }}
              className="d-flex gap-3 fw-ystem-ui align-items-center fs-2 text-uppercase"
            >
              <img className="logo-img" src={logo} alt="logo" />
              NEWS LIVE
            </Navbar.Brand>

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="ml-auto justify-content-end"
            >
              <Nav>
                <Nav.Link className="nav" href="/">
                  Home
                </Nav.Link>

                {isAuthenticated && (
                  <Nav.Link className="nav" href="/profile">
                    Profile
                  </Nav.Link>
                )}
                {isAuthenticated && (
                  <Nav.Link className="nav" href="/community">
                    Community
                  </Nav.Link>
                )}
                <Nav.Link className="nav" href="/about">
                  About Us
                </Nav.Link>

                <Nav.Link className="nav" href="/contact">
                  Contact Us
                </Nav.Link>

              <NavItem className="nav"><LoginButton /></NavItem>
              <NavItem className="nav"><LogoutButton /></NavItem>
                
        
                
                
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}
export default withAuth0(Header);
