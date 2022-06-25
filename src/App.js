import "./App.css";
import React from "react";
import Header from "./component/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./component/faq/faq";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path="/faq" element={<FAQ/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/home" element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
