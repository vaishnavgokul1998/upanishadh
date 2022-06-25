import { React } from "react";
import { Link } from "react-router-dom";
import "./Header.js"

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const openNav = (event) => {
    document.documentElement.style.setProperty("--open-menu", `100%`);
  };

  const closeNav = () => {
    document.documentElement.style.setProperty("--open-menu", `0`);
  };
  return (
    <header className="main-header">
      <div className="wrapper">
        <div className="row">
          <nav className="navbar">
            <div className="main-logo">
              <div className="menu-toggle" id="mobile-menu" onClick={openNav}>
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
                <div className="closebtn"  onClick={closeNav}>
                  &times;
                </div>
                <li className="nav-item has-sub hidden">
                  <a href="/" onClick={ (event)=> event.preventDefault()} className="explore">
                    CAREERS
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
                  <Link to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item hidden">
                  <Link to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item hidden">
                  <Link to="/contact">
                    Contact
                  </Link>
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
                 <li className="nav-item mobile" >
                  <p>ssdsd</p>
                 </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
