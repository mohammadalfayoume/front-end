  import {
    MDBCol,
    MDBContainer,
    MDBFooter,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";
  import logo from '../assets/logo3.png';
  import React from "react";
  import { SocialIcon } from "react-social-icons";
  import  "../style/footer.css";

  class Footer extends React.Component {
    render() {
      return (
        <MDBFooter
          bgColor="dark"
          className="text-center text-lg-start text-muted pt-2"
         >
          <section className="">
            <MDBContainer  className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
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
                    <iframe className="text-white text-decoration-none" style={{margin:" 10px 0 0 0 "}}width="250" height="150" id="gmap_canvas" src='https://maps.google.com/maps?q=LTUC&t=&z=9&ie=UTF8&iwloc=&output=embed' title='LUTC' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
                  </p>
                </MDBCol>
                <MDBCol  md="3" lg="3" xl="4 " className="mx-auto mb-4">
                  <div className="d-flex align-items-center gap-3">
                  <img src={logo} alt="Logo" className="footer-logo" />
                    <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                    NEWS LIVE
                    </h6>
                  </div>
                  <p className="text-white mt-4 footer-text">
                  Here we will tell you what is happening in the world
                  around you. any new or noteworthy information received
                  Most importantly, you will find information about current events here.
                  </p>
                  
                </MDBCol>

                <MDBCol  md="3" lg="3" xl="2" className="mx-auto mb-4" >
                  
                <h6 className="text-uppercase fw-bold text-white pt-2 footer-heading">
                    Contact
                  </h6>

                  <p className="text-white">
                    <MDBIcon icon="home"  className="text-white text-decoration-none" />
                    Jordan , Amman
                  </p>

                  <p className="text-white">
                    <MDBIcon icon="envelope" className="text-white text-decoration-none" />
                    NEWS.LIVE@gmail.com
                  </p>
                  <p className="text-white">
                    <MDBIcon icon="phone" className="text-white text-decoration-none" />+ 962 79 000 0000
                  </p>

                  <div className="d-flex gap-4">
                    <SocialIcon style={{margin:" 10px 0 10px 10px "}}
                      url="https://www.instagram.com"
                      network="instagram"
                      // style={{ height: 30, width: 70 }}
                      bgColor="#FFFFFF"
                    />
                    <SocialIcon style={{margin:" 10px 0 10px 10px "}} 
                      url="https://web.facebook.com"
                      network="facebook"
                      // style={{ height: 30, width: 70 }}
                      bgColor="#FFFFFF"
                    />
                  
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className="text-center pt-3 pb-1 text-white">
            <p>
              &copy;{new Date().getFullYear()}  NEWS LIVE  website - All Right
              Reserved
            </p>
          </div>
        </MDBFooter>
      );
    }
  }

  export default Footer;