import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component{
  render(){
      return(
          <>
          <Router>
          <Header />
          <Routes>
            
         
            
              <Route exact path="/" element={<Main />}></Route>
              {/* <Route exact path="/profile" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            
     */}

           
          </Routes>
          
        </Router>
          <Main/>
          <Footer/>
          </>
      )
  }
}

export default App