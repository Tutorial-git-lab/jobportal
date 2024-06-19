import React from "react";
export default function MyInbox() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-white w-80 my-3">
        <div className="row">
          <div className="d-flex justify-content-center border">
            <h5 className="text-center mb-3 my-2 ">Job Seeker Message Sent</h5>
          </div>

          <div className="col-12 d-flex-col p-3 ">
            <textarea
              name="message"
              className=" my-2 w-100"
              rows="5"
              placeholder="Hello,How are you?"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
