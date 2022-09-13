import React, { Component } from "react";
import SideBarCommunityModal from "./SideBarCommunityModal";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdatedPost from "./UpdatedPost";

import axios from "axios";


import { withAuth0 } from '@auth0/auth0-react'; 

let URL=process.env.REACT_APP_URL

class CommunitySideBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       show: false,
       showUpdate: false,
       currentPost:{}
    }
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

  componentDidMount=()=>{
    axios
    .get(`${URL}getPosts`)
    .then(result=>{
        this.setState({
            posts:result.data
        })
        console.log(result.data);
    })
    
    .catch(err=>{
        console.log(err);
    })

}

  addPost = (e) => {
    e.preventDefault();
    // const { user } = this.props.auth0;
    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      name: e.target.name.value,
    //   email: user.email
    };
    console.log(obj);
    axios
      .post(`${URL}addPost`, obj)
      .then((result) => {
        this.setState({
            posts: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      this.handleClose()
  };

  handleDelete=(id)=>{
    axios 
    .delete(`${URL}deletePost/${id}`)
    .then(result=>{
      this.setState({
        posts:result.data
      })
      console.log(result.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  // Update 

  openUpdatePost=(item)=>{
    this.setState({
      showUpdate:true,
      currentPost: item
    })
  }

  closeUpdatePost=()=>{
    this.setState({
      showUpdate:false
    })
  }

  updatedPost=(e)=>{
    e.preventDefault()
    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      name: e.target.name.value,
    //   email: user.email
    };
    const id =this.state.currentPost._id
    axios
    .put(`${URL}updatePost/${id}`, obj)
    .then(result=>{
      this.setState({
        posts:result.data
      })
    })
    
    .catch(err=>{
      console.log(err);
    })
    this.closeUpdatePost()
    }
  


  render() {
    return (
      <>
      <Button variant="primary" onClick={this.handleShow}>
          Add Post
      </Button>

      <SideBarCommunityModal addPost={this.addPost} show={this.state.show} handleClose={this.handleClose}/>

      <Row xs={1} md={3} className="g-4">
        {this.state.posts.map((item)=>{
          return(
          <Col>
          <Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <p>{item.description}</p>
                <p>{item.name}</p>
                <Button variant="secondary" onClick={()=> this.handleDelete(item._id)}>
              Delete
            </Button>
                <Button variant="secondary" onClick={()=> this.openUpdatePost(item)}>
              Update
            </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          )
        })}
        
    </Row>
      <UpdatedPost showUpdate={this.state.showUpdate} closeUpdatePost={this.closeUpdatePost} updatedPost ={this.updatedPost} currentPost={this.state.currentPost}/>
      </>
    );
  }
}

export default withAuth0(CommunitySideBar)