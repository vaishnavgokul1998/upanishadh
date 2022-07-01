import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./pages/faq";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Admin from "./admin/Admin";
import PageNotFound from "./pages/PageNotFound";
import AdminLogin from "./admin/component/Login";
import DashBoard from "./admin/component/DashBoard";
import Main from "./pages/Main";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<Main />}>
          <Route index element={<Home />}></Route>
          <Route exact path="faq" element={<FAQ />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
          <Route exact path="about" element={<About />}></Route>
        </Route>
        <Route exact path="admin" element={<Admin />}>
          <Route index element={<AdminLogin />}></Route>
          <Route path="login" element={<AdminLogin />}></Route>
          <Route path="dashboard" element={<DashBoard />}></Route>
        </Route>
      </Routes>      
    </Router>
  );
}

export default App;
