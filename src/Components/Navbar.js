import React from "react";
// import PropTypes from 'proptypes-'
import { Link, NavLink, Outlet } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center p-0 ">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              {props.title}
            </a>
            <div
              className="collapse navbar-collapse p-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto p-0 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <strong>Home</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewJobSeeker">
                    <strong> Job Seeker</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NewCompany">
                    <strong>New Company</strong>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Feedback">
                    <strong>FeedBack</strong>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/ContactUs">
                    <strong>Contact Us</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    <strong>Login</strong>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

// Navbar.propTypes={
//         title:PropTypes.string.isRequired,
//          aboutText:PropTypes.string
// }
