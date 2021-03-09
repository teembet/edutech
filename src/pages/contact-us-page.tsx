import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "../assets/css/contactpage.css";
import Socials from "../components/socials";
export interface AppContactUsPageProps {}

const AppContactUsPage: React.SFC<AppContactUsPageProps> = () => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState("");

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
    if (nameValidation(name) !== true) {
      return nameValidation(name);
    }

    if (emailValidation(email) !== true) {
      return emailValidation(email);
    }

    if (messageValidation(message) !== true) {
      return messageValidation(message);
    }

    setButtonText({
      text: "Loading ...",
      disabled: true,
    });

    const response = await fetch(
      "https://educollect-api.edutechng.com/api/MailingList/sendmail",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          recipientEmail: "support@edutechng.com",
          name: "Edutech Support Page",
          message: `name :   ${name}
                    <br/>
                    email:   ${email}
                    <br/>
                    message: ${message}`,
        }), // body data type must match "Content-Type" header
      }
    );

    setButtonText({
      text: "Submit",
      disabled: false,
    });

    setShowAlert({
      text: "Contact us information was submitted successfully.",
      show: true,
      color: "success",
    });
  };

  const nameValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setNameValid(`First name is required`);
      return false;
    }

    if (/[^a-zA-Z -]/.test(fieldValue)) {
      setNameValid("Invalid characters");
      return false;
    }

    if (fieldValue.trim().length < 3) {
      setNameValid(`First name needs to be at least three characters`);
      return false;
    }
    setNameValid("");
    return true;
  };

  const emailValidation = (email: string): boolean => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailValid("");
      return true;
    }
    if (email.trim() === "") {
      setEmailValid("Email is required");
      return false;
    }
    setEmailValid("Please enter a valid email");
    return false;
  };

  const messageValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setMessageValid(`Message is required`);
      return false;
    }

    if (fieldValue.trim().length < 50) {
      setMessageValid(`Message needs to be at least fifty characters`);
      return false;
    }

    if (fieldValue.trim().length > 300) {
      setMessageValid(`Message is limited to 300 words, keep it short`);
      return false;
    }

    setMessageValid("");
    return true;
  };

  return (
    <main id="content" role="main">
      <div className="hero-page">
        <h1 className="d-none d-sm-block">Contact Us</h1>
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
                In order to best serve you, please note that our support team is
                available from Monday to Friday between the hours of 9 am and 5
                pm (WAT). All inquiries will be responded to in one business
                day.
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={(e) => nameValidation(e.target.value)}
                        />
                        <p className="text-danger">{nameValid}</p>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="js-form-message form-group">
                        <label htmlFor={"emailAddress"} className="input-label">
                          Email address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="emailAddress"
                          id="emailAddress"
                          placeholder="eg. Kingsleyomin@gmail.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={(e) => emailValidation(e.target.value)}
                        />
                        <p className="text-danger">{emailValid}</p>
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onBlur={(e) => messageValidation(e.target.value)}
                          ></textarea>
                        </div>
                        <p className="text-danger">{messageValid}</p>
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
