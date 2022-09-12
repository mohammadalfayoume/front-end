import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Profile from "./component/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class App extends React.Component{
  render(){
      return(
          <>
          <Router>
          <Header />
          <Routes>
            
         
            
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
            
    

           
          </Routes>
          
        </Router>
          
          <Footer/>
          
          </>
      )
  }
}

export default App