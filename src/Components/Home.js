import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ onLogin }) => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    if (userId === "admin@gmail.com") nav("/Adminpage");
    else if (userId === "company@gmail.com") nav("/CompanyLogin");
    else if (userId === "jobseeker@gmai.com") nav("/JobSeekerLogin");
  };
  return (
    <>
      <div className="container my-3 border">
        <div className="row">
          <div className="col-8 d-flex-col border">
            <img
              src="logo/online-job-portal.jpg"
              alt=""
              height={400}
              width={550}
            />
          </div>
          <div className="col-4 d-flex-col">
            <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver border ">
              <div className="form_container p-5 rounded bg-dark text-white needs-validation w-40 my-1">
                <h5 className="text-center mb-1">Login Form</h5>
                <form onSubmit={handleLogin}>
                  <div className="form-group was-validated mb-0 ">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      please Enter your UserId..
                    </div>
                  </div>
                  <div className="form-group was-validated mb-0">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      please Enter Password..
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <input type="checkbox" />
                    <label htmlFor="check">Remember me</label>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Login
                    </button>
                    <p
                      className="mt-3 cur d-flex justify-content-center text-white "
                      onClick={() => {
                        nav("/Register");
                      }}
                    >
                      Don't have an Account? Signup
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
