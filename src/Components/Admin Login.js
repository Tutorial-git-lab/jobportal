import React from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <div className="container my-3 border">
      <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver border ">
        <div className="form_container p-5 rounded bg-dark text-white needs-validation w-40 my-1">
          <h5 className="text-center mb-1">Login Form</h5>
          <div className="form-group was-validated mb-0 ">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required />
            <div className="invalid-feedback">please Enter your email..</div>
          </div>
          <div className="form-group was-validated mb-0">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required />
            <div className="invalid-feedback">please Enter Password..</div>
          </div>
          <div className="form-group mb-0">
            <input type="checkbox" />
            <label htmlFor="check">Remember me</label>
          </div>
          <div>
            <Link to="/AdminPage" className="btn btn-success w-100 mt-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
