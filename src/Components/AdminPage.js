import React from "react";
import { Link } from "react-router-dom";
export default function AdminPage() {
  return (
    <>
      <div>
        <div className="container border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80">
              <div className="row">
                <div className="col-4 d-flex-col bg-white border">
                  <div className="text-center border">
                    <h6>Welcome Admin</h6>
                  </div>
                  <br />
                  <div className="my-3 border">
                    <div className="text-center my-2 border">
                      <Link to="/JobSeekerReport">JobSeeker Report</Link>
                    </div>
                    <div className="text-center my-2 border">
                      <Link to="/CompanyReport">Company Report</Link>
                    </div>
                    <div className="text-center my-2 border">
                      <Link to="/FeedBackReport">FeedBack Report</Link>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex-col border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
