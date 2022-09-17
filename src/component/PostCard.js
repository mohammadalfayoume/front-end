import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/Community.css";


import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

class PostCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterLike: 0,
      counterDislike: 0,
    };
  }

  likeHandler = () => {
    this.setState({
      counterLike: this.state.counterLike + 1,
    });
  };

  disLikeHandler = () => {
    this.setState({
      counterDislike: this.state.counterDislike + 1,
    });
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <div className="card">
          <MDBCardImage position="top" src={this.props.data.image} alt="..." className="image" />
          <MDBCardBody>
            <div className="title">
              <MDBCardTitle>
                <h2 className="text">{this.props.data.title}</h2>
              </MDBCardTitle>
              <p className="text">
                Published by <b>{this.props.data.name}</b>
              </p>
            </div>
            <MDBCardText>
              <p className="text">{this.props.data.description}</p>
              <div className="container"
              >
                
                <div>
                  <button onClick={this.likeHandler} className="like">
                    👍
                  </button>
                  <span
                    style={{
                      color: "green",
                      marginRight: "10px",
                      border: "1px solid black",
                      padding: "2px 5px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    {this.state.counterLike}
                  </span>
                  <button onClick={this.disLikeHandler} className="like">
                    👎
                  </button>
                  <span
                    style={{
                      color: "red",
                      border: "1px solid black",
                      padding: "2px 5px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    {this.state.counterDislike}
                  </span>
                </div>
                <div className="btn5">
                  {user.email === this.props.data.email && (
                    <>
                      <Button
                        className="delete"
                        variant="secondary"
                        onClick={() =>
                          this.props.handleDelete(this.props.data._id)
                        }
                      >
                        Delete
                      </Button>
                      <Button
                        className="update"
                        variant="secondary"
                        onClick={() =>
                          this.props.openUpdatePost(this.props.data)
                        }
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
        </div>
      </div>
    );
  }
}

export default withAuth0(PostCard);
