import React, { useState } from "react";
import PostNewJob from "./PostNewJob";
import MyPostedJob from "./MyPostedJob";
import MyAccount from "./MyAccount";
import ProfileMatch from "./ProfileMatch";
import AppliedJob from "./AppliedJob";
import ChangePassword from "./ChangePassword";
import LogOut from "./LogOut";
import MyMessage from "./MyMessage";
import Sent from "./Sent";
import MyInbox from "./MyInbox";
export default function CompanyLogin() {
  const [activeKey, setActiveKey] = useState("myPostedJob");

  const renderComponent = () => {
    switch (activeKey) {
      case "postNewJob":
        return <PostNewJob />;
      case "myPostedJob":
        return <MyPostedJob />;
      case "myAccount":
        return <MyAccount />;
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
      case "sent":
        return <Sent />;
    }
  };
  return (
    <>
      <div>
        <div className="container border">
          <div className="row">
            <div className=" border my-3">
              <p className="text-center">
                Welcome to HR consultancy Management System!!
              </p>
            </div>
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-3 d-flex-col bg-white border">
                  <div className="text-center border">
                    <h6>Welcome</h6>
                    <h6>Shivansh Solutions</h6>
                  </div>
                  <br />
                  <div className="my-3 border">
                    <div className="text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("postNewJob")}>
                        Post New Job
                      </a>
                    </div>
                    <div
                      className={`text-center my-2 border ${
                        activeKey === "myPostedJob" ? "bg-warning" : ""
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("myPostedJob")}>
                        My Posted Job
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("myAccount")}>
                        My Account
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("profileMatch")}>
                        Profile Match
                      </a>
                    </div>
                    <div className=" text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("appliedJob")}>
                        Applied Job
                      </a>
                    </div>
                    <div className="text-center my-2 border">
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
                        Find Students here within a second!!
                      </h6>
                    </div>
                    <div className="container row">
                      <div className="col-6 d-flex-col my-1">
                        <div className="d-flex ">
                          <label
                            htmlFor="name"
                            className="label-control col-4 text-end"
                          >
                            Name:
                          </label>
                          <input type="text" className="col-8" />
                        </div>

                        <div className="d-flex mt-1 ">
                          <label
                            htmlFor="qualification"
                            className="label-control col-6 text-end"
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
                      <div className="col-6 d-flex-col my-1">
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
                          <form class="d-flex mt-1" role="search">
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
                    <a href="#" onClick={() => setActiveKey("sent")}>
                      Sent
                    </a>
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
