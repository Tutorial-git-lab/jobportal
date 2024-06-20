import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = ({ onLogin }) => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [mobile, setMobile] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    if (userId === "jobseeker@gmail.com" && mobile === "8717948805")
      nav("/NewJobSeeker");
    else if (userId === "company@gmail.com" && mobile === "9754226005")
      nav("/NewCompany");
  };
  return (
    <>
      <div className="container my-3 border">
        <div className="row">
          <div className="col-12 d-flex-col">
            <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver border ">
              <div className="form_container p-5 rounded bg-dark text-white w-40 my-1">
                <h5 className="text-center mb-3">Registration</h5>
                <form onSubmit={handleLogin}>
                  <div className="form-group mb-0 ">
                    <label htmlFor="email" className="form-label">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className="form-group  mb-1">
                    <label htmlFor="mobile" className="form-label">
                      Mobile:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-1">
                    <input type="checkbox" />
                    <label htmlFor="check">Remember me</label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success mt-3">
                      Submit
                    </button>
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
export default SingUp;
