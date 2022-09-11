import React from "react";
import Slider from "./Slider";
import Card from "./Cards";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newsArray:[]
        }
    }
    
  render(){
      return(
          <>
          <Slider/>
          <Card/>

          </>
      )
  }
}

export default Main 