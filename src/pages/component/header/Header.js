import {
  Accordion,
  Box,
  Drawer,
} from "@mui/material";
import React, { useState,useEffect,useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  let anchor = "left";
  const [width] = useWindowSize();
  useEffect(() => {
    if(width > 991){
      console.log(width)
      setState({ left: false });
    }
  }, [width])
  
  return (
    <React.Fragment key={anchor}>
      <header className="main-header">
        <div className="wrapper">
          <div className="row">
            <nav className="navbar">
              <div className="main-logo">
                <div
                  className="menu-toggle"
                  id="mobile-menu"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                <img
                  src="https://img-nm.mnimgs.com/img/site_content/meritnation-unit-of-aakash_color.svg"
                  className="logo-img"
                  alt=""
                />
              </div>

              <div className="btns-mobile">
                <a
                  href="{'https://upanishadh.com/'}"
                  className="btn btn-primary signup login-btn mnLoginPopup"
                >
                  Sign Up
                </a>
              </div>
              <div className="overlay" id="myNav">
                <ul className="nav overlay-content">
                  <li className="nav-item has-sub hidden">
                    <a
                      href="/"
                      onClick={(event) => event.preventDefault()}
                      className="explore"
                    >
                      Courses
                    </a>
                    <ul className="sub-menu">
                      <li className="has-sub">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          className="dropBtn2"
                          href="https://byjus_faculty_recruitment.viewpage.co/Aakash-BYJUS-Hiring?utm_campaign=meritnation"
                        >
                          Aakash BYJU'S Digital
                        </a>
                      </li>
                      <li className="has-sub">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          className="dropBtn2"
                          href="https://byjus.com/btc-apply/?utm_campaign=meritnation/"
                        >
                          BYJU'S Tuition Centre
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item hidden">
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li className="nav-item hidden">
                    <Link to="/about">About us</Link>
                  </li>
                  <li className="nav-item hidden">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item hidden">
                    <a
                      href="https://upanishadh.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="login-btn mnLoginPopup"
                    >
                      login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <br />
          <div className="mobile-menu">
            <div className="item-menu">
              <Accordion className="accordion">
                <AccordionSummary
                  className="header"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="header-text">Courses</Typography>
                </AccordionSummary>
                <AccordionDetails className="sub-menu-div">
                  <div className="sub-menu">
                    <Link to="/">12th class</Link>
                  </div>
                  <div className="sub-menu">
                    <Link to="/">10th class</Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="item-menu">
              <Link to="faq">FAQ</Link>
            </div>
            <div className="item-menu">
              <Link to="faq">About Us</Link>
            </div>
            <div className="item-menu">
              <Link to="faq">Contact</Link>
            </div>{" "}
            <div className="item-menu">
              <a
                href="https://upanishadh.com/"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </div>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
export default Header;
