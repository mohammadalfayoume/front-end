import React, { Component } from 'react'
// import { MDBContainer, MDBNavbar, MDBBtn, MDBCollapse } from "mdb-react-ui-kit";
// import Nav from "react-bootstrap/Nav";
import "../style/secondaryNav.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        {/* <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBCollapse
            navbar
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Nav
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleAllNews('sport')}
                className="secondary-nav-link"
              >
                All
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleSport}
                className="secondary-nav-link"
              >
                Sport
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleTechnology}
                className="secondary-nav-link"
              >
                Technology
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleEntertainment}
                className="secondary-nav-link"
              >
                Entertainment
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleBusiness}
                className="secondary-nav-link"
              >
                Business
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleHealth}
                className="secondary-nav-link"
              >
                Health
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={this.props.handleScience}
                className="secondary-nav-link"
              >
                Science
              </Nav.Link>
            </Nav>

            <form
              className="d-flex input-group w-auto"
              onSubmit={this.props.handleSearch}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
                name="search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> */}
      </div>
    )
  }
}

export default NavBar