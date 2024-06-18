import React from "react";

export default function FeedBack() {
  return (
    <>
      <h4 className="text-center my-3">FeedBack</h4>
      <div className="d-flex align-item-center justify-content-center w-80 vh-80 bg-white ">
        <form className="form-group mb-2 w-40 vh-50 p-5 border">
          <div className="d-flex mb-2 p-2">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex mb-2 p-2">
            <label htmlFor="contact" className="form-label">
              Contact:
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex mb-2 p-2">
            <label htmlFor="feedback" className="form-label">
              FeedBack:
            </label>
            <textarea type="text" className="form-control" row="10" />
          </div>
        </form>
      </div>
    </>
  );
}
