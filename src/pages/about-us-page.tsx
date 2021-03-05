import React from "react";
import "../assets/css/aboutpage.css";
import shield from "../assets/img/shield.svg";
import a1 from "../assets/img/a1.svg";
import a2 from "../assets/img/a2.svg";
import a3 from "../assets/img/a3.svg";
import a4 from "../assets/img/a4.svg";

export interface AppAboutUsPageProps {}

const AppAboutUsPage: React.SFC<AppAboutUsPageProps> = () => {
  return (
    <>
      <main id="content" role="main">
        <div className="hero-pages">
          <h1 className="text-primary d-none d-sm-block text-center">
            About Us
          </h1>
          <h3 className="text-primary d-block d-sm-none text-center">
            About Us
          </h3>
          <div className="container">
            <p className=" text-center d-none d-sm-block">
              Choose from any of our wide range of courses tailored to suit your
              needs.
              <br />
              From software engineering to product management and more, We have
              got you covered
            </p>

            <p className=" text-center d-block d-sm-none">
              Choose from any of our wide range of courses tailored to suit your
              needs. From software engineering to product management and more,
              We have got you covered
            </p>
          </div>
        </div>

        <div>
          <div className="container" style={{ marginTop: "-20vh" }}>
            <div className="row">
              <div className="col-md-3">
                <img src={a1} alt="" className="img-fluid img-data" />
                <br />
              </div>
              <div className="col-md-3 mt-5">
                <img src={a2} alt="" className="img-fluid img-data" />
                <br />
                <br />
                <br />
              </div>
              <div className="col-md-3">
                <img src={a3} alt="" className="img-fluid img-data" />
              </div>
              <div className="col-md-3 mt-5">
                <img src={a4} alt="" className="img-fluid img-data" />
              </div>
            </div>
          </div>
        </div>
        <br />
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
                    Education At All Levels{" "}
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

        <div
          className="container-fluid "
          style={{ backgroundColor: "#22B9C3" }}
        >
          <div className="container space-2 space-top-xl-3 space-bottom-lg-3">
            <div className="row mx-n2 mx-lg-n3">
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                <div
                  className="card"
                  style={{ border: "none", height: "auto" }}
                >
                  <div className="card-icon">
                    <span className="">
                      <img src={shield} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers">Our Vision</h3>
                  <div className="card-body">
                    Through the deployment of our custom platforms in
                    partnership with progressive global Institutions, we have
                    been able to power more than 20 programs & courses, which
                    has led to more than 20,000 enrolments.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                <div
                  className="card"
                  style={{ border: "none", height: "auto" }}
                >
                  <div className="card-icon">
                    <span className="">
                      <img src={shield} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers">Our Mission</h3>
                  <div className="card-body">
                    Through the deployment of our custom platforms in
                    partnership with progressive global Institutions, we have
                    been able to power more than 20 programs & courses, which
                    has led to more than 20,000 enrolments.
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                <div
                  className="card"
                  style={{ border: "none", height: "auto" }}
                >
                  <div className="card-icon">
                    <span className="">
                      <img src={shield} alt="" />
                    </span>
                  </div>
                  <h3 className="card-headers">Our Promise</h3>
                  <div className="card-body">
                    Through the deployment of our custom platforms in
                    partnership with progressive global Institutions, we have
                    been able to power more than 20 programs & courses, which
                    has led to more than 20,000 enrolments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppAboutUsPage;
