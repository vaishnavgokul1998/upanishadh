import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./component/faq/faq";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import Admin from "./admin/Admin";
import PageNotFound from "./component/pagenotfound/PageNotFound";
import AdminLogin from "./admin/pages/Login";
import DashBoard from "./admin/pages/DashBoard";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />}></Route>
          <Route exact path="faq" element={<FAQ />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="admin" element={<Admin />}>
            <Route index element={<AdminLogin />}></Route>
            <Route path="login" element={<AdminLogin />}></Route>
            <Route path="dashboard" element={<DashBoard />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
