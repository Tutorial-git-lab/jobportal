import React from "react";
import { Link, Outlet } from "react-router-dom";
import MyAccount from "./MyAccount";
export default function CompanyLogin() {
  return (
    <>
      <div>
        <div className="container border">
          <div className="row">
            <div className=" border my-3">
              <div className="text-center">
                <h6>Welcome to HR consultancy Management System!!</h6>
              </div>
            </div>
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-3 d-flex-col bg-white border">
                  <div className="text-center border">
                    <h6>Welcome Anil</h6>
                  </div>
                  <div className="container text-center">
                    <img
                      className="img-fluid"
                      src="My-self Photo (2).jpg"
                      alt=""
                      width="100px"
                      height="100px"
                    />
                  </div>

                  <div>
                    <input type="file" />
                  </div>
                  <div className="my-1 border">
                    <div className="text-center my-1 border">
                      <Link to="/MyAccount">My Account</Link>
                    </div>

                    <div className="text-center my-1 border">
                      <Link to="/JobMatches">Job Matches</Link>
                      <Outlet />
                    </div>
                    <div className="text-center my-1 border">
                      <Link to="/PostNewJob">Post New Job</Link>
                    </div>
                    <div className="text-center my-1 border">
                      <Link to="/ProfileMatch">Profile Match</Link>
                    </div>
                    <div className=" text-center my-1 border">
                      <Link to="/AppliedJob">Applied Job</Link>
                    </div>
                    <div className="text-center my-1 border">
                      <Link to="/ChangePassword">Change Password</Link>
                    </div>
                    <div className="text-center my-1 border">
                      <Link to="/ChangePassword">Log Out </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex-col border">
                  <div className="row">
                    <div className="container border">
                      <h6 className="text-center">
                        Find Job here within a second!!
                      </h6>
                    </div>
                    <div className="container row">
                      <div className="col-6 d-flex-col my-3">
                        <div className="mb-3">
                          <div className="d-flex">
                            <label htmlFor="name" className="label-control">
                              Name:
                            </label>
                            <input type="text" className="form-control" />
                          </div>

                          <label
                            htmlFor="qualification"
                            className="label-control"
                          >
                            Qualification:
                          </label>
                          <select name="Select" id="">
                            <option value="0">MBA</option>
                            <option value="1">MCA</option>
                            <option value="2">BCA</option>
                            <option value="3">B.Tech</option>
                            <option value="4">B.Com</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 d-flex-col my-3">
                        <div>
                          <label htmlFor="name" className="label-control">
                            Skill:
                          </label>
                          <select name="select" id="">
                            <option value="0">ASP.Net</option>
                            <option value="1">React Js</option>
                            <option value="2">Angular</option>
                            <option value="3">JavaScript</option>
                            <option value="4">.Net</option>
                          </select>
                          <form class="d-flex" role="search">
                            <button class="btn btn-success" type="submit">
                              Search
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="container border">
                      <Outlet />
                    </div>
                  </div>
                </div>
                <div className="col-3 d-flex-col bg-white border">
                  <div className="text-center my-2 border">
                    <Link to="/">LogOut</Link>
                  </div>
                  <div className="text-center my-2 border">
                    <Link to="/MyMessage">My Message</Link>
                  </div>
                  <div className="text-center my-2 border">
                    <Link to="/MyBox">My Inbox</Link>
                  </div>
                  <div className="text-center my-2 border">
                    <Link to="/Sent">My Sent</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
