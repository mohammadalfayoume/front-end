import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { SocialIcon } from "react-social-icons";
// import "./StylingF.css";
 class Footer extends React.Component {
  render() {
    return (
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted pt-2"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white pt-3 footer-heading">
                  Links
                </h6>
                <p>
                  <a href="MOHANNAD" className="text-white text-decoration-none">
                    Home
                  </a>
                </p>

                <p>
                  <a href="MOHANNAD" className="text-white text-decoration-none">
                    About Us
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                    LIFE NEWS 
                  </h4>
                </div>
                <p className="text-white mt-4 footer-text">
                 Here we will tell you what is happening in the world
                 around you. any new or noteworthy information received
                 Most importantly, you will find information about current events here.
                </p>
                
              </MDBCol>

              <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4" >
                <h6 className="text-uppercase fw-bold mb-4 text-white pt-3 footer-heading">
                  Contact
                </h6>

                <p className="text-white">
                  <MDBIcon icon="home" className="me-3"  />
                  Jordan , Amman
                </p>

                <p className="text-white">
                  <MDBIcon icon="envelope" className="me-3" />
                  LIFE.NEWS@gmail.com
                </p>
                <p className="text-white">
                  <MDBIcon icon="phone" className="me-3" />+ 962 79 000 0000
                </p>

                <div className="d-flex gap-4">
                  <SocialIcon
                    url="https://www.instagram.com/?hl=en"
                    network="instagram"
                    style={{ height: 30, width: 70 }}
                    bgColor="#FFFFFF"
                  />
                  <SocialIcon
                    url="https://web.facebook.com/?_rdc=1&_rdr"
                    network="facebook"
                    style={{ height: 30, width: 70 }}
                    bgColor="#FFFFFF"
                  />
                 
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center pt-3 pb-1 text-white">
          <p>
            &copy;{new Date().getFullYear()} LIFE NEWS  website - All Right
            Reserved
          </p>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer();