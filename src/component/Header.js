import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import "../style/Header.css";
import logo from "../assets/logo3.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="headerContainer">
        <div className="logoContainer">
          <img className="logo-img" src={logo} alt="logo" />
          <h2 style={{ margin: "0", color: "white" }}>NEWS LIVE</h2>
        </div>

        <div className="navBar">
          <div className="routs">
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
          </div>
          <div>
            <NavItem>
              <LoginButton />
            </NavItem>
            <NavItem>
              <LogoutButton />
            </NavItem>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth0(Header);
