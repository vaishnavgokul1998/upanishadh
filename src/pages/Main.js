import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const Main = () => {
  const style = {
    outline: "none",
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <section className="top-banner" style={{ margin: "0" }}>
        <div className="btn-modal" onClick={handleOpen}>
          <div className="call-me">
            call me {open}
            <br />
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>
      <Outlet />
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
    </>
  );
};

export default Main;
