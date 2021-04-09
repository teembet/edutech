import * as React from "react";

import "../assets/css/homepage.css";

import armor from "../assets/img/armor.svg";
import armor2 from "../assets/img/armor2.svg";
import armor3 from "../assets/img/armor3.svg";
import armor4 from "../assets/img/armor4.svg";
import armor5 from "../assets/img/armor5.svg";
import armor6 from "../assets/img/armor6.svg";

import cityscapes from "../assets/img/cityscapes.svg";
import cityscapes2 from "../assets/img/cityscapes2.svg";

import { Link } from "react-router-dom";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
export interface AppHomePageProps {
  images: any;
  history: any;
}

const AppHomePage: React.SFC<AppHomePageProps> = ({ history }) => {
  return (
    <>
      <main id="content" role="main">
        <Zoom>
          <div className="d-lg-flex position-relative homehero">
            <div className="container d-lg-flex align-items-lg-center space-3 min-vh-lg-100">
              <Fade left>
                <div
                  className="col-lg-6 card p-4"
                  style={{
                    background: "rgba(24, 24, 24, 0.25)",
                    border: "none",
                    padding: "20px 12px",
                    height: "auto",
                  }}
                >
                  <div className="mb-5 mt-11">
                    <h1
                      className="display-4 mb-3"
                      style={{ color: "#ffff", fontSize: "36px" }}
                    >
                      Pushing The Boundaries
                    </h1>
                    <div style={{ width: "auto" }}>
                      <h1
                        className="display-4  text-typing"
                        style={{ color: "#ffff", fontSize: "36px" }}
                      >
                        Of Learning.
                      </h1>
                    </div>

                    <p className="lead" style={{ color: "#ffff" }}>
                      We are a technology company focused on bridging the gap
                      between demand for and access to quality education through
                      the process of decentralizing the traditional method of
                      learning.
                    </p>
                  </div>
                  <div>
                    <Link
                      className="btn btn-primary btn-wide transition-3d-hover"
                      to="/about"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Zoom>
        <div
          className="container space-bottom-lg-2 "
          style={{ position: "relative" }}
        >
          <Fade right>
            <div className="w-md-80 w-lg-60 space-top-3 text-center mx-md-auto mb-5 mb-md-9">
              <h2>Why Choose EduTech?</h2>
              <p>
                Whether you’re an Academic Institution Proprietor looking to
                improve your administrative & learning processes, a Business
                Manager looking to upskill your workforce, an Individual
                searching for access to education financing in Africa.
              </p>
            </div>

            <div className="row mx-n2 mx-lg-n3">
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers text-center">
                    Online Program Facilitation
                  </h3>
                  <div className="card-body">
                    We provide all the vital logistical components for any
                    online program, including comprehensive student support
                    services from student enrollment through to graduation and
                    beyond.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor2} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers text-center">
                    Observation & Analysis
                  </h3>
                  <div className="card-body">
                    We carry out extensive research, observation and analysis of
                    tertiary educational systems with respect to the
                    streamlining and improvement in delivery of learning content
                    to students.
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor3} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers text-center">
                    Creating Access To Learning
                  </h3>
                  <div className="card-body">
                    We work to increase student access to degree granting
                    institutions whilst mitigating the current constraints that
                    exist for working adults within the African context.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor4} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers text-center">
                    Upholding Integrity & Quality
                  </h3>
                  <div className="card-body">
                    We are very committed to working with our partners to uphold
                    the quality of learning and integrity of the educational
                    system in Africa.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor5} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers text-center">
                    Change Management
                  </h3>
                  <div className="card-body">
                    We recognize that we are currently at the dawn of the
                    digital age and many institutions are at the stage of
                    transition from analog to digital formats and processes.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                <div className="card-center  h-100 text-center pt-4 px-4">
                  <div className="card-icon">
                    <span>
                      <img src={armor6} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers">Technical Support</h3>
                  <div className="card-body">
                    Our dedicated support team provides a breadth of services to
                    support both students and course administrators every step
                    of their interaction with our numerous platforms.
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade left>
          <div style={{ background: "#E8EFFD", width: "100%" }}>
            <div className="session-four container space-top-2 space-top-xl-3 space-bottom-lg-2">
              <div className="mx-md-auto mb-5 mb-md-9">
                <div className="text-center">
                  <h2 style={{ color: "#0E347E", fontSize: "32px" }}>
                    Our Businesses
                  </h2>
                  <p>
                    We have a diverse range of solutions that are focused on
                    <br />
                    tackling specific challenge related to education.
                  </p>
                </div>

                <br />
                <br />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card" style={{ height: "auto" }}>
                      <div className="">
                        <img
                          className="img-fluid"
                          src={cityscapes}
                          alt="none "
                        />
                      </div>

                      <div className="p-4">
                        <span className="d-block small text-body font-weight-bold text-cap">
                          Platform Delivery
                        </span>
                        <span className="d-block h3 mb-0">VIGILEARN</span>

                        <p className=" text-body" style={{ width: "80%" }}>
                          VigiLearn is and end-to-end suite of products designed
                          toprovide a faster and more efficient way of managing
                          administartive and academic related processes like
                          payments, registration, invoicing, virtual classroom,
                          e-library and many more.
                        </p>
                        <br />

                        <Link
                          to="/vigi-learn"
                          className="btn btn-primary btn-wide transition-3d-hover col-lg-12"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card" style={{ height: "auto" }}>
                      <div className="">
                        <img
                          className="img-fluid"
                          src={cityscapes2}
                          alt="none "
                        />
                      </div>

                      <div className="p-4 ">
                        <span className="d-block small text-body font-weight-bold text-cap">
                          Education Financing
                        </span>
                        <span className="d-block h3 mb-0">EDUCOLLECT</span>

                        <p className=" text-body" style={{ width: "80%" }}>
                          EduCollect is an education financing gateway that
                          seeks to bridge the funding gap in the education
                          system, by aggregating multiple funders to provide
                          finance & support to students, parents and education
                          service.
                        </p>
                        <br />

                        <Link
                          to="edu-collect"
                          className="btn btn-primary btn-wide  transition-3d-hover col-lg-12"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section>
                <div className="row mx-n2 mx-lg-n3"></div>
              </section>
            </div>
          </div>
        </Fade>
      </main>
    </>
  );
};

export default AppHomePage;
