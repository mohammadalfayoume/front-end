import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


class UpdatedPost extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showUpdate} onHide={this.props.closeUpdatePost}>
          <Modal.Header closeButton>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updatedPost} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." name="title" defaultValue={this.props.currentPost.title}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description..."
                  name="description"
                  defaultValue={this.props.currentPost.description}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name..."
                  name="name"
                  defaultValue={this.props.currentPost.name}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeUpdatePost}>
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

export default UpdatedPost