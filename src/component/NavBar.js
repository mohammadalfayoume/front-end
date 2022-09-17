import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "../style/secondaryNav.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <Nav className="category">
          <Nav.Link
            onClick={() => this.props.handleChange("default")}
            className="secondary-nav-link"
          >
            All
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("sport")}
            className="secondary-nav-link"
          >
            Sport
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("technology")}
            className="secondary-nav-link"
          >
            Technology
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("entertainment")}
            className="secondary-nav-link"
          >
            Entertainment
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("business")}
            className="secondary-nav-link"
          >
            Business
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("health")}
            className="secondary-nav-link"
          >
            Health
          </Nav.Link>
          <Nav.Link
            onClick={() => this.props.handleChange("science")}
            className="secondary-nav-link"
          >
            Science
          </Nav.Link>
        </Nav>

        <div>
        <form
        className="search"
          // className="d-flex input-group w-auto"
          onSubmit={this.props.handleSearch}
        >
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            name="search"
          />
          <button
            style={{
              backgroundColor: "#0d6efd",
              padding: "3px 7px",
              color: "white"
            }}
            type="submit"
          >
            Search
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default NavBar;
