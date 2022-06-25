import Header from "../header/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FAQ } from "../faq/faq";
import { About } from "../about/About";
import { Home } from "../home/Home";
import { Contact } from "../contact/Contact";
const Main = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="/faq" element={<FAQ />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
