import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

import "../assets/css/aboutpage.css";
import about1 from "../assets/img/about1.svg";
import about2 from "../assets/img/about2.svg";
import about3 from "../assets/img/about3.svg";

export interface AppAboutUsPageProps {}

const AppAboutUsPage: React.SFC<AppAboutUsPageProps> = () => {
  return (
    <>
      <main id="content" role="main">
        <Zoom>
          <div className="d-lg-flex position-relative abouthero">
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
                    <div style={{ width: "auto" }}>
                      <h1
                        className="display-4  text-typing"
                        style={{ color: "#ffff", fontSize: "36px" }}
                      >
                        About Us
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
                    <a
                      className="btn btn-primary btn-wide transition-3d-hover"
                      href="#section1"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Zoom>
        <br />
        <Zoom>
          <div className="container space-bottom-2">
            <div className=" space-top-2 space-bottom-2">
              <div className=" col-lg-12">
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: "#041644" }}>Who we are</h3>
                </div>

                <div
                  className=""
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <div className="d-non col-lg-7">
                    <h1 style={{ textAlign: "center", color: "#041644" }}>
                      A Team Dedicated To Driving Sustainable Change Through
                      Education At All Levels
                    </h1>
                    <p className="col-lg-12" style={{ textAlign: "center" }}>
                      Through the deployment of our custom platforms in
                      partnership with progressive global Institutions, we have
                      been able to power more than 20 programs & courses, which
                      has led to more than 20,000 enrolments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <div
          className="container-fluid "
          style={{ backgroundColor: "#E8EFFD" }}
          id="section1"
        >
          <div className="container space-2 space-top-xl-3 space-bottom-lg-3">
            <Fade left>
              <div className="row mx-n2 mx-lg-n3">
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                  <div
                    className="card card-hover pt-4 px-4"
                    style={{
                      border: "none",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{ alignSelf: "flex-start", marginLeft: "20px" }}
                    >
                      <span>
                        <img src={about1} alt="" />
                      </span>
                    </div>
                    <div className="" style={{ alignSelf: "flex-start" }}>
                      <h3
                        className="card-headers"
                        style={{ textAlign: "left" }}
                      >
                        Our Vision
                      </h3>
                    </div>
                    <div
                      className="card-body"
                      style={{ alignSelf: "flex-start", textAlign: "left" }}
                    >
                      Leading the charge towards the proliferation of education
                      globally through technology
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                  <div
                    className="card card-hover pt-4 px-4"
                    style={{
                      border: "none",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{ alignSelf: "flex-start", marginLeft: "20px" }}
                    >
                      <span>
                        <img src={about2} alt="" />
                      </span>
                    </div>
                    <h3
                      className="card-headers"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Our Mission
                    </h3>
                    <div
                      className="card-body"
                      style={{ alignSelf: "flex-start", textAlign: "left" }}
                    >
                      To ensure the continuity of education across all levels
                      worldwide through the implementation of the best learning
                      technology
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                  <div
                    className="card card-hover pt-4 px-4"
                    style={{
                      border: "none",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{ alignSelf: "flex-start", marginLeft: "20px" }}
                    >
                      <span>
                        <img src={about3} alt="" />
                      </span>
                    </div>
                    <h3
                      className="card-headers"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Our Goals
                    </h3>
                    <div
                      className="card-body"
                      style={{ alignSelf: "flex-start", textAlign: "left" }}
                    >
                      Our goal is to provide a better learning experience for
                      individuals and drive effective management of all related
                      processes to significantly improve learning delivery for
                      institutions.
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppAboutUsPage;
