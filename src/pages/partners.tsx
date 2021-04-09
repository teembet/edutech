import partners from "../assets/img/partners.svg";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
export interface AppPartnersProps {}

const AppPartners: React.SFC<AppPartnersProps> = () => {
  return (
    <>
      <Zoom>
        <div className="d-lg-flex position-relative partnerhero">
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
                  <h5 style={{ color: "#fff" }}>PARTNERS</h5>
                  <br />
                  <h1
                    className="display-4 mb-3"
                    style={{ color: "#ffff", fontSize: "36px" }}
                  >
                    Join Us To Bridge The Gap
                  </h1>
                  <div style={{ width: "auto" }}>
                    <h1
                      className="display-4  text-typing"
                      style={{ color: "#ffff", fontSize: "36px" }}
                    >
                      Of Learning.
                    </h1>
                  </div>
                </div>

                <p className="lead" style={{ color: "#ffff" }}>
                  We are constantly open to partnership oppoutunities with
                  progressive education establishments and global changemakers.
                </p>
                <br />
                <div>
                  <Link
                    className="btn btn-primary btn-wide transition-3d-hover"
                    to="/contact"
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Zoom>
      <div className="container-fluid">
        <div className="space-1 text-center">
          <h5>OUR PARTNERS</h5>
        </div>
        <div className="row">
          <div className="col-sm-2 d-none d-lg-block d-md-block left-carosel">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span className="fa fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"></span>
            </div>
          </div>
          <div className="col-sm-8">
            <img
              src={partners}
              style={{ width: "100%" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-sm-2 d-none d-lg-block d-md-block right-carosel">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 d-none d-lg-block d-md-block"></div>
          <div className="col-sm-8">
            <br />
            <br />
            <h3 className="text-center">Ahmadu Bello University</h3>
            <br />
            <p className="text-center">
              Since our partnership with this prestigious institution began in
              2015, we have helped solve the problem of access to quality
              education by facilitating the successful deployment of Africa’s
              first online MBA program after which, has come the launch of
              several other degree programs across both undergraduate and
              postgraduate levels.
            </p>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://abudlc.edu.ng/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-outline-primary"
                style={{
                  padding: "16px 32px",
                  borderRadius: "4px",
                }}
              >
                View Solutions
              </a>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>

      <div
        className="container space-2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0F42A4",
          borderRadius: "8px",
        }}
      >
        <h2 className="text-center text-light">
          Ready To Partner With Us
          <br />
          To Get More People Access To
          <br />
          Quality Education?
        </h2>
        <br />
        <Link
          to="/contact"
          className="btn btn-lg btn-outline-primary"
          style={{
            padding: "16px 32px",
            borderRadius: "4px",
            background: "#fff",
          }}
        >
          Become a Partner
        </Link>
      </div>
    </>
  );
};

export default AppPartners;
