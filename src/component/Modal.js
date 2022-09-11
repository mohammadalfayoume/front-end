import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";

import "../style/Footer.css"
class CarModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    

    };
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  };


  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render(){
      return(
        <>
        <Button variant="primary" onClick={this.handleShow}>
         Show Model
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal Car </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img
            style={{width:"50%",display: "block", marginRight: "auto", marginLeft: "auto"}}
            src={"https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80"}
            alt="Car"
          />
          
        </Modal.Body>
        <Row xs={1} md={2} className="g-4">
        
          <Modal.Footer  >
          <Col>
          <p>Price:  </p> <p>Color: </p> 
          </Col>
          <Col>
          <p>Engine: </p>  <p>Millige: </p>
          </Col>
          </Modal.Footer>
          
          </Row>
          <Button variant="primary">Add to Favourite</Button>
          <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
        </Modal>
      </>
      )
  }
}

export default CarModal