import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withAuth0 } from '@auth0/auth0-react';


class SideBarCommunityModal extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Post for <b>{user.name}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addPost}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." name="title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description..."
                  name="description"
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name..."
                  name="name"
                />
              </Form.Group> */}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(SideBarCommunityModal);
