import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/slider.css";

class Slider extends React.Component {
  render() {
    return (
      <Carousel fade className="slider">
        {this.props.newsArray.slice(0, 10).map((item) => {
          return (
            <Carousel.Item>
              <div className="image">
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption className="slideContent">
                <div className="dateAndSource">
                  <span>
                    Date: <b>{item.date}</b>
                  </span>
                  <span>
                    Source: <b>{item.source}</b>
                  </span>
                </div>
                <h3 className="data">{item.headline}</h3>
                <p className="data">{item.description}</p>
                {/* <p>{item.content}</p> */}
                <h5>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    See more...
                  </a>
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;
