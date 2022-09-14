import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import logo from "../assets/logo3.png";
import React from "react";
import { SocialIcon } from "react-social-icons";
import "../style/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <MDBFooter bgColor="dark" className="footer--pin">
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="3" xl="4" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                  Links
                </h6>

                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
                <p></p>

                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
                <p></p>
                <a href="/profile" className="text-white text-decoration-none">
                  Profile
                </a>
                <p></p>
                <a
                  href="/community"
                  className="text-white text-decoration-none"
                >
                  Community
                </a>
                <p></p>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
                <p></p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="4 " className="mx-auto mb-4">
                <div className="d-flex align-items-center gap-3">
                  <img src={logo} alt="Logo" className="footer-logo" />
                  <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                    NEWS LIVE
                  </h6>
                </div>
                <p className="text-white mt-4 footer-text">
                  Here we will tell you what is happening in the world around
                  you. any new or noteworthy information received Most
                  importantly, you will find information about current events
                  here.
                </p>
              </MDBCol>

              <MDBCol md="3" lg="3" xl="4" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                  Contact
                </h6>

                <p className="text-white">
                  <MDBIcon
                    icon="home"
                    className="text-white text-decoration-none"
                  />
                  Jordan , Amman
                </p>

                <p className="text-white">
                  <MDBIcon
                    icon="envelope"
                    className="text-white text-decoration-none"
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

        <div className="text-center pt-3 pb-1 text-white">
          <p>
            &copy;{new Date().getFullYear()} NEWS LIVE website - All Right
            Reserved
          </p>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
