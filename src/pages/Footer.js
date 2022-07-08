import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faYoutube, faInstagram,faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="row part-2">
            <div className="features-footer">
              <div className="features-hdr">Features</div>
              <div className="feature-block">
                <ul>
                  <h4>Study</h4>
                  <li>
                    <a href="study-material.html">Study Material</a>
                  </li>
                  <li>
                    <a href="textbook-solutions.html">Textbook Solutions</a>
                  </li>
                </ul>
                <ul>
                  <h4>Test</h4>
                  <li>
                    <a href="formative-assessment.html">Formative Assessment</a>
                    <a href="cbse-sample-papers.html">Sample Papers</a>
                    <a href="chapter-tests.html">Chapter Test</a>
                  </li>
                </ul>
                <ul>
                  <h4>Revise</h4>
                  <li>
                    <a href="revision-notes.html">Revision Notes</a>
                  </li>
                </ul>
              </div>

              <div className="feature-block">
                <ul>
                  <h4>Discover Yourself</h4>
                  <li>
                    <a href="personality-zone/personality-test.html">
                      Personality Test
                    </a>
                    <a href="personality-zone/aptitude-test.html">
                      Aptitude Test
                    </a>
                    <a href="personality-zone/interest-test.html">
                      Interest Test
                    </a>
                  </li>
                </ul>
                <ul>
                  <h4>Fun</h4>
                  <li>
                    <a href="mywall/index.html">Friends Zone</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row part-3">
            <p>
              <span>Upanishadh.com</span> is an online education portal that
              provides interactive study material for students of classes 1st to
              12th for CBSE, ICSE, Maharashtra (MSBSHSE), Karnataka (KSEEB)
              Kerala (SCERT) and Tamil Nadu boards. Complete with elaborate live
              classes, multimedia tutorials, interactive exercises, practice
              tests and expert help, we endeavour to make school easy for
              students and help them score more. We also provide free NCERT
              solutions, subject-wise synopses and chapter-wise revision notes
              for classes 1st to 12th for a thorough understanding of concepts
              right from a basic to an advanced level of difficulty. Our
              products are carefully designed to ensure maximum learning through
              proven techniques such as conceptual videos, adaptive learning and
              collaborative learning methods.
            </p>
            <p>
              In addition to curriculum aligned study material, Upanishadh.com
              has an extensive personality development section that helps
              students identify and enhance their soft skills for a holistic
              development. We also offer online courses to help students prepare
              for important competitive exams such as JEE Mains and JEE
              Advanced, PMT/AIPMT/State PMTs, CPT, BBA, NDA and Hotel
              Management.
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="wrapper">
          <div className="row">
            <div className="top">
              <div className="quick-links">
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li className="social-media">
                  <span>Follow Us On: </span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/Upanishadh"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/707873"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/Upanishadh"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/Upanishadh/?hl=en"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <div className="company-logo">
                <div className="copyright-txt">
                  <span>&copy; Upanishadh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
