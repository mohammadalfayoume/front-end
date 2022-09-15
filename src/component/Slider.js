import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../style/slider.css'

class Slider extends React.Component {
  render() {
    return (
      <Carousel fade className="slider">
        {this.props.newsArray.slice(0,10).map((item) => {
          return (
      <Carousel.Item>
        <div className="image">
        <img
          className="d-block w-100"
          src={item.image}
          // src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
          alt="First slide"
          
        />
        </div>
        <Carousel.Caption className="slideContent">
          <div className="dateAndSource">
          <span>Date: <b>{item.date}</b></span>
          <span>Source: <b>{item.source}</b></span>
          </div>
          <h3>{item.headline}</h3>
          <p>{item.description}</p>
          {/* <p>{item.content}</p> */}
          <h5><a href={item.url} target='_blank' rel="noopener noreferrer">See more...</a></h5>

        </Carousel.Caption>
      </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;
