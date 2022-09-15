import React, { Component } from "react";
import data from "../assets/AboutUs.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Aboutus.css";
import { Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";

class About extends Component {
  render() {
    return (
      <>
        {
          <Accordion defaultActiveKey="1" className="acoord">
            <Accordion.Item eventKey="1">
              <Accordion.Header> NEWS-LIVE</Accordion.Header>
              <Accordion.Body>
                <h1 style={{ fontSize: "30px", margin: "0 5px 0" }}>
                  Our News site with the idea of using multiple sources for the
                  news, that way our news wont be controlled by us and will
                  share the facts regardless of the outcome. You will also be
                  able to upload posts with their own local news as well as edit
                  and delete them.
                </h1>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>NEWS-LIVE-TEAM</Accordion.Header>

              <Accordion.Body>
                <Row xs={1} md={2} className="g-4">
                  {data.map((item) => {
                    return (
                      <div>
                        <Col>
                          <div id="container">
                            <div class="product-details">
                              <h1>{item.title}</h1>
                              <span class="hint-star star">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </span>

                              <p class="information"> {item.description}</p>
                            </div>

                            <div class="product-image">
                              <img src={item.image_url} alt="" />

                              <div class="info">
                                <h2> Description</h2>
                                <ul>
                                  <li>
                                    <strong>Age: {item.age}</strong>
                                  </li>
                                  <li>
                                    <strong>Email: {item.email}</strong>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </div>
                    );
                  })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      </>
    );
  }
}

export default About;
