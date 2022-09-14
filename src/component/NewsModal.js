import React from "react";
import {Modal,Button} from 'react-bootstrap'; // put two import together instead of two line 

class NewsModal extends React.Component{
  
  render(){
      return(
        <>
        
        <Modal show={this.props.showModal} onHide={this.props.closeModalFunction}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.dataOfNews.headline}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.dataOfNews.image} alt={this.props.dataOfNews.headline} style={{width:'100%'}}/> 

         <p>{this.props.dataOfNews.content}</p>
         <p>{this.props.dataOfNews.date}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModalFunction}>
            Close
          </Button>
          <Button variant="primary" href={this.props.dataOfNews.url} target='_blank'  >
         See more.. 
          </Button>
          
        </Modal.Footer>
        
      </Modal>
      </>
      )
  }
}

export default NewsModal