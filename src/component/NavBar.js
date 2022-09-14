import React, { Component } from 'react'
import { MDBContainer, MDBNavbar, MDBCollapse } from "mdb-react-ui-kit";
import Nav from "react-bootstrap/Nav";
import "../style/secondaryNav.css";
import Button from 'react-bootstrap/Button';

class NavBar extends Component {
  render() {
    return (
      <div>
        <MDBNavbar expand="lg" light bgColor="light">
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
                onClick={()=> this.props.handleChange('default')}
                className="secondary-nav-link"
              >
                All
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('sport')}
                className="secondary-nav-link"
              >
                Sport
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('technology')}
                className="secondary-nav-link"
              >
                Technology
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('entertainment')}
                className="secondary-nav-link"
              >
                Entertainment
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('business')}
                className="secondary-nav-link"
              >
                Business
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('health')}
                className="secondary-nav-link"
              >
                Health
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                onClick={()=> this.props.handleChange('science')}
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
              <Button variant="primary" type="submit" >Search</Button>
            </form>



            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </div>
    )
  }
}

export default NavBar