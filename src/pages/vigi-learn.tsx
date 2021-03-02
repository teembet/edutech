import React from "react";

import "../assets/css/vigilearn.css";
import armor from "../assets/img/vector.svg";

export interface AppVigiLearnPageProps {}

const AppVigiLearnPage: React.SFC<AppVigiLearnPageProps> = () => {
  return (
    <>
      <div className="hero-pages">
        <h6 className="text-center">VIGILEARN</h6>
        <h1 className="text-primary d-none d-sm-block text-center">
          Complete Education <br /> Management In A Box
        </h1>
        <h3 className="text-primary d-block d-sm-none text-center">
          Complete Education Management In A Box
        </h3>
        <div className="container">
          <p className="text-center d-none d-sm-block">
            VigiLearn is an end-to-end suite of products designed to provide a
            <br />
            faster and more efficient way of managing administrative and
            <br />
            academic related processes.
          </p>
          <p className="text-center d-block d-sm-none">
            VigiLearn is an end-to-end suite of products designed to provide a
            faster and more efficient way of managing administrative and
            academic related processes.
          </p>
        </div>
        <button
          className="btn btn-lg  btn-primary"
          style={{
            padding: "16px 32px",
            borderRadius: "4px",
            background: "rgb(15, 66, 164)",
          }}
        >
          Speak With Us
        </button>
      </div>

      <div className="row">
        <div className="offset-sm-2 col-sm-8">
          <div
            style={{ marginTop: "-80px" }}
            className="embed-responsive embed-responsive-16by9"
          >
            <iframe
              src="https://www.youtube.com/embed/cpABTFhi4SI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>Our Solutions</h3>

            <br />

            <div className="tabbable-panel">
              <div className="tabbable-line">
                <ul
                  className="nav nav-tabs "
                  style={{ justifyContent: "space-evenly" }}
                >
                  <li>
                    <a href="#tab_default_1" data-toggle="tab">
                      Learning Management System
                    </a>
                  </li>
                  <li>
                    <a href="#tab_default_2" data-toggle="tab">
                      Apply Portal
                    </a>
                  </li>
                  <li>
                    <a href="#tab_default_3" data-toggle="tab">
                      Student Information System
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active" id="tab_default_1">
                    <div className="container ">
                      <div className="row space-2">
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Virtual Classroom</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">User Management</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Big Data Analytics</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Social Networking</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Service & Support</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 ">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Learning Platform</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 offset-sm-3 offset-lg-4">
                          <div className="card-center">
                            <div className="card-icon">
                              <span className="span-icons">
                                <img src={armor} alt="" />
                              </span>
                            </div>
                            <h3 className="card-headers">Customization</h3>
                            <div>
                              <p className="text-dark text-center">
                                Feel free to use these in any private or public
                                space. Please do not repackage and redistribute
                                these as your own. If you want to include them
                                in your design tool like Origami or Framer,
                                contact us!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row mt-5"
                      style={{ justifyContent: "center" }}
                    >
                      <button className="btn btn-md  btn-primary white-text">
                        Speak With Us
                      </button>
                      <span
                        className=" btn ml-3"
                        style={{ alignSelf: "center" }}
                      >
                        Download Product Information
                      </span>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab_default_2">
                    <p>Tab 2.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="tab-pane" id="tab_default_3">
                    <p>Tab 3.</p>
                    <p>Consectetur deleniti quisquam natus eius commodi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppVigiLearnPage;
