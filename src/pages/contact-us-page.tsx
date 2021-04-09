import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

import "../assets/css/contactpage.css";
import { postMethods } from "../helpers/api";
import Socials from "../components/socials";
export interface AppContactUsPageProps {}

const AppContactUsPage: React.SFC<AppContactUsPageProps> = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    nameValid: "",
    emailValid: "",
    messageValid: "",
  });

  const [showAlert, setShowAlert] = useState({
    text: "",
    show: false,
    color: "success",
  });

  const [buttonText, setButtonText] = useState({
    text: "Submit",
    disabled: false,
  });

  const handleSubmit = async () => {
    if (nameValidation(form.name) !== true) {
      return nameValidation(form.name);
    }

    if (emailValidation(form.email) !== true) {
      return emailValidation(form.email);
    }

    if (messageValidation(form.message) !== true) {
      return messageValidation(form.message);
    }

    setButtonText({
      text: "Loading ...",
      disabled: true,
    });

    const res = await postMethods("/MailingList/sendmail", {
      recipientEmail: "info@gardenacademy.io",
      name: "Edutech Support Page",
      message: `    Name :   ${form.name}
                    <br/>                 
                    Email:   ${form.email}
                    <br/>
                    Message: ${form.message}`,
    });

    if (res.status) {
      setButtonText({
        text: "Submit",
        disabled: false,
      });

      setShowAlert({
        text: "Contact us information was submitted successfully.",
        show: true,
        color: "success",
      });

      setForm({
        name: "",
        email: "",
        message: "",
        nameValid: "",
        emailValid: "",
        messageValid: "",
      });
    } else {
      setShowAlert({
        text: "Contact us information was not successful.",
        show: true,
        color: "danger",
      });
    }
  };

  const nameValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setForm({ ...form, nameValid: "First name is required" });
      return false;
    }

    if (/[^a-zA-Z -]/.test(fieldValue)) {
      setForm({ ...form, nameValid: "Invalid characters" });
      return false;
    }

    if (fieldValue.trim().length < 3) {
      setForm({
        ...form,
        nameValid: "First name needs to be at least three characters",
      });
      return false;
    }
    setForm({ ...form, nameValid: "" });
    return true;
  };

  const emailValidation = (email: string): boolean => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setForm({ ...form, emailValid: "" });
      return true;
    }
    if (email.trim() === "") {
      setForm({ ...form, emailValid: "Email is required" });
      return false;
    }
    setForm({ ...form, emailValid: "Please enter a valid email" });
    return false;
  };

  const messageValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setForm({ ...form, messageValid: "Message is required" });
      return false;
    }

    if (fieldValue.trim().length < 50) {
      setForm({
        ...form,
        messageValid: "Message needs to be at least 50 characters",
      });
      return false;
    }

    if (fieldValue.trim().length > 300) {
      setForm({
        ...form,
        messageValid: "Message is limited to 300 words, keep it short",
      });
      return false;
    }
    setForm({ ...form, messageValid: "" });
    return true;
  };

  return (
    <main id="content" role="main">
      <div className="hero-page">
        <h1 className="d-none d-sm-block animated slideInDown">Contact Us</h1>
        <h2 className="d-block d-sm-none">Contact Us</h2>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <br className="d-block d-lg-none" />
      <br className="d-block d-lg-none" />
      <br className="d-block d-lg-none" />
      <br className="d-block d-lg-none" />
      <br className="d-block d-lg-none" />
      <br className="d-block d-lg-none" />
      <Zoom>
        <div className="container space-top-6 space-top-lg-4 space-bottom-2">
          <div
            className="card"
            style={{
              height: "inherit",
              padding: "0 5%",
              boxShadow: "0px 4px 10px rgba(143, 148, 155, 0.25)",
              borderRadius: "16px",
              background: "#fff",
              border: "none",
            }}
          >
            <div className="row ">
              <div className="space-right-3 space-top-3 space-bottom-2 col-md-6">
                <div className="mb-4">
                  <h2 className="text-primary">
                    Need Information? <br />
                    Ask Questions!
                  </h2>
                </div>
                <br />
                <p style={{ paddingRight: "15%" }}>
                  In order to best serve you, please note that our support team
                  is available from Monday to Friday between the hours of 9 am
                  and 5 pm (WAT). All inquiries will be responded to in one
                  business day.
                </p>
              </div>

              <div className="space-top-2 space-bottom-2 col-md-6">
                <form className="js-validate">
                  <div className=" p-4 p-md-6">
                    <div className="row">
                      <div className="col-sm-12">
                        <Alert
                          show={showAlert.show}
                          variant={showAlert.color}
                          onClose={() =>
                            setShowAlert({ ...showAlert, show: false })
                          }
                          dismissible
                        >
                          <Alert.Heading className="text-light">
                            {showAlert.text}
                          </Alert.Heading>
                        </Alert>
                      </div>
                      <div className="col-sm-12">
                        <div className="js-form-message form-group">
                          <label htmlFor="firstName" className="input-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="eg. Kingsley Omin"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            onBlur={(e) => nameValidation(e.target.value)}
                          />
                          <p className="text-danger">{form.nameValid}</p>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="js-form-message form-group">
                          <label
                            htmlFor={"emailAddress"}
                            className="input-label"
                          >
                            Email address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="emailAddress"
                            id="emailAddress"
                            placeholder="eg. Kingsleyomin@gmail.com"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            onBlur={(e) => emailValidation(e.target.value)}
                          />
                          <p className="text-danger">{form.emailValid}</p>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="js-form-message form-group">
                          <label htmlFor={"message"} className="input-label">
                            How can we help you
                            <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <textarea
                              className="form-control"
                              rows={4}
                              name="message"
                              id="message"
                              placeholder="Enter message here"
                              required
                              value={form.message}
                              onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                              }
                              onBlur={(e) => messageValidation(e.target.value)}
                            ></textarea>
                          </div>
                          <p className="text-danger">{form.messageValid}</p>
                          <p>This field is limited to 300 characters</p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <button
                      type="button"
                      style={{ background: "#0F42A4", borderRadius: "2px" }}
                      className="btn btn-block btn-primary transition-3d-hover"
                      onClick={handleSubmit}
                      disabled={buttonText.disabled}
                    >
                      {buttonText.text}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <div style={{ display: "none" }}>
        * Edutech Project <br />
        * Done By Satowind (Ogugua Tochukwu) <br />
        * 08038385263, Evensatowind@gmail.com <br />
        *Satoseries (Web app and mobile App engineering) <br />* For Ventures
        Garden Group
      </div>
    </main>
  );
};

export default AppContactUsPage;
