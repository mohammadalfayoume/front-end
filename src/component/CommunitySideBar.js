import React, { Component } from "react";
import "../style/Community.css";
import SideBarCommunityModal from "./SideBarCommunityModal";
import Button from "react-bootstrap/Button";
// import PostCard from "./PostCard";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import UpdatedPost from "./UpdatedPost";

import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";

let URL = process.env.REACT_APP_URL;

class CommunitySideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      show: false,
      showUpdate: false,
      currentPost: {},
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

  componentDidMount = () => {
    axios
      .get(`${URL}getPosts`)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
        console.log(result.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  addPost = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    console.log(user);
    const post = {
      title: e.target.title.value,
      description: e.target.description.value,
      name: user.name,
      email: user.email,
      image: e.target.image.value,
    };
    console.log(post);
    axios
      .post(`${URL}addPost`, post)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  handleDelete = (id) => {
    // const { user } = this.props.auth0;
    axios
      .delete(`${URL}deletePost/${id}`)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update

  openUpdatePost = (item) => {
    this.setState({
      showUpdate: true,
      currentPost: item,
    });
  };

  closeUpdatePost = () => {
    this.setState({
      showUpdate: false,
    });
  };

  updatedPost = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const post = {
      title: e.target.title.value,
      description: e.target.description.value,
      name: user.name,
      email: user.email,
      image: e.target.image.value,
    };
    const id = this.state.currentPost._id;
    axios
      .put(`${URL}updatePost/${id}`, post)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
    this.closeUpdatePost();
  };

  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <Button variant="primary" onClick={this.handleShow} className="btn">
          Add Post
        </Button>

        <SideBarCommunityModal
          addPost={this.addPost}
          show={this.state.show}
          handleClose={this.handleClose}
        />  

        {this.state.posts.map((item) => {
          return (
            <MDBCard className="card">
              <MDBCardImage position="top" src={item.image} alt="..." />
              <MDBCardBody>
                <div className="title">
                  <MDBCardTitle>
                    <h2 className="text">{item.title}</h2>
                  </MDBCardTitle>
                  <p className="text">
                    Published by <b>{item.name}</b>
                  </p>
                </div>
                <MDBCardText>
                  <p className="text">{item.description}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <div>
                      {user.email === item.email && (
                        <>
                          <Button
                            className="btttn"
                            variant="secondary"
                            onClick={() => this.handleDelete(item._id)}
                          >
                            Delete
                          </Button>
                          <Button
                            className="btttn btn"
                            variant="secondary"
                            onClick={() => this.openUpdatePost(item)}
                          >
                            Edit
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </MDBCardText>
                <MDBCardText></MDBCardText>
              </MDBCardBody>
            </MDBCard>
          );
        })}

        <UpdatedPost
          showUpdate={this.state.showUpdate}
          closeUpdatePost={this.closeUpdatePost}
          updatedPost={this.updatedPost}
          currentPost={this.state.currentPost}
        />
      </>
    );
  }
}

export default withAuth0(CommunitySideBar);
