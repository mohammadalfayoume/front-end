import React, { Component } from "react";
import "../style/Community.css";
import SideBarCommunityModal from "./SideBarCommunityModal";
import Button from "react-bootstrap/Button";
import PostCard from "./PostCard";
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

    return (
      <>
        <Button variant="primary" onClick={this.handleShow} className="add">
          Add Post
        </Button>

        <SideBarCommunityModal
          addPost={this.addPost}
          show={this.state.show}
          handleClose={this.handleClose}
        />

        {this.state.posts.map((item) => {
          return (
            <PostCard
              data={item}
              handleDelete={this.handleDelete}
              openUpdatePost={this.openUpdatePost}
            />
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
