import React from 'react' ;
import "./index.css";
import logo from "../src/images/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid pt-2 pb-2 nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className ="navbar navbar-expand-lg navbar-light bg-light">
            <div className ="container-fluid">
                <NavLink className ="nav-logo" exact to ="/events"><img src= {logo} className=" img-fluid " alt ="logo" /></NavLink>
                <NavLink className ="navbar-brand" to ="/">Event Manager</NavLink>
                <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className ="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className ="nav-item">
                    <NavLink activeClassName = "menu_active" className ="nav-link active" aria-current="page" to="/">About</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink activeClassName = "menu_active" className ="nav-link" exact to="/events">Events</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink activeClassName = "menu_active" className ="nav-link" exact to="/contact">Contact us</NavLink>
                    </li>
                    <li className ="nav-item">
                    <NavLink activeClassName = "menu_active" className ="nav-link" exact to="/login">Login</NavLink>
                    </li>
                    {/* <li className ="nav-item">
                    <NavLink activeClassName = "menu_active" className ="nav-link" to="#">Link</NavLink>
                    </li> */}
                 </ul>  
                </div>
            </div>
            </nav>
          </div>
         </div>
        </div>
        </>
    );
};

export default Navbar;