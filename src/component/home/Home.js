import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Home.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    outline: "none",
    p: 4,
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <section className="top-banner">
        <div className="btn-modal" onClick={handleOpen}>
          <div className="call-me">
            call me
            <br />
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="left-content">
              <div className="heading1">India's most loved</div>
              <h1 className="main-heading">Live Online Tuitions</h1>
              <div className="color-bars"></div>
              <div className="sub-heading">
                Trusted by school students since 2009
              </div>
              <ul className="section-points">
                <li>Interactive classNamees with the best teachers</li>
                <li>
                  Concept videos, Interactive games &amp; downloadable revision
                  notes
                </li>
                <li>
                  Chapter tests, sample papers, board papers and smart reports
                </li>
                <li>24X7 doubt resolution with experts via chat</li>
              </ul>
              <Link
                to="/"
                className="btn btn-primary hidden-xs register-btn mnRegistrationPopup"
              >
                Register for trial className
              </Link>
              <Link
                to="/"
                className="btn btn-primary visible-xs register-btn login-btn mnLoginPopup"
              >
                Register for trial className
              </Link>
              <div className="app-logo">
                <h4>India's best learning app</h4>
                <div className="app-icons">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.meritnation.school"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./google-playstore.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-banner">
              <picture>
                <source
                  media="(min-width: 1920px)"
                  srcSet="./main-banner-1366.png"
                />
                <source
                  media="(min-width: 1600px)"
                  srcSet="./main-banner-1366.png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="./main-banner-1366.png"
                />
                <source
                  media="(min-width: 320px)"
                  srcSet="./main-banner-1366.png"
                />
                <img
                  data-aos="fade-up"
                  className="to_fade_up"
                  alt="…"
                  src="./main-banner-1366.png"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "none" }}
      >
        <Box sx={style}>
          <div className="modalBox-content">
            <div className="modalBox-title">
              <div className="callTitle">Call me</div>
              <span className="close-btn btn-modal-close" onClick={handleClose}>
                &times;
              </span>
            </div>
            <div className="modalBox-body">
              <div className="heading">
                Have a Query? We will call you right away.
              </div>
              <div className="input-group">
                <div className="group-addon">
                  <span>
                    <em className="ind-flag"></em> +91
                  </span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter phone number"
                  id="phone_number"
                />
                <input type="hidden" id="source" name="source" value="1" />
                <button className="group-btn" type="button">
                  Call Now
                </button>
              </div>
              <p className="example">
                <span>E.g: 9876543210, 01112345678</span>
              </p>
              <p className="thanksmsg text-center">
                We will give you a call shortly, Thank You
              </p>
              <p className="timings">
                Office hours: 9:00 am to 9:00 pm IST (7 days a week)
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default Home;
