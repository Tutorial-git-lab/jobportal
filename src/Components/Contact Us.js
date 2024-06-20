import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="d-flex align-item-center justify-content-center w-80 vh-50 bg-white ">
        <form className="form-group  w-40 vh-50 bg-dark text-white p-5 border">
          <h4 className="text-center mb-3">Contact Us</h4>
          <div className="d-flex mb-1 p-1 row">
            <label htmlFor="name" className="form-label col-4 text-end">
              Name:
            </label>
            <input type="text" className="col-8" placeholder="Anil Dhakad" />
          </div>
          <div className="d-flex mb-1 p-1 row">
            <label htmlFor="mobile" className="form-label col-4 text-end">
              Email:
            </label>
            <input
              type="email"
              className="col-8"
              placeholder="anildhakad8717@gmail.com"
            />
          </div>
          <div className="d-flex mb-1 p-1 row">
            <label htmlFor="email" className="form-label col-4 text-end">
              Mobile:
            </label>
            <input type="text" className="col-8" placeholder="8717948805" />
          </div>
          <div className="d-flex mb-1 p-1 row">
            <label htmlFor="message" className="form-label col-4 text-end">
              Message:
            </label>
            <textarea
              name="text"
              id="textid"
              rows="2"
              className="col-8"
            ></textarea>
          </div>
          <div className="text-center p-2">
            <input type="submit" className="btn btn-primary " />
          </div>
        </form>
      </div>
    </>
  );
}
