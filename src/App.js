import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class App extends React.Component{
  render(){
      return(
          <>
          <Header/>
          <Main/>
          
          <Footer/>
          
          </>
      )
  }
}

export default App