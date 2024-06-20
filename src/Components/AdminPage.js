import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import JobSeekerReport from "./JobSeekerReport";
import CompanyReport from "./CompanyReport";
import FeedBackReport from "./FeedBackReport";
import LogOut from "./LogOut";
export default function AdminPage() {
  const [activeKey, setActiveKey] = useState("jobSeekerReport");

  const renderComponent = () => {
    switch (activeKey) {
      case "jobSeekerReport":
        return <JobSeekerReport />;
      case "companyReport":
        return <CompanyReport />;
      case "FeedBackReport":
        return <FeedBackReport />;
      case "/":
        return <LogOut />;
    }
  };
  return (
    <>
      <div>
        <div className="container border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-4 d-flex-col bg-white border">
                  <div className="text-center p-2 border">
                    <h6>Welcome Admin</h6>
                  </div>

                  <div className="my-3 border">
                    <div
                      className={`text-center my-2 border ${
                        activeKey === "jobSeekerReport" ? "bg-warning" : ""
                      }`}
                    >
                      <div className="my-1 border"></div>
                      <a
                        href="#"
                        onClick={() => setActiveKey("jobSeekerReport")}
                      >
                        JobSeeker Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="#" onClick={() => setActiveKey("companyReport")}>
                        Company Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a
                        href="#"
                        onClick={() => setActiveKey("FeedBackReport")}
                      >
                        FeedBack Report
                      </a>
                    </div>
                    <div className="text-center my-2 border">
                      <a href="/" onClick={() => setActiveKey("LogOut")}>
                        LogOut
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex-col border">
                  {renderComponent()}
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
