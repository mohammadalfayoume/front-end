import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class SideBarCommunityModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show: false
    }
  }
  
  handleShow=()=>{
    this.setState({
      show:true
    })
  }

  handleClose=()=>{
    this.setState({
      show:false
    })
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
        Add Post
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={this.props.addPost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title..."  name='title' />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descrinptio</Form.Label>
        <Form.Control type="text" placeholder="Description..." name='descrinptio' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name..." name='name' />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

export default SideBarCommunityModal