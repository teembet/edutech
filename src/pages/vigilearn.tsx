import React from "react";

import { useState } from "react";


import "../assets/css/vigilearn.css";
import Arlene from "../assets/img/Arlene.png";
import shieldb from "../assets/img/shieldb.svg";
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


export interface AppVigilearnProps {}

const AppVigilearnPage: React.SFC<AppVigilearnProps> = () => {
 

  return (
    <>
      <main id="content" role="main">
         <div
          className=" "
          style={{ backgroundColor:"#EAFBF1" ,height:"50vh"}}
        >
        <div className=" container space-bottom-2  align-items-lg-center space-top-2  min-vh-lg-100 position-relative"    style={{ paddingBottom: "5%",textAlign:"center" }} >
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="col-lg-6">

              
            <p style={{ color:"#0E347E"}}>VIGILEARN</p>
          <h1  style={{textAlign:"center",marginTop:"10px",color:"#0E347E"}}>Complete Education Management In A Box</h1>

          <p>
           VigiLearn is an end-to-end suite of products designed to provide a faster and more efficient way of managing administrative and academic related processes.
          </p>
            </div>
          </div>
<button className="btn btn-md  btn-primary white-text" style={{textAlign:"center"}}>Speak With Us</button>
        
        </div>
         <div className="col-sm-9">
   <div className="embed-responsive embed-responsive-16by9">
    {/* <iframe id="iframe" name="iframe" className="embed-responsive-item" src="https://s.codepen.io/Vibegaz/debug/aVOZJZ/vWMRwnQExJPr" width="640" height="274" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
   </div>
  </div>
</div>
        <br />
       

        
        <div className="container">
  <div className="row" >
    <div className="col-md-12">
      <h3 style={{textAlign:"center"}}>Our Solutions</h3>

			<div className="tabbable-panel">
				<div className="tabbable-line">
					<ul className="nav nav-tabs " style={{justifyContent:"space-around"}}>
						<li className="active">
							<a href="#tab_default_1" data-toggle="tab">
Learning Management System </a>
						</li>
						<li>
							<a href="#tab_default_2" data-toggle="tab">
Apply Portal</a>
						</li>
						<li>
							<a href="#tab_default_3" data-toggle="tab">
Student Information System</a>
						</li>
        
           
					</ul>
					<div className="tab-content">
						<div className="tab-pane active" id="tab_default_1">
				 <div className="container-fluid ">
          



        <div className="container space-2 space-top-xl-3 space-bottom-lg-3">
         

          <div className="row mx-n2 mx-lg-n3">
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
 <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 mt-3">
              <div className="card" style={{border:"none",height:"auto",backgroundColor:"transparent",boxShadow:"none"}}>
                <div className="card-icon" style={{justifyContent:"center"}}>
                  <span className="span-icon">
                    <img src={shieldb} alt="" />
                  </span>
                </div>
                <h3 className="card-headers" style={{textAlign:"center"}}>Our Vision</h3>
                <div className="card-body" style={{textAlign:"center"}}>
                Through the deployment of our custom platforms in partnership with progressive global Institutions, we have been able to power more than 20 programs & courses, which has led to more than 20,000 enrolments.
                </div>
              </div>
            </div></div>
           
          
          
          
          </div>

          <div className="row mt-5" style={{justifyContent:"center"}}>
<button className="btn btn-md  btn-primary white-text">Speak With Us</button>
<span className="ml-3" style={{alignSelf:"center"}}>
    Download Product Information
</span>
          </div>
        </div>
        </div>
							</div>
						<div className="tab-pane" id="tab_default_2">
							<p>
Tab 2.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>

						</div>
						<div className="tab-pane" id="tab_default_3">
							<p>
Tab 3.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div>
           
					</div>
				</div>
			</div>

    </div>
  </div>
</div>
      </main>
     
    </>
  );
};

export default AppVigilearnPage;
