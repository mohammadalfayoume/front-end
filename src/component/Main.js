import React from "react";
import Slider from "./Slider";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";
import axios from "axios";


let URL=process.env.REACT_APP_URL


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newsArray:[]
        }
    }
    componentDidMount=()=>{
        axios
        .get(`${URL}news`)
        .then(result=>{
            this.setState({
                newsArray:result.data
            })
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
        // console.log(obj)
        axios
          .post(`${URL}posts`, obj)
          .then((result) => {
            this.setState({
                newsArray: result.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

      /*----------Render News for Specific Catagory----------*/
  handleChange = async (query) => {
    const result = await axios.get(`${URL}searchNews?query=${query}`);
    // console.log(result)
    const filteredNews = result.data.filter((item) => {
      return item.image !== undefined;
    });
    // console.log(filteredNews)

    this.setState({
        newsArray: filteredNews,
    });
  };

  /*----------Handle Search----------*/
  handleSearch = async (event) => {
    event.preventDefault();
    const keyword = event.target.search.value;
    console.log(keyword);
    this.handleChange(keyword);

  };

  render(){
      return(
          <>
         {/* { console.log(this.state.newsArray)} */}
         <NavBar 
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          />
          <Slider newsArray={this.state.newsArray}/>
          
          <div className="wrapper">
          <NewsCard  newsArray={this.state.newsArray}/>
          </div>
          </>
      )
  }
}

export default Main 