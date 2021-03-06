import React from "react";
import { Link } from "react-router-dom";
import Socials from "./socials";
import alert from "../assets/img/alert.png";

export interface AppFooterProps {}

const AppFooter: React.SFC<AppFooterProps> = () => {
  return (
    <React.Fragment>
      <footer className="bg-dark" style={{ backgroundColor: "F0F0F0" }}>
        <div className="container">
          <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
            <div className="row justify-content-lg-between">
              <div className="col-md-3">
                <div className="mb-4">
                  <h2 className="text-primary">EduTech</h2>
                </div>
                {/* <!-- End Logo -->

            <!-- Nav Link --> */}
                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                  <li className="nav-item">
                    <a className="nav-link media">
                      <span className="media">
                        <span className="fas fa-location-arrow mt-1 mr-2"></span>
                        <span className="media-body">
                          Vibranium Vally <br />
                          42, Local Airport Road, Ikeja <br />
                          Lagos
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link media" href="tel:1-062-109-9222">
                      <span className="media">
                        <span className="fas fa-phone-alt mt-1 mr-2"></span>
                        <span className="media-body">
                          +234 [0] 802 345 6789
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link media"
                      href="mailto:contactus@edulearn.com"
                    >
                      <span className="media">
                        <span className="fas fa-envelope-open mt-1 mr-2"></span>
                        <span className="media-body">
                          Info@gardenacademy.io
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>

                <a className="nav-link media" href="tel:1-062-109-9222">
                  <span className="media">
                    <span className="media-body">Follow Us</span>
                  </span>
                </a>
                <Socials></Socials>
                <br />
                <br />
              </div>

              <div className="col-md-3">
                <h6>CATEGORIES</h6>

                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                  <li className="nav-item">
                    <a className="nav-link nav-footer" href="/">
                      VigiLearn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-footer" href="/">
                      EduCollect
                    </a>
                  </li>
                </ul>

                <br />
                <br />
              </div>

              <div className="col-md-3 ">
                <h6>USEFUL LINKS</h6>

                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                  <li className="nav-item">
                    <Link className="nav-link nav-footer" to="/about">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-footer" to="/">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-footer" to="/payment">
                      Payment Plans
                    </Link>
                  </li>
                </ul>
                <br />
                <br />
              </div>

              <div className="col-md-3 ">
                <h6>TERMS & CONDITIONS</h6>

                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                  <li className="nav-item">
                    <a className="nav-link nav-footer" href="front.html#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-footer" href="front.html#">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-footer" href="front.html#">
                      Payment Terms
                    </a>
                  </li>
                </ul>
                <br />
                <br />
              </div>
            </div>
          </div>

          <hr className="opacity-xs my-0" />
          <div>
            <p
              className="d-none d-lg-block"
              style={{ padding: "2rem 0", color: "#051A52" }}
            >
              ?? 2021 Edutech - All Rights Reserved.
            </p>

            <p
              className="d-lg-none"
              style={{ padding: "2rem 0", color: "#051A52" }}
            >
              ?? 2021 Edutech - <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- ========== END FOOTER ========== --> */}
    </React.Fragment>
  );
};

export default AppFooter;
