import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import CommunitySideBar from "./component/CommunitySideBar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component{
  render(){

    const { isAuthenticated } = this.props.auth0;
      return(
          <>
          <Router>
          <Header />
          <Routes>
            
         
            
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              {isAuthenticated  &&  (<Route exact path="/profile" element={<Profile />}></Route> )}
              {isAuthenticated  &&  (<Route exact path="/community" element={<CommunitySideBar />}></Route> )}
            
    

           
          </Routes>
          
        </Router>
          
          <Footer/>
          
          </>
      )
  }
}

export default withAuth0(App)