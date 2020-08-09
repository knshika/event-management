import React from 'react';
import web from "../src/images/about.png";
import "./index.css";
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <>
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                  <div className='col-10 mx-auto'>
                    <div className = "row">
                     <div className = "col-md-6 pt-5 pt-lg-4 order-2 order-lg-1 d-flex justify-center flex-column">
                         <h1>
                             Grow your skills with our <strong className="brand-name"> Eventia </strong>
                         </h1>
                         <h2 className="my-3">
                              This event management system is where you will find links to request for any event details and registration forms  
                         </h2>
                         <div className = "mt-3">
                             <NavLink exact to="/events " className="btn-get-started ">
                                 Get started
                             </NavLink>
                             <NavLink  exact to="/login " className="btn-get-started ">
                                 Login
                             </NavLink>
                         </div>
                        </div>
                         <div className = "col-8 col-lg-6 pt-2 order-1 order-lg-2 header-img" >
                             <img src= {web} className=" img-fluid animated" alt ="home img" />
                         </div>
                     </div>
                 </div>
              </div>
            </div>
          </section>
        </>
    );
};

export default About;