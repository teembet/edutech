import { Link } from "react-router-dom";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

import "../assets/css/edupage.css";
import edu1 from "../assets/img/eduicon1.svg";
import edu2 from "../assets/img/eduicon2.svg";
import edu3 from "../assets/img/eduicon3.svg";
import laptop from "../assets/img/Macbook.png";
import eduimage1 from "../assets/img/eduimage1.svg";
import eduimage2 from "../assets/img/eduimage2.svg";
import eduimage3 from "../assets/img/eduimage3.svg";

export interface AppEduCollectPageProps {}

const AppEduCollectPage: React.SFC<AppEduCollectPageProps> = () => {
  return (
    <>
      <Zoom>
        <div className="d-lg-flex position-relative eduhero">
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
                  <h4 style={{ color: "#ffff" }}>EDUCOLLECT</h4>
                  <div style={{ width: "auto" }}>
                    <h1
                      className="display-4  "
                      style={{ color: "#ffff", fontSize: "36px" }}
                    >
                      Quick Access To Affordable Education Finance
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
                    href="https://educollectfinance.com/"
                    target="_blank"
                    rel="noreferrer"
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

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }} className="animated slideInUp">
              KEY BENEFITS
            </h3>
            <Zoom>
              <div className="container ">
                <div className="row mx-n2 mx-lg-n3">
                  <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                    <div className="card-center h-100 text-center pt-4 px-4">
                      <div className="card-icon">
                        <span>
                          <img src={edu1} alt="" />
                        </span>
                      </div>
                      <h3 className="card-headers text-center">
                        Zero Collateral
                      </h3>
                      <div className="card-body">
                        With EduCollect, you aren’t required to provide a
                        collateral for your loan. By just filing and uploading
                        certain information, you can secure a loan for your
                        educational needs.
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                    <div className="card-center h-100 text-center pt-4 px-4">
                      <div className="card-icon">
                        <span>
                          <img src={edu2} alt="" />
                        </span>
                      </div>
                      <h3 className="card-headers text-center">
                        Flexible Repayment
                      </h3>
                      <div className="card-body">
                        Reducing the burden of repaying a loan at once is one
                        unique benefit EduCollect has put in place. With its
                        repayment option, you can spread the loan capital across
                        a timeline.
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover">
                    <div className="card-center h-100 text-center pt-4 px-4">
                      <div className="card-icon">
                        <span>
                          <img src={edu3} alt="" />
                        </span>
                      </div>
                      <h3 className="card-headers text-center">
                        Multiple Loan Providers
                      </h3>
                      <div className="card-body">
                        EduCollect being a gateway for you to access loan to
                        meet your educational needs, gives you the benefit of
                        choosing the provider that satisfies you with their
                        terms and conditions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="space-3 laptopbg  min-vh-lg-100">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="img-fluid" src={laptop} alt="" />
        </div>
      </div>

      <Fade left>
        <div
          className="space-2"
          style={{ background: "#E8EFFD", width: "100%" }}
        >
          <div className="session-four container">
            <div className="mx-md-auto">
              <div className="text-center">
                <h2 style={{ color: "#0E347E", fontSize: "32px" }}>
                  Why Should I Use EduCollect?
                </h2>
              </div>

              <br />
              <br />
              <div className="row">
                <div className="col-sm-4">
                  <div className="card" style={{ height: "auto" }}>
                    <div className="">
                      <img className=" img-fluid" src={eduimage1} alt="none " />
                    </div>

                    <div className="p-4">
                      <span className="d-block h3 mb-0 text-primary">
                        For Academic <br></br>
                        Purposes
                      </span>

                      <p className=" text-body">
                        Education at this early stage is crucial and funding
                        should not be a barrier. Let us ease your burden by
                        ensuring you can give your wards the quality education
                        they need.
                      </p>
                      <br />

                      {/* <Link
                        to="/vigi-learn"
                        className="btn btn-primary btn-wide transition-3d-hover col-lg-12"
                      >
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ height: "auto" }}>
                    <div className="">
                      <img className=" img-fluid" src={eduimage2} alt="none " />
                    </div>

                    <div className="p-4">
                      <span className="d-block h3 mb-0 text-primary">
                        For Professional <br></br>Trainings
                      </span>

                      <p className=" text-body">
                        You shouldn’t have to deal with the stress of completing
                        your fees at once, so we’re here to ease that for you
                        with easily accessible loans to aid your academic
                        pursuits.
                      </p>
                      <br />

                      {/* <Link
                        to="/vigi-learn"
                        className="btn btn-primary btn-wide transition-3d-hover col-lg-12"
                      >
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ height: "auto" }}>
                    <div className="">
                      <img className="img-fluid" src={eduimage3} alt="none " />
                    </div>

                    <div className="p-4">
                      <span className="d-block h3 mb-0 text-primary">
                        For Educational Establishments
                      </span>

                      <p className=" text-body">
                        Striving to further your academic achievements shouldn’t
                        be limited by financial resources, so we’re here to
                        bridge that gap for you by offering you collateral-free
                        financing to keep your dream alive.
                      </p>

                      {/* <Link
                        to="/vigi-learn"
                        className="btn btn-primary btn-wide transition-3d-hover col-lg-12"
                      >
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default AppEduCollectPage;
