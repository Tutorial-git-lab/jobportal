import React from "react";

export default function LoginForm() {
  return (
    <>
      <div className=" form-container d-flex bg-dark align-item-center justify-content-center w-100 vh-100 ">
        <div className=" login rounded-2 bg-white">
          <h2 className=" text-center mb-2">Login Form</h2>
          <form className="needs-validation">
            <div className="form-group was-validated mb-3">
              <label htmlFor="email" className="form-lable">
                Email Addres
              </label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">please Enter your email..</div>
            </div>
            <div className="form-group was-validated mb-3">
              <label htmlFor="password" className="form-lable">
                Password
              </label>
              <input type="password" className="form-control" required />
              <div className="invalid-feedback">
                please Enter your password..
              </div>
            </div>
            <div className="form-group form-check mb-3">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="check" className="form-check-lable">
                Remember me..
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
