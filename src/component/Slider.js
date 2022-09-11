import React from "react";
import Carousel from "react-bootstrap/Carousel";

class Slider extends React.Component {
  render() {
    // let newArr = [];
    // for (let i = 0; i < 10; i++) {
    //   newArr.push(this.props.newsArray[i]);
    // }
    // console.log(newArr);
    return (
      <Carousel fade>
        {this.props.newsArray.slice(0,11).map((item) => {
          return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{item.headline}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
            // <Carousel.Item>
            //   <img
            //     className="d-block w-100"
            //     src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
            //     alt="First slide"
            //   />
            //   <Carousel.Caption>
            //     <p>{item.content}</p>
            //   </Carousel.Caption>
            // </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;
