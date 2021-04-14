// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { useState } from "react";

import partners from "../assets/img/partners.svg";
import oau from "../assets/img/oau.svg";
import babcock from "../assets/img/babcock.svg";
import left from "../assets/img/left.svg";
import right from "../assets/img/right.svg";

export interface AppPartnersProps {}

const AppPartners: React.SFC<AppPartnersProps> = () => {
  const [images] = useState([
    {
      image: partners,
      title: "Ahmadu Bello University",
      url: "https://abudlc.edu.ng/",
      content:
        "Since our partnership with this prestigious institution began in 2015, we have helped solve the problem of access to quality education by facilitating the successful deployment of Africa’s first online MBA program after which, has come the launch of several other degree programs across both undergraduate and postgraduate levels.",
    },
    {
      image: oau,
      title: "Obafemi Awolowo University",
      url: "http://online.oaucdl.edu.ng/",
      content:
        "After partnering with this foremost tertiary institution in 2012, EduTech powered the seamless deployment of multiple undergraduate online degree programs which have given thousands of Africans the opportunity to further their education wherever, whenever.   ",
    },
    {
      image: babcock,
      title: "Babcock University",
      url: "https://www.babcock.edu.ng/",
      content:
        "To further drive EduTech’s mandate of breaking barriers in accessing quality education, we partnered with the 2nd highest ranked private university in Nigeria in order to launch multiple degree programs across undergraduate and postgraduate levels.",
    },
  ]);

  const [index, setIndex] = useState(0);

  const slideRight = () => {
    const nextIndex = index + 1;
    if (nextIndex > images.length - 1) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            className="fa fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-left shadow-soft rounded-circle ml-sm-n2 d-block d-lg-none d-md-none"
            onClick={slideLeft}
            // style={{
            //   background: index === 0 ? "#1354D3" : "",
            //   color: index === 0 ? "#fff" : "",
            // }}
          ></span>
          <h4 className="d-block d-lg-none d-md-none">
            {index + 1} / {images.length}
          </h4>
          <span
            className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4 d-block d-lg-none d-md-none"
            onClick={slideRight}
            // style={{
            //   background: index === images.length - 1 ? "#1354D3" : "",
            //   color: index === images.length - 1 ? "#fff" : "",
            // }}
          ></span>
        </div>
        <br className="d-block d-lg-none d-md-none" />
        <br className="d-block d-lg-none d-md-none" />
        <div className="row">
          <div
            className="col-sm-2 d-none d-lg-block d-md-block left-carosel"
            style={{
              backgroundImage: `url(${
                images[index == 0 ? images.length - 1 : index - 1].image
              })`,
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span
                className="fa fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"
                onClick={slideLeft}
                // style={{
                //   background: index === 0 ? "#1354D3" : "",
                //   color: index === 0 ? "#fff" : "",
                // }}
              ></span>
            </div>
          </div>
          <div className="col-sm-8">
            <img
              src={images[index].image}
              style={{ width: "100%" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-sm-2 d-none d-lg-block d-md-block right-carosel"
            style={{
              backgroundImage: `url(${
                images[index + 1 == images.length ? 0 : index + 1].image
              })`,
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span
                className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"
                onClick={slideRight}
                // style={{
                //   background: index === images.length - 1 ? "#1354D3" : "",
                //   color: index === images.length - 1 ? "#fff" : "",
                // }}
              ></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 d-none d-lg-block d-md-block"></div>
          <div className="col-sm-8">
            <br />
            <br />
            <h3 className="text-center">{images[index].title}</h3>
            <br />
            <p className="text-center">{images[index].content}</p>
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
                href={images[index].url}
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
