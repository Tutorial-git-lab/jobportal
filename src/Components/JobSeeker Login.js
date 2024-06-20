import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MyAccount from "./MyAccount";
import JobMatches from "./JobMatches";
import ProfileMatch from "./ProfileMatch";
import AppliedJob from "./AppliedJob";
import ChangePassword from "./ChangePassword";
import PostNewJob from "./PostNewJob";
import LogOut from "./LogOut";
import MyMessage from "./MyMessage";
import MyInbox from "./MyInbox";
import MySent from "./MySent";
export default function JobSeekerLogin() {
  const [activeKey, setActiveKey] = useState("myAccount");
  const renderComponent = () => {
    switch (activeKey) {
      case "myAccount":
        return <MyAccount />;
      case "jobMatches":
        return <JobMatches />;
      case "postNewJob":
        return <PostNewJob />;
      case "profileMatch":
        return <ProfileMatch />;
      case "appliedJob":
        return <AppliedJob />;
      case "changePassword":
        return <ChangePassword />;
      case "/":
        return <LogOut />;
      case "myMessage":
        return <MyMessage />;
      case "myInbox":
        return <MyInbox />;
      case "mySent":
        return <MySent />;
      default:
        break;
    }
  };
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
                    <div
                      className={`text-center my-1 border ${
                        activeKey === "myAccount" ? "bg-info" : ""
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("myAccount")}>
                        My Account
                      </a>
                    </div>

                    <div className="text-center my-1 border">
                      <a href="#" onClick={() => setActiveKey("jobMatches")}>
                        Job Matches
                      </a>
                    </div>
                    <div className="text-center my-1 border">
                      <a href="#" onClick={() => setActiveKey("postNewJob")}>
                        Post New Job
                      </a>
                    </div>
                    <div className="text-center my-1 border">
                      <a href="#" onClick={() => setActiveKey("profileMatch")}>
                        Profile Match
                      </a>
                    </div>
                    <div className=" text-center my-1 border">
                      <a href="#" onClick={() => setActiveKey("appliedJob")}>
                        Applied Job
                      </a>
                    </div>
                    <div className="text-center my-1 border">
                      <a
                        href="#"
                        onClick={() => setActiveKey("changePassword")}
                      >
                        Change Password
                      </a>
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
                    <div className="container border">{renderComponent()}</div>
                  </div>
                </div>
                <div className="col-3 d-flex-col bg-white border">
                  <div className="text-center my-2 border">
                    <a href="/" onClick={() => setActiveKey("/")}>
                      Log Out
                    </a>
                  </div>
                  <div className="text-center my-2 border">
                    <a href="#" onClick={() => setActiveKey("myMessage")}>
                      My Message
                    </a>
                  </div>
                  <div className="text-center my-2 border">
                    <a href="#" onClick={() => setActiveKey("myInbox")}>
                      My Inbox
                    </a>
                  </div>
                  <div className="text-center my-2 border">
                    <a href="#" onClick={() => setActiveKey("mySent")}>
                      My Sent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
