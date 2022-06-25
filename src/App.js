import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import FAQ from "./component/faq/faq";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import Admin from "./admin/Admin";
import PageNotFound from "./component/pagenotfound/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='*' element={<PageNotFound />} />
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          {/* <Route path="*" exact={true} component={<PageNotFound/>}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
