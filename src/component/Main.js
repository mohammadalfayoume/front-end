import React from "react";
import Slider from "./Slider";
import NewsCard from "./Cards";
import axios from "axios";


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newsArray:[]
        }
    }
    componentDidMount=()=>{
        axios
        .get(`http://localhost:3001/news`)
        .then(result=>{
            this.setState({
                newsArray:result.data
            })


        })
        
        .catch(err=>{
            console.log(err);
        })

    }


    
  render(){
      return(
          <>
         {/* { console.log(this.state.newsArray)} */}
          
          <Slider newsArray={this.state.newsArray}/>
          
          <NewsCard  newsArray={this.state.newsArray}/>
          

          </>
      )
  }
}

export default Main 