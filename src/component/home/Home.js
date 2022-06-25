import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Home.css";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    outline: 'none',
    p: 4,
  };
  return (
    <div>
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
              <a
                href="/"
                className="btn btn-primary hidden-xs register-btn mnRegistrationPopup"
              >
                Register for trial className
              </a>
              <a
                href="/"
                className="btn btn-primary visible-xs register-btn login-btn mnLoginPopup"
              >
                Register for trial className
              </a>
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
        sx={{ border: 'none' }}
      >
        <Box sx={style}>
        <div class="modalBox-content">
          <div class="modalBox-title">
            <div class="callTitle">Call me</div>
            <span
              class="close-btn btn-modal-close"
              onClick={handleClose}
            >&times;</span>
          </div>
          <div class="modalBox-body">
            <div class="heading">
              Have a Query? We will call you right away.
            </div>
            <div class="input-group">
              <div class="group-addon">
                <span>
                  <em class="ind-flag"></em> +91
                </span>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Enter phone number"
                id="phone_number"
              />
              <input type="hidden" id="source" name="source" value="1" />
              <button
                class="group-btn"
                type="button"
                onclick="callMe.click2Call(); trackGaEvent('Homepage_New1','Click-to-call','Call Now');"
              >
                Call Now
              </button>
            </div>
            <p class="example">
              <span>E.g: 9876543210, 01112345678</span>
            </p>
            <p class="thanksmsg text-center">
              We will give you a call shortly, Thank You
            </p>
            <p class="timings">
              Office hours: 9:00 am to 9:00 pm IST (7 days a week)
            </p>
          </div>
        </div>
        </Box>

      </Modal>
    </div>
  );
};

export default Home;
