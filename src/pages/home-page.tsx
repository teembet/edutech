import * as React from "react";
import { useState } from "react";

import "../assets/css/homepage.css";
import homehero from "../assets/img/home-hero.svg";
import armor from "../assets/img/armor.svg";

import person2 from "../assets/img/person2.svg";
import cityscapes from "../assets/img/cityscapes.svg";
import cityscapes2 from "../assets/img/cityscapes2.svg";
import person1 from "../assets/img/person1.svg";
import { Link } from "react-router-dom";

export interface AppHomePageProps {
  images: any;
  history: any;
}

const AppHomePage: React.SFC<AppHomePageProps> = ({ history }) => {
  const [images, setImages] = useState([
    {
      image: person1,
      title: "Dimeji Adeojo",
      social: "Product Designer",
      content:
        "With Garden Academy, I have been able to upscale my skills as a Product Designer. I got introduced to new ways and techniques to designing products that is customer centric and focused on giving the customer a good experience as they move further down the product funnel",
    },
    {
      image: person2,
      title: "Chibuzor Okoro",
      social: "FrontEnd Intern",
      content:
        "As a graduate of Economics, I have always been interested in the world of tech, which lead my passion to learning how to code as a frontend developer. Getting into Garden Academy, I was introduced to the programming languages (HTML, CSS, JavaScript). With the few months spent in my learning, I was ble to secure an internship as a Front-end developer in a fintech",
    },

    {
      image: person1,
      title: "Silva Folabi",
      social: "Freelance Developer",
      content:
        "After 4 years in the banking industry, I realized that my passion wasn’t in banking but in tech, because all through my University days I was a tech enthusiast. But I couldn’t move into the world of tech with a Bachelor’s degree in Business Admin. I needed the skills to function. Then I got to know about Garden Academy, and with the few months learning to be a backend developer, I have been able to code my own website, and also doing some freelance projects",
    },
    {
      image: person2,
      title: "Tolu Odewole",
      social: "HR Manager",
      content:
        "Garden Academy is the best platform to learn and upgrade your skills in tech. As a HR professional, I can say that Garden Academy has impacted me so much that I can go back to my workplace and function better",
    },
    {
      image: person2,
      title: "Gerard Obi",
      social: "Business Analyst",
      content:
        "I have been on the look-out for courses to take to improve myself as a Business Analyst, and getting to know about Garden Academy was the breakthrough I needed. The tutors are well experienced with lots of accolades on their belts, and we got to breakdown real-life business issues, and working to find solutions to them.",
    },
    {
      image: person2,
      title: "Aliyu, Bamako",
      social: "Project Manager",
      content:
        "Garden Academy is a top class platform for me. As a student of the academy, I enrolled for its project management course, and I didn’t regret my decision, because I got to understand what it is expected of me as a project manager. Also, the support service was excellent",
    },
    {
      image: person2,
      title: "Jeremiah Sunday",
      social: "Lawyer",
      content:
        "Being a law graduate and fresh out of Law School, I needed to do something while waiting to be posted for NYSC, then I got to know about Garden Academy through a friend. I took up their law course and after finishing the course, I got an offer to work as a Junior Associate in for Tech start-up",
    },
    {
      image: person2,
      title: "Tobe Anwuli",
      social: "Frontend Developer",
      content:
        "With over 3 years of experience as a Frontend developer, I needed an advance course to push me to the next stage of my career. I saw the ad about Garden Academy on social media and decided to opt-in for a course in Frontend development. It was indeed what I was looking for, and the tutors were very experienced and understanding. And with a certification from Garden Academy, I secured a promotion at my workplace.",
    },
    {
      image: person2,
      title: "Nonso Okpala",
      social: "Business Manager",
      content:
        "One thing I am proud of as a graduate of Garden Academy is that I have been able to showcase my leadership skills much better at a management level. With its leadership course, I have been able to work on myself as a leader.",
    },
    {
      image: person2,
      title: "Bunmi Ogunye",
      social: "Data Analyst",
      content:
        "Despite graduating as a Pharmacist, I needed the skill to analyze data and also to secure a job as a Data Analyst, because I wanted to focus more on the research aspect of Pharmacy. Garden Academy provided for me the necessary skills I needed, and after completion, I secured an employment as a Data Analyst for a Pharmaceutical company.",
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
      <main id="content" role="main">
        <div
          className="d-lg-flex  position-relative hero"
          style={{ paddingBottom: "5%" }}
        >
          <div className="container d-lg-flex  align-items-lg-center space-2 min-vh-lg-100">
            <div className="w-md-100">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="mb-5 mt-11">
                    <h2 className="mb-3 text-primary">
                      Pushing The Boundaries Of Learning.
                    </h2>

                    <p className="lead">
                      We are a technology company focused on bridging the gap
                      between demand for and access to quality education through
                      the process of decentralizing the traditional method of
                      learning.
                    </p>
                  </div>

                  <a
                    href="https://edulearn.com"
                    className="btn btn-lg  btn-primary"
                    style={{
                      padding: "16px 32px",
                      borderRadius: "4px",
                      background: "rgb(15, 66, 164)",
                    }}
                  >
                    View Solutions
                  </a>
                </div>

                <div className="col-lg-6 space-top-2">
                  <img
                    src={homehero}
                    alt=""
                    className="img-fluid img-fluid "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container space-2 space-top-xl-3 space-bottom-lg-3"
          style={{ position: "relative" }}
        >
          <div
            className="container d-none d-lg-block"
            style={{
              position: "absolute",
              top: "-50px",
              background: "#fff",
              boxShadow:
                "2px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 2px rgba(0, 0, 0, 0.04)",
              borderRadius: "4px",
            }}
          >
            <div className="row m-5">
              <div className="col-sm-3 text-center">
                <h3>30,000</h3>
                <p>Lifetime Users</p>
              </div>
              <div className="col-sm-3 text-center">
                <h3>20+</h3>
                <p>Programs</p>
              </div>
              <div className="col-sm-3 text-center">
                <h3>5000</h3>
                <p>Lifetime Graduates</p>
              </div>
              <div className="col-sm-3 text-center">
                <h3>5</h3>
                <p>Institutions Powered</p>
              </div>
            </div>
          </div>
          <div className="w-md-80 w-lg-60 space-top-3 text-center mx-md-auto mb-5 mb-md-9">
            <h2>Why Choose EduTech?</h2>
            <p>
              Whether you’re an Academic Institution Proprietor looking to
              improve your administrative & learning processes, a Business
              Manager looking to upskill your workforce, an Individual searching
              for access to education financing in Africa.
            </p>
          </div>

          <div className="row mx-n2 mx-lg-n3">
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Online Program Facilitation</h3>
                <div className="card-body">
                  We provide all the vital logistical components for any online
                  program, including comprehensive student support services from
                  student enrollment through to graduation and beyond.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Observation & Analysis</h3>
                <div className="card-body">
                  We carry out extensive research, observation and analysis of
                  tertiary educational systems with respect to the streamlining
                  and improvement in delivery of learning content to students.
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Creating Access To Learning</h3>
                <div className="card-body">
                  We work to increase student access to degree granting
                  institutions whilst mitigating the current constraints that
                  exist for working adults within the African context.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Upholding Integrity & Quality</h3>
                <div className="card-body">
                  We are very committed to working with our partners to uphold
                  the quality of learning and integrity of the educational
                  system in Africa.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Change Management</h3>
                <div className="card-body">
                  We recognize that we are currently at the dawn of the digital
                  age and many institutions are at the stage of transition from
                  analog to digital formats and processes.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card-center">
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={armor} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Technical Support</h3>
                <div className="card-body">
                  Our dedicated support team provides a breadth of services to
                  support both students and course administrators every step of
                  their interaction with our numerous platforms.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "#E8EFFD", width: "100%" }}>
          <div className="session-four container space-top-2 space-top-xl-3 space-bottom-lg-2">
            <div className="mx-md-auto mb-5 mb-md-9">
              <h2>Our Solutions</h2>
              <p>
                We have a diverse range of solutions that are focused on
                <br />
                tackling specific challenge related to education.
              </p>
              <br />
              <br />
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-sm-5">
                  <img className="img-fluid w-100" src={cityscapes} alt="" />
                  <br />
                  <br />
                  <h6>Platform Delivery</h6>
                  <h3>VIGILEARN</h3>
                  <p>
                    VigiLearn is and end-to-end suite of products designed
                    toprovide a faster and more efficient way of managing
                    administartive and academic related processes like payments,
                    registration, invoicing, virtual classroom, e-library and
                    many more.
                  </p>
                  <br />
                  <Link
                    to="/vigi-learn"
                    style={{
                      border: "2px solid #0F42A4",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      padding: "16px 32px",
                      color: "#0F42A4",
                      background: "#fff",
                    }}
                  >
                    Learn More
                  </Link>
                  <br />
                  <br />
                </div>
                <div className="col-sm-5">
                  <img className="img-fluid w-100" src={cityscapes2} alt="" />
                  <br />
                  <br />
                  <h6>Education Financing</h6>
                  <h3>EDUCOLLECT</h3>
                  <p>
                    EduCollect is an education financing gateway that seeks to
                    bridge the funding gap in the education system, by
                    aggregating multiple funders to provide finance & support to
                    students, parents and education service.
                  </p>
                  <br />
                  <br />
                  <Link
                    to="edu-collect"
                    style={{
                      border: "2px solid #0F42A4",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      padding: "16px 32px",
                      color: "#0F42A4",
                      background: "#fff",
                    }}
                  >
                    Learn More
                  </Link>
                  <br />
                  <br />
                </div>
                {/* <div className="col-sm-4">
                  <img className="img-fluid w-100" src={cityscapes3} alt="" />
                  <br />
                  <br />
                  <h6>Content Development & Delivery</h6>
                  <h3>GARDEN ACADEMY</h3>
                  <p>
                    Garden Academy is a training academy focused on delivering
                    in-demand industry skills and ensuring enrollers are
                    job-ready at completion of their respective programs.
                  </p>
                  <br />
                  <br />
                  <button
                    style={{
                      border: "2px solid #0F42A4",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      padding: "16px 32px",
                      color: "#0F42A4",
                    }}
                  >
                    Learn More
                  </button>
                  <br />
                  <br />
                </div> */}
              </div>
            </div>
            <section>
              <div className="row mx-n2 mx-lg-n3"></div>
            </section>
          </div>
        </div>

        {/* {images.length > 0 && (
          <div className=" container d-lg-flex space-2 align-items-lg-center min-vh-lg-100">
            <div className="row">
              <div
                className="offset-lg-4 col-lg-4 mt-5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 className="text-center">Loved by Industry Leaders</h2>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="row">
                  <div className="col-md-4 col-sm-12 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                    <div>
                      <div style={{ padding: "5%" }}>
                        <h3>"</h3>
                        <p className="tip">
                          <span>{images[index].content}</span>
                          {images[index].content.length > 200
                            ? images[index].content.substring(0, 200) + "..."
                            : images[index].content}
                        </p>
                        <br />
                        <div className="row">
                          <div className="col-9">
                            <p style={{ margin: "0px" }}>
                              {images[index].title}
                            </p>
                            <h5 style={{ color: "#81909D" }}>
                              {images[index].social}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {images.length - 1 >= index + 1 && (
                    <div className="d-lg-block d-md-block d-none col-md-4 col-sm-12 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                      <div>
                        <div style={{ padding: "5%" }}>
                          <h3>"</h3>
                          <p className="tip">
                            <span>{images[index + 1].content}</span>
                            {images[index + 1].content.length > 200
                              ? images[index + 1].content.substring(0, 200) +
                                "..."
                              : images[index + 1].content}
                          </p>
                          <br />
                          <div className="row">
                            <div className="col-9">
                              <p style={{ margin: "0px" }}>
                                {images[index + 1].title}
                              </p>
                              <h5 style={{ color: "#81909D" }}>
                                {images[index + 1].social}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {images.length - 1 >= index + 2 && (
                    <div className="d-lg-block d-md-block d-none col-md-4 col-sm-12 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
                      <div>
                        <div style={{ padding: "5%" }}>
                          <h3>"</h3>
                          <p className="tip">
                            <span>{images[index + 2].content}</span>
                            {images[index + 2].content.length > 200
                              ? images[index + 2].content.substring(0, 200) +
                                "..."
                              : images[index + 2].content}
                          </p>
                          <br />
                          <div className="row">
                            <div className="col-9">
                              <p style={{ margin: "0px" }}>
                                {images[index + 2].title}
                              </p>
                              <h5 style={{ color: "#81909D" }}>
                                {images[index + 2].social}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="offset-4 col-4 mt-5"
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
                <span
                  className="fa fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right shadow-soft rounded-circle mr-sm-2 mr-xl-4"
                  onClick={slideRight}
                  style={{
                    background: index === images.length - 1 ? "#1354D3" : "",
                    color: index === images.length - 1 ? "#fff" : "",
                  }}
                ></span>
              </div>
            </div>
          </div>
        )} */}
      </main>
    </>
  );
};

export default AppHomePage;
