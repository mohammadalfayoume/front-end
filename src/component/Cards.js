import React from "react";
import Modal from "./Modal";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  showModalFunction = () => {
    this.setState({
      showModal: true
    })
    
  }
  closeModalFunction=()=>{
    this.setState({
      showModal:false
    })
  }
  render() {

    return (
      <>
        <div>
          <Row xs={1} md={5} className="g-4">
            {this.props.newsArray.slice(10, 30).map(item => {
              return (
                <Col><Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={item.image} className="image" />
                  <Card.Body>
                    <Card.Title>{item.headline}</Card.Title>
                    <Card.Text>

                      <br></br>
                      <p> {item.description}</p>
                      <br></br>
                      <p><span>{item.date}</span> <br></br> <span>{item.source}</span> </p>



                    </Card.Text>
                    <Button variant="primary" onClick={this.showModalFunction}> Show </Button>
                  </Card.Body>
                </Card></Col>
              )
            }
            )}

          </Row>
        </div>

        <Modal showModal={this.state.showModal} closeModalFunction={this.closeModalFunction} newsArray={this.props.newsArray} />
      </>
    )
  }
}

export default NewsCard