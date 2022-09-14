import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withAuth0 } from '@auth0/auth0-react';

class UpdatedPost extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <Modal show={this.props.showUpdate} onHide={this.props.closeUpdatePost}>
          <Modal.Header closeButton>
            <Modal.Title>Add Post for <b>{user.name}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updatedPost}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title..."
                  name="title"
                  defaultValue={this.props.currentPost.title}
                />
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
    );
  }
}

export default withAuth0(UpdatedPost);
