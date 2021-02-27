import React from "react";

import { useState } from "react";

import "../assets/css/aboutpage.css";

import Arlene from "../assets/img/Arlene.png";
import shield from "../assets/img/shield.svg";
import a from '../assets/img/a.svg'
import b from '../assets/img/b.svg'
import c from '../assets/img/c.svg'
import d from '../assets/img/d.svg'
import e from '../assets/img/e.svg'
import f from '../assets/img/f.svg'
import g from '../assets/img/g.svg'
import h from '../assets/img/h.svg'
import i from '../assets/img/i.svg'
import a1 from '../assets/img/a1.svg'
import a2 from '../assets/img/a2.svg'
import a3 from '../assets/img/a3.svg'
import a4 from '../assets/img/a4.svg'


export interface AppAboutUsPageProps {}

const AppAboutUsPage: React.SFC<AppAboutUsPageProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [url, setUrl] = useState("");
  const [urlValid, setUrlValid] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {
    if (firstNameValidation(firstName) !== true) {
      return firstNameValidation(firstName);
    }

    if (lastNameValidation(lastName) !== true) {
      return lastNameValidation(lastName);
    }

    if (phoneValidation(phone) !== true) {
      return phoneValidation(phone);
    }

    if (emailValidation(email) !== true) {
      return emailValidation(email);
    }

    if (urlValidation(url) !== true) {
      return urlValidation(url);
    }

    handleClose();
    alert("Success");
  };

  const firstNameValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setFirstNameValid(`First name is required`);
      return false;
    }

    if (/[^a-zA-Z -]/.test(fieldValue)) {
      setFirstNameValid("Invalid characters");
      return false;
    }

    if (fieldValue.trim().length < 3) {
      setFirstNameValid(`First name needs to be at least three characters`);
      return false;
    }
    setFirstNameValid("");
    return true;
  };

  const lastNameValidation = (fieldValue: string): boolean => {
    if (fieldValue.trim() === "") {
      setLastNameValid(`Last name is required`);
      return false;
    }

    if (/[^a-zA-Z -]/.test(fieldValue)) {
      setLastNameValid("Invalid characters");
      return false;
    }

    if (fieldValue.trim().length < 3) {
      setLastNameValid(`Last name needs to be at least three characters`);
      return false;
    }

    setLastNameValid("");
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

  const phoneValidation = (phone: string): boolean => {
    if (/^[0]\d{10}$/.test(phone)) {
      setPhoneValid("");
      return true;
    }
    if (phone.trim() === "") {
      setPhoneValid("Phone is required");
      return false;
    }
    setPhoneValid("Please enter a valid phone");
    return false;
  };

  const urlValidation = (url: string): boolean => {
    if (
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
        url
      )
    ) {
      setUrlValid("");
      return true;
    }
    if (url.trim() === "") {
      setUrlValid("Portfolio URL is required");
      return false;
    }
    setUrlValid("Please enter a valid URL");
    return false;
  };

  return (
    <>
      <main id="content" role="main">
         <div
          className=" "
          style={{ backgroundColor:"#EAFBF1" ,height:"70vh"}}
        >
        <div className=" container space-bottom-2  align-items-lg-center space-top-2  min-vh-lg-100 position-relative"    style={{ paddingBottom: "5%"}} >
          <h1 style={{textAlign:"center",marginTop:"10px"}}>About Us</h1>

          <p style={{textAlign:"center"}}>
            Choose from any of our wide range of courses tailored to suit your
            needs.
            <br /> From software engineering to product management and more, We
            have got you covered
          </p>

         <div className="">
            <div className="row mx-n2 mx-lg-n3 mt-5 space-bottom-2  " style={{position:"absolute"}}>
              <div className="col-md-3">
                <img src={a1} alt="" className="img-fluid img-data"  />
               
              </div>
              <div className="col-md-3 mt-5">
                <img src={a2} alt="" className="img-fluid img-data"  />
             
              </div>
              <div className="col-md-3">
                <img src={a3} alt="" className="img-fluid img-data"  />
               
              </div>
              <div className="col-md-3 mt-5">
                <img src={a4} alt="" className="img-fluid img-data" />
              
              </div>
              
            
          </div>
         
          </div>
        </div>
</div>
        <br />
        <div className="container space-bottom-2">
          <div className=" space-top-3 space-bottom-2">
            <div className=" col-lg-12">
              <div  style={{ textAlign: "center" }} >
            
                <h3>Who we are</h3>
              </div>

           

               <div className="" style={{ justifyContent: "center",display:"flex" }} >
                 <div className="d-non col-lg-7">
              <h1  style={{ textAlign: "center" }}>A Team Dedicated To Driving Sustainable Change Through Education At All Levels </h1>
              <p className="col-lg-12" style={{ textAlign: "center" }}>
               Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
              </p>
            </div>
            </div>

           </div>
          </div>



    
        </div>

         <div className="container-fluid " style={{backgroundColor:"#22B9C3"}}>
          



        <div className="container space-2 space-top-xl-3 space-bottom-lg-3">
         

          <div className="row mx-n2 mx-lg-n3">
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto"}}>
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={shield} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Our Vision</h3>
                <div className="card-body">
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto"}}>
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={shield} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Our Mission</h3>
                <div className="card-body">
                 Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto"}}>
                <div className="card-icon">
                  <span className="span-icon">
                    <img src={shield} alt="" />
                  </span>
                </div>
                <h3 className="card-headers">Our Promise</h3>
                <div className="card-body">
                 Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
          
          
          
          </div>
        </div>
        </div>
          <div className="container space-2 space-top-xl-3 ">
                    <div>
                        <p style={{ textAlign: "center" }}>Our Team</p>
                        <h2 style={{ textAlign: "center",color:"#041644" }}>Super Stellar Cast</h2>
                      
                    </div>
                    <br /><br />
                    <div className="row">
                     
                        <div className="col-md-4">
                            <img src={a} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Femi Shonubi</h5>
                            <p>General Manager</p>
                            <br />
                        </div>
                        <div className="col-md-4" >
                            <img src={b} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Kassim Ajani</h5>
                            <p>Operations Manager</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={c} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Tomi Ogedengbe</h5>
                            <p>Finance Manager</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={d} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Onyedikachi Oyigah</h5>
                            <p>Lead Business Analyst</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={e} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Adeyanju Lawal</h5>
                            <p>Product Manager</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={f} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Omokorede Amund</h5>
                            <p>Marketing & Communications Manager</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={g} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Omoyeni Oguntade</h5>
                            <p>Customer Success Lead</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={h} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Johnson Adekunle</h5>
                            <p>Enterprise Architect</p>
                            <br />
                        </div>
                        <div className="col-md-4">
                            <img src={i} alt="" className="img-fluid img-data" style={{height:"248px"}} />
                            <br />
                            <br />
                            <h5>Oluwakemi Elega</h5>
                            <p>Associate Business Analyst</p>
                            <br />
                        </div>
                      
                    </div>

                </div>
      </main>
     
    </>
  );
};

export default AppAboutUsPage;
