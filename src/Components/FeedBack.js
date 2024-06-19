import React from "react";

export default function FeedBack() {
  return (
    <>
      <h4 className="text-center my-1">FeedBack</h4>
      <div className="d-flex align-item-center justify-content-center w-80 vh-50 bg-white ">
        <form className="form-group m-2 w-40 vh-50 p-5 border">
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="name" className="form-label col-4 text-end">
              <strong>Name:</strong>
            </label>
            <input type="text" className="col-8" placeholder="Anil Dhakad" />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="mobile" className="form-label col-4 text-end">
              <strong>Mobile:</strong>
            </label>
            <input type="text" className="col-8" placeholder="8717948805" />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="email" className="form-label col-4 text-end">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              className="col-8"
              placeholder="anildhakad8717@gmail.com"
            />
          </div>
          <div className="d-flex mb-2 p-1 row">
            <label htmlFor="feedback" className="form-label col-4 text-end">
              <strong>Feedback:</strong>
            </label>
            <textarea
              name="text"
              id="textid"
              rows="2"
              className="col-8"
            ></textarea>
          </div>
          <div className="text-center p-2">
            <button type="submit" className="btn btn-outline-secondary">
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
