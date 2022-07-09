import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCountUp } from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  DEFAULT_STUDENT_LIST,
  DEFAULT_TESTINOMAL_LIST,
} from "./constants/Constants";
const Home = () => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  useCountUp({
    ref: "counter-question",
    end: 1234567,
  });
  useCountUp({
    ref: "counter-test",
    start: 0,
    end: 2742385,
  });
  useCountUp({
    ref: "counter-doubts",
    start: 0,
    end: 4732381,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const studentsList = DEFAULT_STUDENT_LIST;
  const testinomailList = DEFAULT_TESTINOMAL_LIST;
  return (
    <React.Fragment>
      <section className="top-banner">
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
                  srcSet="./main-banner-360.png"
                />
                <img
                  data-aos="fade-up"
                  className="to_fade_up"
                  alt="…"
                  src="./main-banner-360.png"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      {/* online tutions  */}
      <section className="online-tutions">
        <div className="wrapper">
          <div className="row">
            <div className="section-title to_fade_up">
              <div className="heading">Powerful Online Tuitions</div>
              <div className="sub-heading">Designed for excellence</div>
            </div>
            <div className="three-block">
              <div className="block-item to_fade_up" data-aos="fade-up">
                <img src="./tution1.png" alt="" />
                <div className="content">
                  Build a strong Conceptual Foundation
                </div>
              </div>

              <div className="block-item to_fade_up" data-aos="fade-up">
                <img src="./tution2.png" alt="" />
                <div className="content">
                  Ace every exam <br /> in your school
                </div>
              </div>

              <div className="block-item to_fade_up" data-aos="fade-up">
                <img src="./tution3.png" alt="" />
                <div className="content">
                  Get help <br /> in homework
                </div>
              </div>
            </div>
            <div className="bottom-txt to_fade_up">
              Upanishadh's unique blend of features developed after years of
              research, to help you excel
            </div>
          </div>
        </div>
      </section>
      {/* live online classes */}
      <section className="live-online-classes">
        <div className="wrapper">
          <div className="row">
            <div className="section-title">
              <div className="heading ">Live Online Classes</div>
              <div className="sub-heading">With the best teachers</div>
            </div>
            <div className="left-right-block">
              <div className="left-block">
                <div className="desc-txt">
                  Curriculum aligned, structured Live Class session to give you
                  a complete learning experience. You have the option to choose
                  a schedule that suits you the most
                </div>
                <img className="image" src="./live-class-img.png" alt="" />
              </div>
              <div className="right-block">
                <div className="live-class-lists">
                  <div className="class-list to_fade_up" data-aos="fade-up">
                    <span className="item-arrow green-bg">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    <h2>Pre Live Class</h2>
                    <p>
                      You will be prompted to go through the videos and notes
                      before the class to grasp the concepts better during live
                      class
                    </p>
                  </div>
                  <div className="class-list to_fade_up" data-aos="fade-up">
                    <span className="item-arrow blue-bg">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    <h2>In Live Class</h2>
                    <p>
                      Concepts are taught in the live class by Expert Teacher
                      using rich multimedia content such as 3D Models, Videos &
                      Gifs to ensure complete mastery.
                    </p>
                    <p>
                      Live chat option with teachers to ensure 2-way
                      communication
                    </p>
                    <p>
                      Live quizzes & analytics to further sharpen your learning
                    </p>
                  </div>
                  <div className="class-list to_fade_up" data-aos="fade-up">
                    <span className="item-arrow yellow-bg">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    <h2>Post Live Class</h2>
                    <p>
                      A class test after every live class to help you fortify
                      your learning.
                    </p>
                    <p>
                      In case you miss a live class or would like to revise, you
                      can watch the recording
                    </p>
                  </div>
                </div>
                <div className="reg-knowmore-btn">
                  <div className="btn btn-primary hidden-xs register-btn mnRegistrationPopup">
                    Register for trial class
                  </div>
                  <div className="btn btn-primary visible-xs register-btn login-btn mnLoginPopup">
                    Register for trial class
                  </div>
                  <div className="know-more">know more</div>
                </div>
                <div
                  className="teacher-connect-app to_fade_up"
                  data-aos="fade-up"
                >
                  <h4>Teacher Connect App</h4>
                  <p>
                    A dedicated messaging app to help you stay connect with your
                    live class teachers, even beyond the 'Class'
                  </p>
                  <img src="./live-class-img2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="better-than-tutions">
        <div className="wrapper">
          <div className="row">
            <div className="section-title">
              <div className="sub-heading">Why live classes are</div>
              <div className="heading">Better Than Tuitions</div>
            </div>
            <div className="tutions-five-block">
              <div className="card-box to_fade_up" data-aos="fade-up">
                <div className="inner">
                  <img src="./block-2.png" alt="" />
                  <p>Get access to the Best Teachers</p>
                </div>
              </div>
              <div className="card-box to_fade_up" data-aos="fade-up">
                <div className="inner">
                  <img src="./block-1.png" alt="" />
                  <p>Attend classes from the comfort of your home</p>
                </div>
              </div>
              <div className="card-box to_fade_up" data-aos="fade-up">
                <div className="inner">
                  <img src="./block-3.png" alt="" />
                  <p>Watch class recording any number of times</p>
                </div>
              </div>
              <div className="card-box to_fade_up" data-aos="fade-up">
                <div className="inner">
                  <img src="./block-4.png" alt="" />
                  <p>
                    Stay connected with your teachers even after class hours
                  </p>
                </div>
              </div>
              <div className="card-box to_fade_up" data-aos="fade-up">
                <div className="inner">
                  <img src="./block-5.png" alt="" />
                  <p>Utilize the saved travel time for pursuing your hobbies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="study-resources">
        <div className="wrapper">
          <div className="row">
            <div className="section-title">
              <div className="heading">Study Resources</div>
              <div className="sub-heading">
                To help you learn at your own pace
              </div>
              <p>
                Be an independent self motivated learner. Our scientifically
                designed learning resources are geared to help you pack more
                punch into your study time
              </p>
            </div>
            <div className="content-img-blocks">
              <div className="block-item to_fade_up" data-aos="fade-up">
                <img src="./study-resource-1.png" alt="" />
                <div className="points-area">
                  <div className="block-heading">Concept Videos & Notes</div>
                  <ul>
                    <li>Short & Crisp videos for better concept clarity</li>
                    <li>
                      Chapter-wise downloadable Revision Notes for last minute
                      preparation
                    </li>
                    <li>
                      NCERT & Other reference books solutions for quick homework
                      completion
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block-item to_fade_up" data-aos="fade-up">
                <div className="points-area">
                  <div className="block-heading">Tests & Smart Reports</div>
                  <ul>
                    <li>Chapter-wise tests for strengthening concepts</li>
                    <li>
                      Live Test Series to benchmark your performance against
                      your peers
                    </li>
                    <li>Smart reports to identify your weak areas</li>
                  </ul>
                </div>
                <img src="./study-resource-2.png" alt="" />
              </div>
              <div className="block-item to_fade_up" data-aos="fade-up">
                <img src="./doubt-resolutions.png" alt="" />
                <div className="points-area">
                  <div className="block-heading">
                    Doubts Resolutions Via Chat
                  </div>
                  <ul>
                    <li>Clear your doubts via chat and stay doubtfree</li>
                    <li>Ask your question anytime - 24x7 availability</li>
                    <li>Connect with our experts within 10 seconds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="counter-register-more">
              <div className="counter-blocks">
                <div className="block-item green-bg">
                  <img src="./quest-icon.png" alt="" />
                  <h2 id="counter-question">0</h2>
                  <p>Questions attempted </p>
                </div>
                <div className="block-item blue-bg">
                  <img src="./test-icon.png" alt="" />
                  <h2 id="counter-test">0</h2>
                  <p>Tests Taken</p>
                </div>
                <div className="block-item yellow-bg">
                  <img src="./doubt-icon.png" alt="" />
                  <h2 id="counter-doubts">0</h2>
                  <p>Doubts Resolved</p>
                </div>
              </div>
              <button className="btn btn-primary hidden-xs register-btn mnRegistrationPopup">
                Register for trial class
              </button>
              <button className="btn btn-primary visible-xs register-btn login-btn mnLoginPopup">
                Register for trial class
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="our-results">
        <div className="wrapper">
          <div className="row">
            <div className="result-blocks">
              <div className="left-block">
                <div className="section-title">
                  <div className="heading">Our Results</div>
                  <p>
                    Our results are a testament of years old expertise in
                    pedagogy and smart technology
                  </p>
                </div>

                <div className="big-rc to_fade_up" data-aos="fade-up">
                  <div className="image">
                    <img src="./Rohit-Class12.jpg" alt="" />
                  </div>
                  <div className="percentage">99.75%</div>
                  <div className="name">Rohit</div>
                  <div className="class">Class 12</div>
                </div>
              </div>
              <div className="right-block">
                <div className="right-all-cards-section">
                  <div className="vertical-cards">
                    <div className="small-rc mobile-big-card">
                      <div className="image">
                        <img src={studentsList[0].profile} alt="" />
                      </div>
                      <div className="percentage">
                        {studentsList[0].percentage}
                      </div>
                      <div className="name">{studentsList[0].name}</div>
                      <div className="class">Class {studentsList[0].class}</div>
                    </div>

                    {studentsList.slice(1).map((obj, index) => {
                      return (
                        <div
                          className="small-rc to_fade_up"
                          key={index}
                          data-aos="fade-up"
                        >
                          <div className="image">
                            <img src={obj.profile} alt="" />
                          </div>
                          <div className="percentage">{obj.percentage}</div>
                          <div className="name">{obj.name}</div>
                          <div className="class">Class {obj.class}</div>
                        </div>
                      );
                    })}

                    <button className="btn btn-primary">
                      View all results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="students-love-section">
        <div className="wrapper">
          <div className="row">
            <div>
              <div className="section-title">
                <div className="heading">Our Students Love Us</div>
              </div>
              <div className="slider students-love-slider">
                <Slider {...settings}>
                  {testinomailList.map((obj, ind) => {
                    return (
                      <div className="testimonial-content">
                        <div className="feedback-txt">" {obj.feedback} "</div>
                        <div className="testi-img-name">
                          <div className="image">
                            <div className="pro-pic">
                              <img src={obj.profileImg} alt="" />
                            </div>
                          </div>
                          <div className="name-content">
                            <span>{obj.name}</span>
                            <span>{obj.class}</span>
                            <span>{obj.school}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="testimonial-big-img">
              <a
                className="play-btn play-btn-gray video-btn"
                href="/"
                data-target="testimonial"
              >
                <iframe
                  width="100%"
                  height="100%"
                  title="demo video"
                  src="https://www.youtube.com/embed/iGREbst5rVM?autoplay=1&rel=0"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="download-app-section">
        <div className="wrapper">
          <div className="row">
            <div className="dwnl-app-img">
              <img src="./app-img.png" alt="" />
            </div>
            <div className="dwnl-app-content">
              <h2>To Get Notified Every Time There is a Class</h2>
              <p className="install-txt">
                Install the Upanishadh App <br /> Get a link to download the app
                on your phone
              </p>
              <form
                action="#"
                id="applinkbox"
                method="get"
                acceptCharset="utf-8"
                className="pt10 pb10 hidden-xs applinkbox"
              >
                <div className="phone-input-group">
                  <div className="custom-dropdown">
                    <img src="./india.svg" width="15" alt="" /> +91
                  </div>
                  <input
                    type="text"
                    id="UserDetailMobile"
                    name="data[UserDetail][mobile]"
                    maxLength="10"
                    placeholder="Enter phone number"
                  />
                  <button type="button" id="sendLink">
                    Text App link
                  </button>
                </div>
                <p className="msg">
                  Thank you for your interest. You will receive sms shortly.
                </p>
                <p id="resErrorMsg" className="errorMsg">
                  Oops somthing went wrong, please try again after some time.
                </p>
              </form>
              <div className="app-badge">
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
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
