import React from "react";
import NewsModal from "./NewsModal";
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
        <div style={{width:'80%',margin:'auto'}}>
          <Row xs={1} md={3} className="g-4">
            {this.props.newsArray.slice(10, 30).map(item => {
              return (
                <Col><Card style={{ width: '18rem',height:'540px' }}>
                  <Card.Img variant="top" src={item.image} className="image" style={{height:'200px'}}/>
                  <Card.Body style={{display:'flex',justifyContent:'space-between',gap:'5px',flexDirection:'column'}}>
                    <Card.Title>{item.headline}</Card.Title>
                    <Card.Text>

                      <br></br>
                      {/* <p> {item.description}</p> */}
                      <br></br>
                      <p><span>Date: {item.date}</span> <br></br> <span>Source: {item.source}</span> </p>



                    </Card.Text>
                    <Button variant="primary" onClick={this.showModalFunction}> Show </Button>
                  </Card.Body>
                </Card></Col>
              )
            }
            )}

          </Row>
        </div>

        <NewsModal showModal={this.state.showModal} closeModalFunction={this.closeModalFunction} newsArray={this.props.newsArray} />
      </>
    )
  }
}

export default NewsCard