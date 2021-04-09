import React, { useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

import "../assets/css/vigilearn.css";
import laptop from "../assets/img/Macbook.png";
import learning from "../assets/img/learning.svg";
import exam from "../assets/img/exam.svg";
import exam2 from "../assets/img/exam2.svg";
import education2 from "../assets/img/education2.svg";
import download1 from "../assets/img/download1.svg";
import application from "../assets/img/application 1.svg";
import information from "../assets/img/information.svg";
import apply from "../assets/img/apply.svg";
import virtual_classroom from "../assets/img/virtual_classroom.svg";
import user_management from "../assets/img/user_management.svg";
import big_data_analysis from "../assets/img/big_data_analysis.svg";
import social_networking from "../assets/img/social_networking.svg";
import service_support from "../assets/img/service_support.svg";
import learning_platform from "../assets/img/learning_platform.svg";
import customization from "../assets/img/customization.svg";
import payment_integration from "../assets/img/payment_integation.svg";
import user_screening from "../assets/img/user_screening.svg";
import data_management from "../assets/img/data_management.svg";
import fee_payment from "../assets/img/fee_payment.svg";
import reporting from "../assets/img/reporting.svg";
import grade_management from "../assets/img/grade_book.svg";
import timetable from "../assets/img/time_table.svg";
import question from "../assets/img/question.svg";
import single from "../assets/img/single.svg";
import automatic from "../assets/img/automatic.svg";
import exams from "../assets/img/exams.svg";
import imports from "../assets/img/import.svg";
import random from "../assets/img/random.svg";
import white from "../assets/img/white.svg";
import organization from "../assets/img/orgganization.svg";
import easy from "../assets/img/easy.svg";
import detailed from "../assets/img/details.svg";
import config from "../assets/img/config.svg";

export interface AppVigiLearnPageProps {}

const AppVigiLearnPage: React.SFC<AppVigiLearnPageProps> = () => {
  const [selected, setSelected] = useState("learning");

  return (
    <>
      <Zoom>
        <div className="d-lg-flex position-relative vigihero">
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
                  <h5 style={{ color: "#fff" }}>VIGILEARN</h5>
                  <br />
                  <h1
                    className="display-4 mb-3"
                    style={{ color: "#ffff", fontSize: "36px" }}
                  >
                    Complete Education Management In A Box.
                  </h1>
                </div>

                <p className="lead" style={{ color: "#ffff" }}>
                  VigiLearn is an end-to-end suite of products designed to
                  provide a faster and more efficient way of managing
                  administrative and academic related processes.
                </p>
                <br />
                <div>
                  <a
                    className="btn btn-primary btn-wide transition-3d-hover"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.vigilearn.com"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Zoom>
      <div className=" laptopbg  min-vh-lg-100">
        <div className="space-2">
          <h5 className="text-center">OUR SOLUTIONS</h5>
          <br />
          <div className="container ">
            <div className="row">
              <div className="col-sm-3">
                <button
                  onClick={() => setSelected("learning")}
                  className="btn btn-block nbtn transition-3d-hover card-hover"
                  style={{
                    background: selected === "learning" ? "#E8EFFD" : "#fff",
                    color: selected === "learning" ? "#0F42A4" : "",
                    border: selected === "learning" ? "1px solid #0F42A4" : "",
                  }}
                >
                  <img
                    src={selected === "learning" ? learning : download1}
                    alt=""
                  />
                  <br />
                  Learning Management System
                </button>
              </div>
              <div className="col-sm-3">
                <button
                  onClick={() => setSelected("apply")}
                  className="btn btn-block nbtn transition-3d-hover card-hover"
                  style={{
                    background: selected === "apply" ? "#E8EFFD" : "#fff",
                    color: selected === "apply" ? "#0F42A4" : "",
                    border: selected === "apply" ? "1px solid #0F42A4" : "",
                  }}
                >
                  <img
                    src={selected === "apply" ? application : apply}
                    alt=""
                  />
                  <br />
                  Apply Portal
                </button>
              </div>
              <div className="col-sm-3">
                <button
                  onClick={() => setSelected("information")}
                  className="btn btn-block nbtn transition-3d-hover card-hover"
                  style={{
                    background: selected === "information" ? "#E8EFFD" : "#fff",
                    color: selected === "information" ? "#0F42A4" : "",
                    border:
                      selected === "information" ? "1px solid #0F42A4" : "",
                  }}
                >
                  <img
                    src={selected === "information" ? education2 : information}
                    alt=""
                  />
                  <br />
                  Student Information System
                </button>
              </div>
              <div className="col-sm-3">
                <button
                  onClick={() => setSelected("exam")}
                  className="btn btn-block nbtn transition-3d-hover card-hover"
                  style={{
                    background: selected === "exam" ? "#E8EFFD" : "#fff",
                    color: selected === "exam" ? "#0F42A4" : "",
                    border: selected === "exam" ? "1px solid #0F42A4" : "",
                  }}
                >
                  <img src={selected === "exam" ? exam2 : exam} alt="" />
                  <br />
                  Exam Portal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" container">
          <div className="row">
            <div className="offset-sm-1 col-sm-10">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={
                    selected === "learning"
                      ? "https://www.youtube.com/embed/jqEJfe1Y7GY"
                      : selected === "apply"
                      ? "https://www.youtube.com/embed/RJfsSMZAFkg"
                      : selected === "information"
                      ? "https://www.youtube.com/embed/3B6THzddTPk"
                      : "https://www.youtube.com/embed/9ZeapvCLfgM"
                  }
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fade left>
        {selected == "learning" ? (
          <div className="space-2" style={{ background: "#E9FAFB" }}>
            <div className="container ">
              <div className="row space-2">
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={virtual_classroom} alt="" />
                  <br />
                  <h3 className="text-primary">Virtual Classroom</h3>
                  <div>
                    <p className="text-dark">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={user_management} alt="" />
                  <br />
                  <h3 className="text-primary">User Management</h3>
                  <div>
                    <p className="text-dark">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={big_data_analysis} alt="" />
                  <br />
                  <h3 className="text-primary">Big Data Analytics</h3>
                  <div>
                    <p className="text-dark ">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={social_networking} alt="" />
                  <br />
                  <h3 className="text-primary">Social Networking</h3>
                  <div>
                    <p className="text-dark">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={service_support} alt="" />
                  <br />
                  <h3 className="text-primary">Service & Support</h3>
                  <div>
                    <p className="text-dark">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={customization} alt="" />
                  <br />
                  <h3 className="text-primary">Customization</h3>
                  <div>
                    <p className="text-dark ">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : selected == "apply" ? (
          <div className="space-2" style={{ background: "#E9FAFB" }}>
            <div className="container ">
              <div className="row space-2">
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={big_data_analysis} alt="" />
                  <br />
                  <h3 className="text-primary">Big Data Analytics</h3>
                  <div>
                    <p className="text-dark ">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={user_management} alt="" />
                  <br />
                  <h3 className="text-primary">User Management</h3>
                  <div>
                    <p className="text-dark">
                      Feel free to use these in any private or public space.
                      Please do not repackage and redistribute these as your
                      own. If you want to include them in your design tool like
                      Origami or Framer, contact us!
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={payment_integration} alt="" />
                  <br />
                  <h3 className="text-primary">Payment Integration</h3>
                  <div>
                    <p className="text-dark">
                      By integrating with reliable fintech platforms, the portal
                      facilitates the ease of billing and fund collection.
                    </p>
                  </div>
                </div>

                <div className=" offset-sm-3 offset-lg-4  col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={user_screening} alt="" />
                  <br />
                  <h3 className="text-primary">User screening</h3>
                  <div>
                    <p className="text-dark">
                      Administrators have the capability to assess active user
                      profiles based on set parameters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : selected == "information" ? (
          <div className="space-2" style={{ background: "#E9FAFB" }}>
            <div className="container ">
              <div className="row space-2">
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={data_management} alt="" />
                  <br />
                  <h3 className="text-primary">Data Management</h3>
                  <div>
                    <p className="text-dark">
                      This solution provides a centralized place to institute
                      data, which also includes a data backup facility. Admins
                      can easily access student records, add new entries, print
                      the records in a single click, export data, easily
                      customize fields and update information on any records.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={user_management} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Admission/Registration Management
                  </h3>
                  <div>
                    <p className="text-dark">
                      VigiLearn SIS stores the academic records of all users and
                      allows admins to generate custom reports which can include
                      any information tied to user profiles, and even limit
                      accessibility to specific users. This solution also gives
                      an automatic allotment of batches & subjects to students
                      for every academic year.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={fee_payment} alt="" />
                  <br />
                  <h3 className="text-primary">Fee Payment</h3>
                  <div>
                    <p className="text-dark ">
                      With VigiLearn SIS, fees can be collected online by
                      integrating the SIS with options of Payment Gateways
                      available. Admins can also schedule fee collection dates &
                      set up payments based on chosen parameters. Payment
                      receipts can also be generated for all users at the click
                      of a button.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={reporting} alt="" />
                  <br />
                  <h3 className="text-primary">Reporting</h3>
                  <div>
                    <p className="text-dark">
                      You can check reports related to finance, users, courses
                      and much more. Reports are dynamic and get automatically
                      updated as the data changes, and can be exported in
                      various formats including XML, CSV, Word & PDF.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={grade_management} alt="" />
                  <br />
                  <h3 className="text-primary">Gradebook Management</h3>
                  <div>
                    <p className="text-dark">
                      VigiLearn SIS allows admins to import marks in bulk, and
                      also easily edit the mark of the students for active and
                      inactive batches. The Gradebook provides all student
                      grades in one place, and users can view and download GPA
                      and CGPA reports.
                    </p>
                  </div>
                </div>

                <div className=" col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={timetable} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Timetable/Calender Management
                  </h3>
                  <div>
                    <p className="text-dark ">
                      With VigiLearn SIS, admin can set up timetable for courses
                      and also schedule dates for tests, assignment deadlines,
                      and exams. This timetable can be view by the students on
                      their SIS platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : selected == "exam" ? (
          <div className="space-2" style={{ background: "#E9FAFB" }}>
            <div className="container ">
              <div className="row space-2">
                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={question} alt="" />
                  <br />
                  <h3 className="text-primary">Question Bank Management</h3>
                  <div>
                    <p className="text-dark">
                      The exam software allows its users to manage and create
                      different question paper templates and set-up question
                      banks that are reusable anytime. The inclusion of text
                      editors and images could make the question paper
                      presentation more appealing.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={single} alt="" />
                  <br />
                  <h3 className="text-primary">Single Sign-On</h3>
                  <div>
                    <p className="text-dark">
                      The examination portal can be integrated to any LMS and it
                      allows students access the portal with the same
                      credential.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={automatic} alt="" />
                  <br />
                  <h3 className="text-primary">Automatic Reporting </h3>
                  <div>
                    <p className="text-dark ">
                      At the end of every exam session, the result is displayed
                      for the student to see and also updated on the
                      administrative end.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={exams} alt="" />
                  <br />
                  <h3 className="text-primary">Exam Instructions </h3>
                  <div>
                    <p className="text-dark">
                      An administrator can set exam instructions prior to the
                      exam date, instruction can also be edited. The instruction
                      will be displayed before the examination starts.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={imports} alt="" />
                  <br />
                  <h3 className="text-primary">Import and Export facilities</h3>
                  <div>
                    <p className="text-dark">
                      You can import & export users, exams, responses, reports
                      with ease.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3 card-hover transition-3d-hover p-4">
                  <img src={random} alt="" />
                  <br />
                  <h3 className="text-primary">Random Ordering of Questions</h3>
                  <div>
                    <p className="text-dark">
                      You can automatically randomize the order of the pages,
                      questions and choices for each respondent that accesses
                      the test.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={white} alt="" />
                  <br />
                  <h3 className="text-primary">White Label and Branding </h3>
                  <div>
                    <p className="text-dark ">
                      The portal allows white label, customize to suite your
                      organization and business model.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={organization} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Organization and User Management{" "}
                  </h3>
                  <div>
                    <p className="text-dark ">
                      You can create & assign users with login access. You can
                      group users within the same organization or class for ease
                      of examining.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={easy} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Easy and Multiple Scoring Methods
                  </h3>
                  <div>
                    <p className="text-dark ">
                      Results can either be graded in percentage or just numbers
                      depending on how the administrator sets it.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={detailed} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Detailed Report and Dashboard
                  </h3>
                  <div>
                    <p className="text-dark ">
                      An online exam software should give you enough insights
                      you would need through its advanced analytical reporting
                      and personalized dashboards. It should have the ability to
                      produce different kinds of real-time reports for the
                      institutional bigger picture. Reports that gauge the
                      success of a program along with students’ progress, which
                      could help in addressing the gaps at the early stage.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3  card-hover transition-3d-hover p-4">
                  <img src={config} alt="" />
                  <br />
                  <h3 className="text-primary">
                    Configuration of question type with different level of
                    difficulty 
                  </h3>
                  <div>
                    <p className="text-dark ">
                      This option allows easy creation of several question types
                      including multiple-choice, quizzes, and mathematical
                      formulas. It also allows the upload of images alongside
                      with questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Fade>
    </>
  );
};

export default AppVigiLearnPage;
