import { useState } from "react";
import armor from "../assets/img/vector.svg";

export interface AppGardenAcademyProps {}

const AppGardenAcademy: React.SFC<AppGardenAcademyProps> = () => {
  const [images, setImages] = useState([
    {
      title: "Data Analytics",

      content:
        "As an effective alternative to physical training, we deploy our platforms to provide quality content to help upskill professionals. This helps prepare job-ready professionals who are ready to make immediate impact in their industry.",
    },
    {
      title: "Product Management",

      content:
        "As an effective alternative to physical training, we deploy our platforms to provide quality content to help upskill professionals. This helps prepare job-ready professionals who are ready to make immediate impact in their industry.",
    },

    {
      title: "Engineering Leadership",

      content:
        "As an effective alternative to physical training, we deploy our platforms to provide quality content to help upskill professionals. This helps prepare job-ready professionals who are ready to make immediate impact in their industry.",
    },
  ]);

  const [index, setIndex] = useState(0);

  const slideRight = () => {
    const nextIndex = index + 1;
    if (nextIndex > images.length - 1) {
      return;
    } else {
      setIndex(nextIndex);
    }
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      return;
    } else {
      setIndex(nextIndex);
    }
  };
  return (
    <>
      <div className="hero-pages">
        <h6 className="text-center">GARDEN ACADEMY</h6>
        <h1 className="text-primary text-center d-none d-sm-block">
          Creating The Best Tech <br /> Talent in Africa
        </h1>

        <h3 className="text-primary text-center d-block d-sm-none">
          Creating The Best Tech Talent in Africa
        </h3>
        <div className="container">
          <p className="text-center d-none d-sm-block">
            Garden Academy is a training establishment focused on
            <br />
            delivering in-demand skills within the tech industry.
          </p>

          <p className="text-center d-block d-sm-none">
            Garden Academy is a training establishment focused on delivering
            in-demand skills within the tech industry.
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
          Learn More
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
            <h3 style={{ textAlign: "center" }}>KEY BENEFITS</h3>

            <div className="container ">
              <div className="row space-2">
                <div className="col-sm-6 col-lg-4 ">
                  <div className="card-center">
                    <div className="card-icon">
                      <span className="span-icons">
                        <img src={armor} alt="" />
                      </span>
                    </div>
                    <h3 className="card-headers">Workforce Development</h3>
                    <div>
                      <p className="text-dark text-center">
                        As an effective alternative to physical training, we
                        deploy our platforms to provide quality content to help
                        upskill professionals. This helps prepare job-ready
                        professionals who are ready to make immediate impact in
                        their industry.
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
                    <h3 className="card-headers">Skill Improvement</h3>
                    <div>
                      <p className="text-dark text-center">
                        Through exposure to world-class learning content
                        delivered by Industry experts, learners of all levels
                        not only learn from the best but also become the best in
                        their chosen fields.
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
                    <h3 className="card-headers">Market Readiness</h3>
                    <div>
                      <p className="text-dark text-center">
                        Thanks to the rigorous curriculum created by global
                        industry experts, budding professionals get to expand
                        their horizons and are thoroughly prepared to join the
                        growing pool of top African tech talent who are ready to
                        take over the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              className="btn btn-lg  btn-primary"
              style={{
                padding: "16px 32px",
                borderRadius: "4px",
                background: "rgb(15, 66, 164)",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ background: "#2B478B" }} className="space-3">
        <div className="container">
          <h2 className="text-light">Learning Paths</h2>
          <br />

          <div className="row">
            <div
              className="col-sm-1 d-none d-sm-block"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                className="fa fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-left shadow-soft rounded-circle ml-sm-n2"
                onClick={slideLeft}
                style={{
                  background: index === 0 ? "#1354D3" : "",
                  color: index === 0 ? "#fff" : "",
                }}
              ></span>
            </div>
            <div className="col-sm-10">
              {images.length > 0 && (
                <div className="row">
                  <div className="col-sm-4">
                    <div
                      style={{
                        background: "#fff",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      className="p-4 space-1"
                    >
                      <h3>{images[index].title}</h3>
                      <p>{images[index].content}</p>
                    </div>
                  </div>
                  {images.length - 1 >= index + 1 && (
                    <div className="col-sm-4 d-none d-sm-block">
                      <div
                        style={{
                          background: "#fff",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                        className="p-4 space-1"
                      >
                        <h3>{images[index + 1].title}</h3>
                        <p>{images[index + 1].content}</p>
                      </div>
                    </div>
                  )}
                  {images.length - 1 >= index + 2 && (
                    <div className="col-sm-4 d-none d-sm-block">
                      <div
                        style={{
                          background: "#fff",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                        className="p-4 space-1"
                      >
                        <h3>{images[index + 2].title}</h3>
                        <p>{images[index + 2].content}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className="col-sm-1 d-none d-sm-block"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"
                onClick={slideRight}
                style={{
                  background: index === images.length - 1 ? "#1354D3" : "",
                  color: index === images.length - 1 ? "#fff" : "",
                }}
              ></span>
            </div>

            <div className="col-sm-12 d-block d-sm-none">
              <br />
              <br />
              <span
                className="fa fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-left shadow-soft rounded-circle ml-sm-n2"
                onClick={slideLeft}
                style={{
                  background: index === 0 ? "#1354D3" : "",
                  color: index === 0 ? "#fff" : "",
                }}
              ></span>
              <span
                className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"
                onClick={slideRight}
                style={{
                  background: index === images.length - 1 ? "#1354D3" : "",
                  color: index === images.length - 1 ? "#fff" : "",
                  float: "right",
                }}
              ></span>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default AppGardenAcademy;
