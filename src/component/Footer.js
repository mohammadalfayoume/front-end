import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import logo from "../assets/logo3.png";
import { SocialIcon } from "react-social-icons";
import "../style/footer.css";
import { withAuth0 } from "@auth0/auth0-react";

class Footer extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <MDBFooter bgColor="dark" className="footer--pin">
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="3" xl="4" className="first-nav-link">
                <h6 className="text-uppercase fw-ystem-ui text-white pt-2 footer-heading">
                  Links
                </h6>

                <a href="/" className="first-nav-link">
                  Home
                </a>

                <a href="/about" className="first-nav-link">
                  About Us
                </a>

                {isAuthenticated && (
                  <a href="/profile" className="first-nav-link">
                    Profile
                  </a>
                )}
                {isAuthenticated && (
                  <a href="/community" className="first-nav-link">
                    Community
                  </a>
                )}

                <a href="/contact" className="first-nav-link">
                  Contact Us
                </a>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="4 " className="first-nav-link">
                <div className="d-flex align-items-center gap-3">
                  <img src={logo} alt="Logo" className="footer-logo" />
                  <h6 className="text-uppercase fw-ystem-ui text-white pt-2 footer-heading">
                    NEWS LIVE
                  </h6>
                </div>
                <p className="text-white  fw-ystem-ui mt-4 footer-text">
                  Here we will tell you what is happening in the world around
                  you. any new or noteworthy information received Most
                  importantly, you will find information about current events
                  here.
                </p>
              </MDBCol>

              <MDBCol md="3" lg="3" xl="4" className="first-nav-link">
                <h6 className="text-uppercase fw-ystem-ui text-white pt-2 footer-heading">
                  Contact
                </h6>

                <p className="text-white">
                  <MDBIcon
                    icon="home"
                    className="text-white fw-ystem-ui  text-decoration-none"
                  />
                  Jordan , Amman
                </p>

                <p className="text-white">
                  <MDBIcon
                    icon="envelope"
                    className="text-white fw-ystem-ui text-decoration-none"
                  />
                  NEWS.LIVE@gmail.com
                </p>
                <p className="text-white">
                  <MDBIcon
                    icon="phone"
                    className="text-white text-decoration-none"
                  />
                  +962 79 000 0000
                </p>

                <div className="d-flex gap-4">
                  <SocialIcon
                    style={{ margin: " 10px 0 10px 10px " }}
                    url="https://www.instagram.com"
                    network="instagram"
                    bgColor="#FFFFFF"
                  />
                  <SocialIcon
                    style={{ margin: " 10px 0 10px 10px " }}
                    url="https://web.facebook.com"
                    network="facebook"
                    bgColor="#FFFFFF"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center  fw-ystem-ui pt-3 pb-1 text-white">
          <p>
            &copy;{new Date().getFullYear()} NEWS LIVE website - All Right
            Reserved
          </p>
        </div>
      </MDBFooter>
    );
  }
}

export default withAuth0(Footer);
